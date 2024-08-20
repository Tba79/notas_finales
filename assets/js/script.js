// Solicitar nombre y carrera
let nombreAlumno = prompt("Ingresa el nombre del alumno:");
let carreraAlumno = prompt("Ingresa la carrera del alumno:");

// Insertar nombre y carrera en el HTML
document.getElementById("nombre-alumno").innerText = nombreAlumno;
document.getElementById("carrera-alumno").innerText = carreraAlumno;

// Función para pedir notas, calcular el promedio y actualizar la tabla
function calcularNotas(ramo, idNota1, idNota2, idNota3, idPromedio) {
    let nota1 = prompt(`Ingresa la primera nota para ${ramo}:`);
    let nota2 = prompt(`Ingresa la segunda nota para ${ramo}:`);
    let nota3 = prompt(`Ingresa la tercera nota para ${ramo}:`);

    // Si una nota no es ingresada, se considera como 0
    nota1 = nota1 !== "" && !isNaN(nota1) && nota1 >= 1 && nota1 <= 7 ? parseFloat(nota1) : 0;
    nota2 = nota2 !== "" && !isNaN(nota2) && nota2 >= 1 && nota2 <= 7 ? parseFloat(nota2) : 0;
    nota3 = nota3 !== "" && !isNaN(nota3) && nota3 >= 1 && nota3 <= 7 ? parseFloat(nota3) : 0;

    // Calcular el promedio considerando todas las notas, incluyendo las que faltan
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Actualizar la tabla con las notas y el promedio
    document.getElementById(idNota1).innerText = nota1 !== 0 ? nota1.toFixed(2) : "--";
    document.getElementById(idNota2).innerText = nota2 !== 0 ? nota2.toFixed(2) : "--";
    document.getElementById(idNota3).innerText = nota3 !== 0 ? nota3.toFixed(2) : "--";

    // Mostrar el promedio y cambiar el color si es menor a 4
    let promedioElement = document.getElementById(idPromedio);
    promedioElement.innerText = promedio.toFixed(2);
    if (promedio < 4) {
        promedioElement.classList.add("promedio-bajo");
    } else {
        promedioElement.classList.remove("promedio-bajo");
    }
}

// Llamar a la función para cada ramo
calcularNotas("HTML", "nota1-html", "nota2-html", "nota3-html", "promedio-html");
calcularNotas("CSS", "nota1-css", "nota2-css", "nota3-css", "promedio-css");
calcularNotas("JavaScript", "nota1-js", "nota2-js", "nota3-js", "promedio-js");
