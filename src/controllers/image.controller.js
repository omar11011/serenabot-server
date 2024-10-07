const fs = require('fs')
const path = require('path')

const randomImage = async (folder, subfolder) => {
    let imgFolder = `upload/${folder}/${subfolder ? subfolder + '/' : ''}`
    let rootFolder = path.join(__dirname, '../public', imgFolder)

    return new Promise((resolve, reject) => {
        fs.readdir(rootFolder, (err, files) => {
            if (err) return resolve(null)
            
            let file = files[Math.floor(Math.random() * files.length)]
            
            resolve(process.env.SITE_URL + imgFolder + file)
        })
    })
}

module.exports = async (req, res) => {
    let { folder, subfolder } = req.query

    if (!folder) return res.json({ error: 'No especificaste el directorio' })

    let url = await randomImage(folder, subfolder)

    return res.json({ url })
}