const fs = require('fs')
const path = require('path')

const images = fs.readdirSync(path.join(__dirname, './images'))

module.exports = [
    {
        "name": "Pradera",
        "description": "Se encuentran en la hierba alta de las rutas."
    },
    {
        "name": "Bosque",
        "description": "Son, en su mayoría, Pokémon de tipo bicho y planta. Viven en lugares un poco protegidos, por lo que suelen estar en lugares muy específicos, lo que no quiere decir que sean necesariamente raros."
    },
    {
        "name": "Agua Dulce",
        "description": "Son, en su mayoría, Pokémon de tipo agua que viven en lagos o ríos."
    },
    {
        "name": "Agua Salada",
        "description": "Son, en su mayoría, Pokémon de tipo agua que viven en la superficie del mar o en las profundidades."
    },
    {
        "name": "Caverna",
        "description": "Habitan en cuevas, siempre aislados; necesitan de la oscuridad, y no son usualmente vistos en la hierba."
    },
    {
        "name": "Montaña",
        "description": "Son vistos en las zonas rocosas y altas cumbres, así como en cuevas y superficies."
    },
    {
        "name": "Campo",
        "description": "Son Pokémon que viven aislados de todo contacto humano en zonas inhóspitas, como desiertos; aunque suelen ser vistos en las zonas donde salen a comer o recargarse."
    },
    {
        "name": "Ciudad",
        "description": "Son Pokémon domesticados o que viven en las ciudades, por lo que ninguno de ellos es legendario."
    },
    {
        "name": "Raro",
        "description": "Todos los Pokémon son Pokémon legendarios (excepto Unown), por lo que son muy raramente vistos."
    }
].map(e => {
    // if (images.includes(`${e.name}.gif`)) {
    //     e.image = {
    //         data: fs.readFileSync(path.join(__dirname, `./images/${e.name}.gif`)),
    //         contentType: 'gif',
    //     }
    // }
    e.image = `${process.env.SITE_URL}/api/image/pokemon-habitat/${e}.gif`
    return e
})