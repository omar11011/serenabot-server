const Schema = require('./schema')

module.exports = [
    {
        "name": "Kanto",
        "description": "Kanto (Kanto en inglés, カントー Kantō en japonés) es una región del mundo Pokémon situada al este de Johto y al sur de Sinnoh. Su paisaje está inspirado en la zona de Japón del mismo nombre, la región de Kantō."
    },
    {
        "name": "Johto",
        "description": "Johto (Johto en inglés, ジョウト Jōto en japonés) es una región del mundo Pokémon situada al oeste de Kanto. Su paisaje está inspirado en la zona de Japón llamada región de Kinki y el oeste de la región de Tōkai."
    },
    {
        "name": "Hoenn",
        "description": "Hoenn (Hoenn en inglés; ホウエン o 豊縁 Hoenn en japonés) es la región del mundo Pokémon donde se desarrolla la historia de los videojuegos Pokémon Rubí, Zafiro y Esmeralda, así como sus remakes, Pokémon Rubí Omega y Pokémon Zafiro Alfa. También es hogar de «el trío ancestral»: los Pokémon legendarios Groudon, Kyogre y Rayquaza."
    },
    {
        "name": "Sinnoh",
        "description": "Sinnoh (Sinnoh en inglés; シンオウ Sinnoh en japonés) es una región del mundo Pokémon. Está ubicada al norte de las regiones de Kanto, Johto y Hoenn. En ella se desarrollan los videojuegos Pokémon Diamante, Pokémon Perla y Pokémon Platino, los remakes Pokémon Diamante Brillante y Pokémon Perla Reluciente y Leyendas Pokémon: Arceus.\nEs importante mencionar que anteriormente esta región era conocida como Hisui."
    },
    {
        "name": "Teselia",
        "description": "Teselia (Unova en inglés; イッシュ Isshu en japonés) es la región en donde se desarrolla la trama de los videojuegos Pokémon Negro y Pokémon Blanco, y posteriormente también es escenario de los videojuegos Pokémon Negro 2 y Pokémon Blanco 2. Aquí también se encuentra la Academia Arándano en El disco índigo, la segunda parte de la expansión de Pokémon Escarlata y Pokémon Púrpura."
    },
    {
        "name": "Kalos",
        "description": "Kalos (Kalos en inglés, カロス Kalos en japonés) es la región del mundo Pokémon donde se desarrolla la trama de los videojuegos Pokémon X y Pokémon Y en la sexta generación y de Leyendas Pokémon: Z-A de la novena generación. La región está basada en Francia y Ciudad Luminalia, en París, lo que se aprecia sobre todo en la Torre Prisma, monumento semejante a la Torre Eiffel. Kalos presenta la mayor población de cualquier región, así como la variedad más amplia de especies Pokémon, que proceden de todo el mundo. Tal es así que su Pokédex regional la divide en tres partes: Kalos Centro, Kalos Costa y Kalos Montaña."
    },
    {
        "name": "Alola",
        "description": "Alola (Alola en inglés, アローラ Alola en japonés) es una región del mundo Pokémon. Se trata de un archipiélago compuesto por cuatro islas naturales: Melemele, Akala, Ula-Ula, y Poni, cuenta además con una isla artificial: el Paraíso Æther. En esta región se desarrollan los juegos de la séptima generación, Pokémon Sol, Luna, Ultrasol y Ultraluna. La región está basada en Hawái."
    },
    {
        "name": "Galar",
        "description": "Galar (Galar en inglés; ガラル地方 Región de Galar en japonés) es la región en la que tiene lugar la historia de los videojuegos Pokémon Espada y Pokémon Escudo."
    },
    {
        "name": "Paldea",
        "description": "Paldea (Paldea en inglés; パルデア地方 Región de Paldea en japonés) es la región en la que tiene lugar la historia de los videojuegos Pokémon Escarlata y Pokémon Púrpura."
    }
].map(e => new Schema(e))