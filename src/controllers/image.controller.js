const fs = require('fs')
const path = require('path')

const randomImage = async (folder, subfolder) => {
    let imgFolder = `upload/${folder}${subfolder ? '/' + subfolder : ''}`
    let rootFolder = path.join(__dirname, '../public', imgFolder)

    return new Promise((resolve, reject) => {
        fs.readdir(rootFolder, (err, files) => {
            if (err) return resolve({ url: null })
            
            let file = files[Math.floor(Math.random() * files.length)]
            file = file.split(' ').join('%20')
            
            resolve({
                file,
                url: `${process.env.SITE_URL}/${imgFolder}/${file}`,
            })
        })
    })
}

const searchedImage = async (folder, image) => {
    let rootFolder = path.join(__dirname, '../public/upload', folder)
    
    return new Promise((resolve, reject) => {
        fs.readdir(rootFolder, (err, files) => {
            if (err) return resolve({ url: null })
            
            let file = files.find(e => image.toLowerCase().replace('.', '') === e.split('.').slice(0, -1).join(' ').toLowerCase())
            
            if (!file) return resolve({ url: null })

            file = file.split(' ').join('%20')
            resolve({
                file: file || null,
                url: `${process.env.SITE_URL}/upload/${folder}/${file}`,
            })
        })
    })
}

const getImage = async (req, res) => {
    const folder = req.params.folder
    const image = req.params.image

    if (!folder || !image) return res.json({ error: 'No se especificó la carpeta o la imagen' })

    try {
        const imagePath = path.join(__dirname, `../data/${folder}/images/${image}`)
        if (!fs.existsSync(imagePath)) return res.status(404).json({ error: 'Imagen no encontrada' })
    
        const imageDoc = fs.readFileSync(imagePath)
        const ext = path.extname(image).toLowerCase();
        let contentType
        switch (ext) {
            case '.png':
                contentType = 'image/png'
                break
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg'
                break
            case '.gif':
                contentType = 'image/gif'
                break
            case '.bmp':
                contentType = 'image/bmp'
                break
            case '.svg':
                contentType = 'image/svg+xml'
                break
            default:
                return res.status(415).json({ error: 'Tipo de imagen no soportado' });
        }
        res.set('Content-Type', contentType)
        res.send(imageDoc)
    }
    catch (error) {
        console.error('Error al obtener la imagen:', error);
        res.status(500).send('Error en el servidor');
    }
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
    },
    getImage,
}