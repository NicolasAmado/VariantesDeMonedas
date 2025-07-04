const janson4centavos1854 = [
    { "Variante": "CJ# 1.1.1", "Anverso": "A1", "Reverso": "R1", "P1": 1, "P2": "_", "P3": 0, "P4": "_", "P5": 1, "P6": "_", "P7": 1, "P8": "_", "P9": "_", "P10": "_"},
    { "Variante": "CJ# 1.1.2", "Anverso": "A2", "Reverso": "R2", "P1": 1, "P2": "_", "P3": 0, "P4": "_", "P5": 0, "P6": 0, "P7": "_", "P8": "_", "P9": "_", "P10": "_"},
    { "Variante": "CJ# 1.1.3", "Anverso": "A3", "Reverso": "R3", "P1": 1, "P2": "_", "P3": 0, "P4": "_", "P5": 0, "P6": 1, "P7": "_", "P8": "_", "P9": "_", "P10": "_"},
    { "Variante": "CJ# 1.1.4", "Anverso": "A4", "Reverso": "R1", "P1": 1, "P2": "_", "P3": 0, "P4": "_", "P5": 1, "P6": "_", "P7": 0, "P8": 0, "P9": "_", "P10": 0},
    { "Variante": "CJ# 1.1.5", "Anverso": "A4", "Reverso": "R3", "P1": 1, "P2": "_", "P3": 0, "P4": "_", "P5": 1, "P6": "_", "P7": 0, "P8": 0, "P9": "_", "P10": 1},
    { "Variante": "CJ# 1.2.1", "Anverso": "A5", "Reverso": "R1", "P1": 0, "P2": 1, "P3": "_", "P4": "_", "P5": "_", "P6": "_", "P7": "_", "P8": "_", "P9": 1, "P10": "_"},
    { "Variante": "CJ# 1.2.2", "Anverso": "A5", "Reverso": "R4", "P1": 0, "P2": 1, "P3": "_", "P4": "_", "P5": "_", "P6": "_", "P7": "_", "P8": "_", "P9": 0, "P10": "_"},
    { "Variante": "CJ# 1.2.3", "Anverso": "A6", "Reverso": "R1", "P1": 0, "P2": 0, "P3": "_", "P4": "_", "P5": "_", "P6": "_", "P7": "_", "P8": "_", "P9": "_", "P10": "_"},
    { "Variante": "CJ# 1.3.1", "Anverso": "A7", "Reverso": "R3", "P1": 1, "P2": "_", "P3": 0, "P4": "_", "P5": 1, "P6": "_", "P7": 0, "P8": 1, "P9": "_", "P10": "_"},
    { "Variante": "CJ# 1.4.1", "Anverso": "A8", "Reverso": "R3", "P1": 1, "P2": "_", "P3": 1, "P4": 0, "P5": "_", "P6": "_", "P7": "_", "P8": "_", "P9": "_", "P10": "_"},
    { "Variante": "CJ# 1.5.1", "Anverso": "A9", "Reverso": "R5", "P1": 1, "P2": "_", "P3": 1, "P4": 1, "P5": "_", "P6": "_", "P7": "_", "P8": "_", "P9": "_", "P10": "_"}
];

