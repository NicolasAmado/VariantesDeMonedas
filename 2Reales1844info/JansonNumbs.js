const janson2reales1844 = [
    { "Variante": "CJ# 15.1.1", "Anverso": "A1", "Reverso": "R1", "P1": 1, "P2": "_", "P3": 1  , "P4": 0 },
    { "Variante": "CJ# 15.1.2", "Anverso": "A2", "Reverso": "R2", "P1": 1, "P2": "_", "P3": 1  , "P4": 1 },
    { "Variante": "CJ# 15.2.1", "Anverso": "A2", "Reverso": "R3", "P1": 0, "P2": 1  , "P3": "_", "P4": "_" },
    { "Variante": "CJ# 15.2.2", "Anverso": "A3", "Reverso": "R3", "P1": 0, "P2": 0  , "P3": "_", "P4": "_" },
    { "Variante": "CJ# 15.3.1", "Anverso": "A4", "Reverso": "R2", "P1": 1, "P2": "_", "P3": 0  , "P4": "_" },
];

const decisionTree2reales1844 = {
    texto: "¿Hay un guión debajo del punto de la abreviatura?",
    clave: "P1",
    aclaracion_si: "Debajo del punto de la abreviatura R.s hay un guión.",
    aclaracion_no: "No hay guión debajo del punto de la abreviatura R.s.",
    imagen: "2Reales1844info/Pregunta1.jpg",
    loe: [
        { // No
            texto: "¿A de Ayres alineada con la parte derecha del moño?",
            clave: "P2",
            aclaracion_si: "La A de Ayres está alineada con la parte derecha del moño.",
            aclaracion_no: "La A de Ayres está después de la parte derecha del moño.",
            imagen: "2Reales1844info/Pregunta2.jpg",
            loe: [
                { name: "CJ# 15.2.2, A3, R3"}, //no
                { name: "CJ# 15.2.1, A2, R3"} //si
            ]
        },
        { // Sí
            texto: "¿Punto bajo después de Ayres?",
            clave: "P3",
            aclaracion_si: "El punto después de Ayres está bajo siguiendo la línea de la letra (Ayres.).",
            aclaracion_no: "El punto después de Ayres está alto siguiendo la línea de la letra (Ayres·).",
            imagen: "2Reales1844info/Pregunta3.jpg",
            loe: [
                { name: "CJ# 15.3.1, A4, R2"}, //no
                { //si
                    texto: "¿El extremo de la rama derecha tiene una hoja doble abajo?",
                    clave: "P4",
                    aclaracion_si: "El extremo de la rama derecha tiene una hoja doble abajo.",
                    aclaracion_no: "El extremo de la rama derecha tiene una hoja doble arriba.",
                    imagen: "2Reales1844info/Pregunta4.jpg",
                    loe: [
                        { name: "CJ# 15.1.1, A1, R1"}, //no
                        { name: "CJ# 15.1.2, A2, R2"} //si
                    ]
                } 
            ]
        } 
    ]
};