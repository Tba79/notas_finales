// Solicitar nombre y carrera
let nombreAlumno = prompt("Ingresa el nombre del alumno:");
let carreraAlumno = prompt("Ingresa la carrera del alumno:");

// Insertar nombre y carrera 
document.getElementById("nombre-alumno").innerText = nombreAlumno;
document.getElementById("carrera-alumno").innerText = carreraAlumno;

// Función para pedir notas
function calcularNotas(ramo, idNota1, idNota2, idNota3, idPromedio) {
    let nota1 = prompt(`Ingresa la primera nota para ${ramo}:`);
    let nota2 = prompt(`Ingresa la segunda nota para ${ramo}:`);
    let nota3 = prompt(`Ingresa la tercera nota para ${ramo}:`);

    let notas = [];
    
    // Validar y agregar notas 
    if (nota1 !== "" && !isNaN(nota1) && nota1 >= 1 && nota1 <= 7) {
        notas.push(parseFloat(nota1));
    }
    if (nota2 !== "" && !isNaN(nota2) && nota2 >= 1 && nota2 <= 7) {
        notas.push(parseFloat(nota2));
    }
    if (nota3 !== "" && !isNaN(nota3) && nota3 >= 1 && nota3 <= 7) {
        notas.push(parseFloat(nota3));
    }

    // Calcular el promedio 
    let promedio = notas.reduce((acc, val) => acc + val, 0) / notas.length;

    // Mostrar tabla con notas y promedio
    document.getElementById(idNota1).innerText = nota1 !== "" ? parseFloat(nota1).toFixed(2) : "--";
    document.getElementById(idNota2).innerText = nota2 !== "" ? parseFloat(nota2).toFixed(2) : "--";
    document.getElementById(idNota3).innerText = nota3 !== "" ? parseFloat(nota3).toFixed(2) : "--";

    // Mostrar el promedio y cambiar el color si es menor a 4
    let promedioElement = document.getElementById(idPromedio);
    promedioElement.innerText = notas.length > 0 ? promedio.toFixed(2) : "--";
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
