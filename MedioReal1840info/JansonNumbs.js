const jansonMedioReal1840 = [
    { "Variante": "CJ# 17.1.1", "Anverso": "A1", "Reverso": "R1", "P1": 0, "P2": "_", "P3": 0  , },
    { "Variante": "CJ# 17.1.2", "Anverso": "A1", "Reverso": "R2", "P1": 0, "P2": "_", "P3": 1  , },
    { "Variante": "CJ# 17.1.3", "Anverso": "A1", "Reverso": "R3", "P1": 1, "P2": 1  , "P3": "_", },
    { "Variante": "CJ# 17.1.4", "Anverso": "A1", "Reverso": "R4", "P1": 1, "P2": 0  , "P3": "_", }
];

const decisionTreeMedioReal1840 = {
    texto: "¿La V de Viva está alineada con una hoja?",
    clave: "P1",
    aclaracion_si: "La segunda hoja de la rama izquierda está alineada con la V de Viva.",
    aclaracion_no: "La segunda hoja de la rama izquierda está desalineada con la V de Viva.",
    imagen: "MedioReal1840info/Pregunta1.jpg",
    loe: [
        { //no
            texto: "¿E y R de Federación alineadas con las hojas?",
            clave: "P3",
            aclaracion_si: "La segunda E y la R de Federación están alineadas con las hojas de la rama derecha.",
            aclaracion_no: "La segunda E y la R de Federación están antes de las hojas de la rama derecha.",
            imagen: "MedioReal1840info/Pregunta3.jpg",
            loe: [
                {  name: "CJ# 17.1.1, A1, R1" }, //no
                {  name: "CJ# 17.1.2, A1, R2" } //si
            ]
        },
        { //si
            texto: "¿El espacio entre los extremos de las ramas es chico?",
            clave: "P2",
            aclaracion_si: "El espacio entre los extremos de las ramas es chico, del tamaño de una letra.",
            aclaracion_no: "El espacio entre los extremos de las ramas es grande, del tamaño de dos letras.",
            imagen: "MedioReal1840info/Pregunta2.jpg",
            loe: [
                {  name: "CJ# 17.1.4, A1, R4" }, //no
                {  name: "CJ# 17.1.3, A1, R3" } //si
            ]
        }
    ]
};