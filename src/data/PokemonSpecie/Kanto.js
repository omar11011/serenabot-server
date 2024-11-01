const Bulbasaur = () => {
    const bulbasaur = {
        pokedex: 1,
        name: 'Bulbasaur',
        gender: {
            male: 87.1,
            female: 12.5,
        },
        habitat: 'Pradera',
        growth: 'Parabólico',
        eggGroup: ['Monstruo', 'Planta'],
        captureRatio: 45,
        friendship: 50,
    }

    const ivysaur = {
        ...JSON.parse(JSON.stringify(bulbasaur)),
        pokedex: 2,
        name: 'Ivysaur',
    }

    const venusaur = {
        ...JSON.parse(JSON.stringify(ivysaur)),
        pokedex: 3,
        name: 'Venusaur',
    }

    return [ bulbasaur, ivysaur, venusaur ]
}

module.exports = [
    ...Bulbasaur()
]