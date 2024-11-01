const lodash = require('lodash')

async function loadPokemonRegions() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonRegion'))).map(e => {
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return e
    })
    await loadData('PokemonRegion', data)
}

async function loadPokemonHabitats() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonHabitat'))).map(e => {
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return e
    })
    await loadData('PokemonHabitat', data)
}

async function loadPokemonGrowths() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonGrowth'))).map(e => {
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return e
    })
    await loadData('PokemonGrowth', data)
}

async function loadPokemonNatures() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonNature'))).map(e => {
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return e
    })
    await loadData('PokemonNature', data)
}

async function loadPokemonEggGroups() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonEggGroup'))).map(e => {
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return e
    })
    await loadData('PokemonEggGroup', data)
}

async function loadPokemonTypes() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonType'))).map(e => {
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return e
    })

    await loadData('PokemonType', data)
}

async function loadPokemonMovements() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonMovement')))
    
    let TypeModel = require('../models/PokemonType')
    let typeIds = await TypeModel.find({}).lean().select('_id name')

    data = data.map(e => {
        let typeId = typeIds.find(t => t.name === e.type)
        e.type = typeId ? typeId._id : null
        e.key = e.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

        return e
    })

    await loadData('PokemonMovement', data)
}

async function loadPokemonSpecie() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonSpecie')))

    let HabitatModel = require('../models/PokemonHabitat')
    let GrowthModel = require('../models/PokemonGrowth')
    let EggGroupModel = require('../models/PokemonEggGroup')

    let habitatIds = await HabitatModel.find({}).lean().select('_id name')
    let growtIds = await GrowthModel.find({}).lean().select('_id name')
    let eggIds = await EggGroupModel.find({}).lean().select('_id name')

    for (let i = 0; i < data.length; i++) {
        let habitatId = habitatIds.find(h => h.name === data[i].habitat)
        let growthId = growtIds.find(g => g.name === data[i].growth)

        data[i].habitat = habitatId ? habitatId._id : null
        data[i].growth = growthId ? growthId._id : null
        
        for (let j = 0; j < data[i].eggGroup.length; j++) {
            let eggId = eggIds.find(egg => egg.name === data[i].eggGroup[j])

            data[i].eggGroup[j] = eggId ? eggId._id : null
        }

        data[i].eggGroup = data[i].eggGroup.filter(Boolean)
        data[i].key = data[i].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }

    await loadData('PokemonSpecie', data)
}

async function loadPokemonForm() {
    let data = JSON.parse(JSON.stringify(require('../data/PokemonForm')))

    let SpecieModel = require('../models/PokemonSpecie')
    let RegionModel = require('../models/PokemonRegion')
    let TypeModel = require('../models/PokemonType')

    let specieIds = await SpecieModel.find({}).lean().select('_id name')
    let regionIds = await RegionModel.find({}).lean().select('_id name')
    let typeIds = await TypeModel.find({}).lean().select('_id name')

    for (let i = 0; i < data.length; i++) {
        let specieId = specieIds.find(e => e.name === data[i].specie)
        let regionId = regionIds.find(e => e.name === data[i].region)
        
        data[i].specie = specieId ? specieId._id : null
        data[i].region = regionId ? regionId._id : null

        for (let j = 0; j < data[i].type.length; j++) {
            let typeId = typeIds.find(e => e.name === data[i].type[j])

            data[i].type[j] = typeId ? typeId._id : null
        }

        data[i].type = data[i].type.filter(Boolean)
        data[i].key = data[i].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }

    await loadData('PokemonForm', data)
}

async function loadData(model, data) {
    const BATCH_SIZE = 500
    const Model = require(`../models/${model}`)

    const existingDocs = await Model.find({}).lean().exec()
    const existingMap = new Map(existingDocs.map(doc => [doc.name, doc]))

    const jsonSet = new Set(data.map(doc => doc.name))
    const dbSet = new Set(existingMap.keys())

    const updates = []
    const inserts = []

    for (const doc of data) {
        const dbDoc = existingMap.get(doc.name)

        if (dbDoc) {
            const isDifferent = !lodash.isMatch(dbDoc, doc)

            if (isDifferent) {
                updates.push({
                    updateOne: {
                        filter: { _id: dbDoc._id },
                        update: { $set: doc }
                    }
                });
            }
        }
        else {
            inserts.push(doc)
        }

        if (updates.length === BATCH_SIZE) {
            await Model.bulkWrite(updates)
            updates.length = 0
        }
    }

    const toDelete = Array.from(dbSet).filter(id => !jsonSet.has(id))

    if (updates.length > 0) {
        await Model.bulkWrite(updates)
        console.log(`[${model}] Actualizados ${updates.length} documentos.`)
    }

    for (let i = 0; i < inserts.length; i += BATCH_SIZE) {
        const batch = inserts.slice(i, i + BATCH_SIZE)
        await Model.insertMany(batch)
        console.log(`[${model}] Insertados ${batch.length} documentos.`)
    }

    if (toDelete.length > 0) {
        await Model.deleteMany({ name: { $in: toDelete } })
        console.log(`[${model}] Eliminados ${toDelete.length} documentos obsoletos.`)
    }

    console.log(`[${model}] Sincronización completa.`)
}

module.exports = async () => {
    await loadPokemonRegions()
    await loadPokemonHabitats()
    await loadPokemonGrowths()
    await loadPokemonNatures()
    await loadPokemonEggGroups()
    await loadPokemonTypes()
    await loadPokemonMovements()
    await loadPokemonSpecie()
    await loadPokemonForm()
}