const decisionTree4centavos1854 = {
    texto: "¿Tiene su moneda puntos alrededor de la fecha?",
    clave: "P1",
    aclaracion_si: "Se ven puntos claramente alrededor de la fecha.",
    aclaracion_no: "No hay puntos visibles alrededor de la fecha.",
    imagen: "4centavos1854info/Pregunta1.jpg",
    loe: [
        { // No
            texto: "¿La segunda N de Confederación está alineada con el rayo largo?",
            clave: "P2",
            aclaracion_si: "N alineada con el rayo fino largo.",
            aclaracion_no: "N desalineada con el rayo fino largo.",
            imagen: "4centavos1854info/Pregunta2.jpg",
            loe: [
                { name: "CJ# 1.2.3, A6 R1" }, // No
                { // Sí
                    texto: "¿Cuatro alineada con la segunda A de Nacional?",
                    clave: "P9",
                    aclaracion_si: "A de Nacional alineada con la palabra Cuatro.",
                    aclaracion_no: "A de Nacional por debajo de la palabra Cuatro.",
                    imagen: "4centavos1854info/Pregunta9.jpg",
                    loe: [
                        { name: "CJ# 1.2.2, A5 R4" }, // No
                        { name: "CJ# 1.2.1, A5 R1 " }  // Sí
                    ]
                }
            ]
        },
        { // Sí
            texto: "¿Hay 3 rayos largo-corto-largo seguidos en la parte inferior derecha del anverso?",
            clave: "P3",
            aclaracion_si: "Hay al menos 3 rayos finos que tienen el patrón largo-corto-largo.",
            aclaracion_no: "Todos los rayos finos alternan entre largo-corto-largo y corto-largo-corto.",
            imagen: "4centavos1854info/Pregunta3.jpg",
            loe: [
                { // Sí
                    texto: "¿La segunda N de Confederación está alineada con un rayo?",
                    clave: "P5",
                    aclaracion_si: "N alineada con el rayo fino largo.",
                    aclaracion_no: "N desalineada con el rayo fino largo.",
                    imagen: "4centavos1854info/Pregunta5.jpg",
                    loe: [
                        { // No
                            texto: "¿El rayo grueso está después de la C de Confederación?",
                            clave: "P6",
                            aclaracion_si: "El rayo grueso está por delante de la C de Confederación.",
                            aclaracion_no: "El rayo grueso está por detrás de la C de Confederación.",
                            imagen: "4centavos1854info/Pregunta6.jpg",
                            loe: [
                                { name: "CJ# 1.1.2, A2 R2" }, // No
                                { name: "CJ# 1.1.3, A3 R3" }  // Sí
                            ]
                        },
                        { // Sí
                            texto: "¿El comienzo de la segunda N de Argentina está alineada con un rayo?",
                            clave: "P7",
                            aclaracion_si: "Inicio de la N alineada con el rayo fino largo.",
                            aclaracion_no: "Final de la N alineada con el rayo fino largo.",
                            imagen: "4centavos1854info/Pregunta7.jpg",
                            loe: [
                                { // No
                                    texto: "¿La moneda tiene 4 rayos seguidos?",
                                    clave: "P8",
                                    aclaracion_si: "Sobre el 54, hay 4 rayos finos seguidos.",
                                    aclaracion_no: "Sobre el 54, hay 3 rayos finos, como en el resto de la moneda.",
                                    imagen: "4centavos1854info/Pregunta8.jpg",
                                    loe: [
                                        { // No
                                            texto: "¿Cuatro alineada con la segunda N de Nacional?",
                                            clave: "P10",
                                            aclaracion_si: "Segunda N de Nacional alineada con la palabra Cuatro.",
                                            aclaracion_no: "Segunda A de Nacional alineada con la palabra Cuatro (N desalineada).",
                                            imagen: "4centavos1854info/Pregunta10.jpg",
                                            loe: [
                                                { name: "CJ# 1.1.4, A4 R1" }, // No
                                                { name: "CJ# 1.1.5, A4 R3" }  // Sí
                                            ]
                                        },
                                        { name: "CJ# 1.3.1, A7 R3" }  // Sí
                                    ]
                                },
                                { name: "CJ# 1.1.1, A1 R1" } // Sí
                            ]
                        }
                    ]
                },
                { // No
                    texto: "¿Los rayos largo-corto-largo están en toda la moneda?",
                    clave: "P4",
                    aclaracion_si: "Toda la moneda tiene el patrón largo-corto-largo.",
                    aclaracion_no: "El patrón largo-corto-largo sólo se repite 3 veces.",
                    imagen: "4centavos1854info/Pregunta4.jpg",
                    loe: [
                        { name: "CJ# 1.4.1, A8 R3" }, // No
                        { name: "CJ# 1.5.1, A9 R5" }  // Sí
                    ]
                }
            ]
        }
    ]
};