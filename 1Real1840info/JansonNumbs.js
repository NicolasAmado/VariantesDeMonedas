const janson1Real1840 = [
    { "Variante": "CJ# 16.1.1", "Anverso": "A1", "Reverso": "R1", "P1": 1,  "P2": 0  , "P3": "_", },
    { "Variante": "CJ# 16.1.2", "Anverso": "A2", "Reverso": "R1", "P1": 1,  "P2": 1  , "P3": "_", },
    { "Variante": "CJ# 16.1.3", "Anverso": "A3", "Reverso": "R1", "P1": 0,  "P2": "_", "P3": 1, },
    { "Variante": "CJ# 16.1.4", "Anverso": "A3", "Reverso": "R3", "P1": 0,  "P2": "_", "P3": 1, },
    { "Variante": "CJ# 16.1.5", "Anverso": "A3", "Reverso": "R10", "P1": 0, "P2": "_", "P3": 1, },
    { "Variante": "CJ# 16.1.6", "Anverso": "A4", "Reverso": "R1", "P1": 0,  "P2": "_", "P3": 0, },
    { "Variante": "CJ# 16.1.7", "Anverso": "A4", "Reverso": "R3", "P1": 0,  "P2": "_", "P3": 0, },
    { "Variante": "CJ# 16.1.8", "Anverso": "A4", "Reverso": "R10", "P1": 0, "P2": "_", "P3": 0, },
    { "Variante": "CJ# 16.1.9", "Anverso": "A4", "Reverso": "R11", "P1": 0, "P2": "_", "P3": 0, },
    { "Variante": "CJ# 16.1.10", "Anverso": "A5", "Reverso": "R2", "P1": 1, "P2": 0, "P3": "_", },
    { "Variante": "CJ# 16.1.11", "Anverso": "A6", "Reverso": "R4", "P1": 0, "P2": "_", "P3": 0, },
    { "Variante": "CJ# 16.1.12", "Anverso": "A6", "Reverso": "R8", "P1": 0, "P2": "_", "P3": 0, },
    { "Variante": "CJ# 16.1.13", "Anverso": "A8", "Reverso": "R6", "P1": 1, "P2": 0, "P3": "_", },
    { "Variante": "CJ# 16.1.14", "Anverso": "A9", "Reverso": "R4", "P1": 1, "P2": 0, "P3": "_", },
    { "Variante": "CJ# 16.1.15", "Anverso": "A9", "Reverso": "R7", "P1": 1, "P2": 0, "P3": "_", },
    { "Variante": "CJ# 16.1.16", "Anverso": "A10", "Reverso": "R3", "P1": 1,"P2": 1, "P3": "_", },
    { "Variante": "CJ# 16.1.17", "Anverso": "A10", "Reverso": "R8", "P1": 1,"P2": 1, "P3": "_", },
    { "Variante": "CJ# 16.1.18", "Anverso": "A11", "Reverso": "R9", "P1": 0,"P2": "_", "P3": 1, },
    { "Variante": "CJ# 16.3.1", "Anverso": "A2", "Reverso": "R5", "P1": 1,  "P2": 1  , "P3": "_", },
    { "Variante": "CJ# 16.4.1", "Anverso": "A7", "Reverso": "R5", "P1": 1,  "P2": 1, "P3": "_", }
];

const decisionTree1Real1840 = {
    texto: "¿La moneda tiene hoja superior doble en la rama izquierda?",
    clave: "P1",
    aclaracion_si: "En el extremo la rama izquierda, hay una hoja doble en la parte superior.",
    aclaracion_no: "En el extremo la rama izquierda, hay una hoja simple en la parte superior.",
    imagen: "1Real1840info/Pregunta1.jpg",
    loe: [
        { // No
            texto: "¿La moneda tiene hoja superior doble en la rama derecha?",
            clave: "P3",
            aclaracion_si: "En el extremo la rama derecha, hay una hoja doble en la parte superior.",
            aclaracion_no: "En el extremo la rama derecha, hay una hoja simple en la parte superior.",
            imagen: "1Real1840info/Pregunta3.jpg",
            loe: [

            ]
        },
        { // Sí
            texto: "¿La moneda tiene hoja inferior doble en la rama izquierda?",
            clave: "P2",
            aclaracion_si: "En el extremo la rama izquierda, hay una hoja doble en la parte inferior.",
            aclaracion_no: "En el extremo la rama izquierda, hay una hoja simple en la parte inferior.",
            imagen: "1Real1840info/Pregunta2.jpg",
            loe: [

            ]
            
        }
    ]
};