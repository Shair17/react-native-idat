//Pregunta numero 1
let listaDeTareas = [];

function agregarTarea(tarea) {
  listaDeTareas.push({
    tarea: tarea,
  });
}

function marcarTareaCompletada(indice) {
  if (indice >= 0 && indice < listaDeTareas.length) {
    listaDeTareas[indice].completada = "Completada";
    listaDeTareas[indice].fechaCompletada = new Date();
  }
}

function marcarTareaPendiente(indice) {
  if (indice >= 0 && indice < listaDeTareas.length) {
    listaDeTareas[indice].completada = "Pendiente";
    listaDeTareas[indice].fechaCompletada = null;
  }
}

agregarTarea("Hacer la compra");
agregarTarea("Estudiar para el examen");
agregarTarea("Hacer ejercicio");

marcarTareaCompletada(0);
marcarTareaPendiente(1);
marcarTareaCompletada(2);

// Mostrar la lista de tareas
console.log("Lista de tareas:");
listaDeTareas.forEach((tarea, index) => {
  console.log(
    `${index + 1}. ${tarea.tarea} - ${tarea.completada}${
      tarea.completada === "Completada" && tarea.fechaCompletada
        ? ` (Completada el ${tarea.fechaCompletada})`
        : ""
    }`
  );
});


//Pregunta 2
// Crear un sistema de registro de libros para una biblioteca, utilizar datos de los libros como autor, titulo, año de publicación, si el libro está prestado, etc

class Libro {
  constructor(autor, titulo, añoPublicacion, prestado) {
    this.autor = autor;
    this.titulo = titulo;
    this.añoPublicacion = añoPublicacion;
    this.prestado = prestado;
  }

  marcarComoPrestado() {
    this.prestado = true;
  }

  marcarComoDisponible() {
    this.prestado = false;
  }
}

let listaDeLibros = [];

function agregarLibro(autor, titulo, añoPublicacion, prestado) {
  const nuevoLibro = new Libro(autor, titulo, añoPublicacion, prestado);
  listaDeLibros.push(nuevoLibro);
}

agregarLibro("Gabriel García Márquez", "Cien años de soledad", 1967, false);
agregarLibro("J.K. Rowling", "Harry Potter y la piedra filosofal", 1997, true);
agregarLibro("Jane Austen", "Orgullo y prejuicio", 1813, true);

console.log("Lista de libros:");
listaDeLibros.forEach((libro, index) => {
  if (libro.prestado === null || libro.prestado === undefined) {
    console.log("Valide los datos de entrada");
  } else {
    console.log(
      `${index + 1}. Título: ${libro.titulo}, Autor: ${
        libro.autor
      }, Año de Publicación: ${libro.añoPublicacion}, ${
        libro.prestado ? "Prestado" : "Disponible"
      }`
    );
  }
});

//Pregunta 3
// Representación de una transacción como un objeto
class Transaccion {
  constructor(descripcion, monto) {
    this.descripcion = descripcion;
    this.monto = monto;
  }
}

let registroMes = [];

function agregarTransaccion(descripcion, monto) {
  const nuevaTransaccion = new Transaccion(descripcion, monto);
  registroMes.push(nuevaTransaccion);
}

// Egresos e Ingresos
agregarTransaccion("Ingreso de salario", 2000);
agregarTransaccion("Compra en supermercado", -150);
agregarTransaccion("Pago de alquiler", -800);
agregarTransaccion("Ingreso de bono", 500);
agregarTransaccion("Compra en tienda", -50);

function calcularTotal() {
  let total = 0;
  registroMes.forEach((transaccion) => {
    total += transaccion.monto;
  });
  return total;
}

// Mostrar el registro de transacciones para el mes
console.log("Registro de transacciones del mes:");
registroMes.forEach((transaccion, index) => {
  console.log(
    `${index + 1}. ${
      transaccion.descripcion
    } - Monto: ${transaccion.monto.toFixed(2)} PEN`
  );
});

const totalMes = calcularTotal();
console.log(`Total del mes: ${totalMes.toFixed(2)} PEN`);

//Pregunta 4
//Unidad y nota
class Curso {
  constructor() {
    this.notasUnidades = {};
  }

  registrarNota(unidad, nota) {
    this.notasUnidades[unidad] = nota;
  }

  calcularPromedio() {
    const sumatoriaNotas = Object.values(this.notasUnidades).reduce(
      (total, nota) => total + nota,
      0
    );
    const cantidadUnidades = Object.keys(this.notasUnidades).length;
    return sumatoriaNotas / cantidadUnidades;
  }
}

// Crear un nuevo registro de notas para el curso
const registroNotas = new Curso();

registroNotas.registrarNota("1U", 15);
registroNotas.registrarNota("2U", 18);
registroNotas.registrarNota("3U", 16);
registroNotas.registrarNota("4U", 17);
registroNotas.registrarNota("5U", 13);
registroNotas.registrarNota("6U", 7);

const promedioCurso = registroNotas.calcularPromedio();
console.log("Registro de notas del curso:");
console.log(registroNotas.notasUnidades);
console.log(`Promedio del curso: ${promedioCurso.toFixed(2)}`);
