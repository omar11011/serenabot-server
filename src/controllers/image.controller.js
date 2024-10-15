const fs = require('fs')
const path = require('path')

const randomImage = async (folder, subfolder) => {
    let imgFolder = `upload/${folder}${subfolder ? '/' + subfolder : ''}`
    let rootFolder = path.join(__dirname, '../public', imgFolder)

    return new Promise((resolve, reject) => {
        fs.readdir(rootFolder, (err, files) => {
            if (err) return resolve({ url: null })
            
            let file = files[Math.floor(Math.random() * files.length)]
            
            resolve({
                file,
                url: `${process.env.SITE_URL}/${imgFolder}/${file.replace(' ', '%20')}`,
            })
        })
    })
}

const searchedImage = async (folder, image) => {
    let rootFolder = path.join(__dirname, '../public/upload', folder)

    return new Promise((resolve, reject) => {
        fs.readdir(rootFolder, (err, files) => {
            if (err) return resolve({ url: null })
            
            let file = files.filter(e => image.toLowerCase().replace('.', '') === e.split('.').slice(0, -1).join(' ').toLowerCase())
            console.log(file)
            resolve({
                file: file.length > 0 ? file[0] : null,
                url: `${process.env.SITE_URL}/upload/${folder}/${file[0].replace(' ', '%20')}`,
            })
        })
    })
}

module.exports = {
    random: async (req, res) => {
        let { folder, subfolder } = req.query
    
        if (!folder) return res.json({ error: 'No especificaste el directorio' })
    
        let file = await randomImage(folder, subfolder)
    
        return res.json(file)
    },
    searched: async (req, res) => {
        let { folder, image } = req.query
    
        if (!folder) return res.json({ error: 'No especificaste el directorio' })
    
        let file = await searchedImage(folder, image)
    
        return res.json(file)
    }
}