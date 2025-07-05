function iniciarIdentificadorMoneda(decisionTree, variantes) {
    let nodoActual = decisionTree;
    let variantesFiltradas = [...variantes];

    function mostrarNodo() {
        const preguntaText = document.getElementById('pregunta-text');
        const preguntaImg = document.getElementById('pregunta-img');
        const botones = document.getElementById('pregunta-botones');
        const aclaracionSi = document.getElementById('aclaracion-si');
        const aclaracionNo = document.getElementById('aclaracion-no');

        if (nodoActual.name) {
            preguntaText.textContent = "Variante identificada: " + nodoActual.name;
            preguntaImg.style.visibility = "hidden";
            botones.style.display = "none";
        } else {
            preguntaText.textContent = nodoActual.texto;
            preguntaImg.src = nodoActual.imagen;
            preguntaImg.style.visibility = "visible";
            botones.style.display = "block";
            aclaracionSi.textContent = nodoActual.aclaracion_si || "";
            aclaracionNo.textContent = nodoActual.aclaracion_no || "";
        }
    }

    function responder(respuesta) {
        if (respuesta === 'dudoso') {
            const preguntaText = document.getElementById('pregunta-text');
            const preguntaImg = document.getElementById('pregunta-img');
            const botones = document.getElementById('pregunta-botones');
            preguntaText.textContent = "No se encontró la variante específica, sin embargo, la tabla muestra las variantes posibles y las descartadas. Abajo se pueden ver todos los anversos y reversos para determinar la variante de otra forma.";
            preguntaImg.style.display = "none";
            botones.style.display = "none";
            return;
        }

        if (!nodoActual.loe) return;

        let preguntaClave = nodoActual.clave;

        if (preguntaClave) {
            variantesFiltradas = variantesFiltradas.filter(v => {
                if (v[preguntaClave] === "_") return true;
                return v[preguntaClave] === (respuesta === "si" ? 1 : 0);
            });
            actualizarTabla();
        }

        nodoActual = respuesta === 'si' ? nodoActual.loe[1] : nodoActual.loe[0];
        mostrarNodo();
    }

    window.responder = responder; // Para que los botones puedan llamarla

    function actualizarTabla() {
        const tbody = document.querySelector('#miTabla tbody');
        tbody.innerHTML = '';
        variantes.forEach(row => {
            const tr = document.createElement('tr');
            const visible = variantesFiltradas.includes(row);
            if (!visible) tr.classList.add('filtrada');
            tr.innerHTML = `
                <td>${row.Variante}</td>
                <td>${row.Anverso}</td>
                <td>${row.Reverso}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        actualizarTabla();
        mostrarNodo();

        // Zoom de imagen para todas las imágenes con data-zoomable
        const zoomModal = document.getElementById('zoom-modal');
        const zoomImg = document.getElementById('zoom-img');
        document.querySelectorAll('img[data-zoomable]').forEach(img => {
            img.addEventListener('click', function() {
                if (img.src) {
                    zoomImg.src = img.src;
                    zoomModal.style.display = 'flex';
                }
            });
        });

        zoomModal.addEventListener('click', function(e) {
            if (e.target === zoomModal) {
                zoomModal.style.display = 'none';
                zoomImg.src = '';
            }
        });
    });
}