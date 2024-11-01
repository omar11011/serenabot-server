module.exports = [
    {
        name: "Acero",
        emoji: "<:acero_emoji:1299112359884750898>",
        effectiveness: {
            superEffective: ["Hada", "Hielo", "Roca"],
            ineffective: ["Acero", "Agua", "Eléctrico", "Fuego"]
        }
    },
    {
        name: "Agua",
        emoji: "<:tipo_agua:1299111849928949820>",
        effectiveness: {
            superEffective: ["Fuego", "Roca", "Tierra"],
            ineffective: ["Agua", "Dragón", "Planta"]
        }
    },
    {
        name: "Bicho",
        emoji: "<:bicho_emoji:1299112570107465729>",
        effectiveness: {
            superEffective: ["Planta", "Psíquico", "Siniestro"],
            ineffective: ["Acero", "Fantasma", "Fuego", "Hada", "Lucha", "Veneno", "Volador"]
        }
    },
    {
        name: "Dragón",
        emoji: "<:dragon_emoji:1299112636675264522>",
        effectiveness: {
            superEffective: ["Dragón"],
            ineffective: ["Acero"],
            doesNotAffect: ["Hada"]
        }
    },
    {
        name: "Eléctrico",
        emoji: "<:electrico_emoji:1299112714194522122>",
        effectiveness: {
            superEffective: ["Agua", "Volador"],
            ineffective: ["Dragón", "Eléctrico", "Planta"],
            doesNotAffect: ["Tierra"]
        }
    },
    {
        name: "Fantasma",
        emoji: "<:fantasma_emoji:1299112812206886993>",
        effectiveness: {
            superEffective: ["Fantasma", "Psíquico"],
            ineffective: ["Siniestro"],
            doesNotAffect: ["Normal"]
        }
    },
    {
        name: "Fuego",
        emoji: "<:tipo_fuego:1299112893165469787>",
        effectiveness: {
            superEffective: ["Acero", "Bicho", "Hielo", "Planta"],
            ineffective: ["Agua", "Dragón", "Fuego", "Roca"]
        }
    },
    {
        name: "Hada",
        emoji: "<:hada_emoji:1299112964774957066>",
        effectiveness: {
            superEffective: ["Dragón", "Lucha", "Siniestro"],
            ineffective: ["Acero", "Fuego", "Veneno"]
        }
    },
    {
        name: "Hielo",
        emoji: "<:hielo_emoji:1299113036040110180>",
        effectiveness: {
            superEffective: ["Dragón", "Planta", "Tierra", "Volador"],
            ineffective: ["Acero", "Agua", "Fuego", "Hielo"]
        }
    },
    {
        name: "Lucha",
        emoji: "<:lucha_emoji:1299113112057679913>",
        effectiveness: {
            superEffective: ["Acero", "Hielo", "Normal", "Roca", "Siniestro"],
            ineffective: ["Bicho", "Hada", "Psíquico", "Veneno", "Volador"],
            doesNotAffect: ["Fantasma"]
        }
    },
    {
        name: "Normal",
        emoji: "<:normal_emoji:1299113185839808533>",
        effectiveness: {
            ineffective: ["Acero", "Roca"],
            doesNotAffect: ["Fantasma"]
        }
    },
    {
        name: "Planta",
        emoji: "<:planta_emoji:1299113255276384357>",
        effectiveness: {
            superEffective: ["Agua", "Roca", "Tierra"],
            ineffective: ["Acero", "Bicho", "Dragón", "Fuego", "Planta", "Veneno", "Volador"]
        }
    },
    {
        name: "Psíquico",
        emoji: "<:psiquico_emoji:1299113333709869109>",
        effectiveness: {
            superEffective: ["Lucha", "Veneno"],
            ineffective: ["Acero", "Psíquico"],
            doesNotAffect: ["Siniestro"]
        }
    },
    {
        name: "Roca",
        emoji: "<:roca_emoji:1299113414127517828>",
        effectiveness: {
            superEffective: ["Bicho", "Fuego", "Hielo", "Volador"],
            ineffective: ["Acero", "Lucha", "Siniestro"]
        }
    },
    {
        name: "Siniestro",
        emoji: "<:siniestro_emoji:1299113487330705408>",
        effectiveness: {
            superEffective: ["Fantasma", "Psíquico"],
            ineffective: ["Hada", "Lucha", "Siniestro"]
        }
    },
    {
        name: "Tierra",
        emoji: "<:tipo_tierra:1299113569442467870>",
        effectiveness: {
            superEffective: ["Acero", "Eléctrico", "Fuego", "Roca", "Veneno"],
            ineffective: ["Bicho", "Planta"],
            doesNotAffect: ["Volador"]
        }
    },
    {
        name: "Veneno",
        emoji: "<:tipo_veneno:1299113597636706314>",
        effectiveness: {
            superEffective: ["Hada", "Planta"],
            ineffective: ["Fantasma", "Roca", "Tierra", "Veneno"],
            doesNotAffect: ["Acero"]
        }
    },
    {
        name: "Volador",
        emoji: "<:tipo_volador:1299113625021054976>",
        effectiveness: {
            superEffective: ["Bicho", "Lucha", "Planta"],
            ineffective: ["Acero", "Eléctrico", "Roca"]
        }
    }
]