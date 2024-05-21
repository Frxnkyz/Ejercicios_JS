/***************************************
*JS de Ejercicio10.html
* Autor : Francisco Romero Zarco
****************************************/

const meses = {
    "Enero": "January",
    "Febrero": "February",
    "Marzo": "March",
    "Abril": "April",
    "Mayo": "May",
    "Junio": "June",
    "Julio": "July",
    "Agosto": "August",
    "Septiembre": "September",
    "Octubre": "October",
    "Noviembre": "November",
    "Diciembre": "December"
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mesForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const mesSelect = document.getElementById('mes');
        const mesEspanol = mesSelect.value;

        if (mesEspanol in meses) {
            const mesIngles = meses[mesEspanol];
            document.getElementById('resultado').innerHTML = `
                <p class="text-center">La traducción de ${mesEspanol} es: ${mesIngles}</p>
            `;
        } else {
            alert("Por favor, selecciona un mes válido.");
        }
    });
});