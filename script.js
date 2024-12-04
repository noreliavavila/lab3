// Paso 1
let num1 = 5;
let num2 = 2;
let operacion = prompt("Ingrese operacion: suma, resta, multi, divi");

//Paso 2 y 3

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multi") {
        return num1 * num2;
    } else if (operacion === "divi") {
        if (num2 === 0) {
            alert("Error: division por cero.");
        } else {
            return num1 / num2;
        }
    } else {
        alert("Asegurate de ingresar los valores mencionados.");
    }
}

//paso 4 y 5
let estado = true;

do {
    let resultado = realizarOperacion(num1, num2, operacion);
    
    if (resultado !== null) {
        alert("Resultado: " + resultado);
    }

    let continuar = prompt("Quieres continuar con la calculadora? (si/no): ");
    
    if (continuar === "si") {
        operacion = prompt("Ingrese nueva operacion: suma, resta, multi, divi");
    } else {
        estado = false;
    }
} while (estado);




