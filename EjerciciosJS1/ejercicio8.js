/***************************************
*JS de Ejercicio8.html
* Autor : Francisco Romero Zarco
****************************************/
function calcularMCD(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mcdForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const num1 = parseInt(document.getElementById('num1').value.trim(), 10);
        const num2 = parseInt(document.getElementById('num2').value.trim(), 10);

        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            alert("Por favor, introduce números enteros positivos.");
            return;
        }

        const mcd = calcularMCD(num1, num2);
        document.getElementById('resultado').innerHTML = `
            <p>El MCD de ${num1} y ${num2} es: ${mcd}</p>
        `;
    });
});