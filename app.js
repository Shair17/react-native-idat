function obtenerEdad(fecha = new Date()) {
	const fechaDeHoy = new Date();
	const fechaDeNacimiento = new Date(fecha);

	let edad = fechaDeHoy.getFullYear() - fechaDeNacimiento.getFullYear();
	const diferenciaMeses = fechaDeHoy.getMonth() - fechaDeNacimiento.getMonth();

	if (
		diferenciaMeses < 0 ||
		(diferenciaMeses === 0 &&
			fechaDeHoy.getDate() < fechaDeNacimiento.getDate())
	) {
		edad--;
	}

	return edad;
}

// Objetos

let persona = {
	nombre: 'Juan',
	apellidos: 'Perez Chacón',
	dni: '76543218',
	instituto: 'IDAT',
	fechaDeNacimiento: new Date('11/29/2001'),
	tieneDNIElectronico: false,
	mascotas: ['Scooby', 'Pelusa', 'Pepe'],
	ciudad: 'Lima',
	codigoPostal: null,
};

console.log(
	'Hola, soy',
	persona.nombre,
	persona.apellidos,
	'actualmente estoy estudiando en',
	persona.instituto
);

console.log('Nací en el', persona.fechaDeNacimiento.getFullYear());

for (const mascota of persona.mascotas) {
	console.log(mascota);
}

persona.edad = obtenerEdad(persona.fechaDeNacimiento);

console.log(persona.edad);

// Arreglos
// es recomendable usar los arreglos para **agrupar** datos de un mismo tipo de dato
let libros = ['Naranja Lima', 'Luna de Plutón', 'Patrones de Diseño'];
let notasPrimeraUnidad = [14, 15, 10];
let listaDeCosasQueHacer = [
	{
		completado: false,
		todo: 'Salir en bici',
	},
	{
		completado: false,
		todo: 'Limpiar la casa',
	},
	{
		completado: false,
		todo: 'Lavar la ropa',
	},
	{
		completado: false,
		todo: 'Hacer ejercicio',
	},
];

// Hackaton: Hacer uso de los objetos y arreglos
// Representar listas de tareas para completar, adicionalmente agregar la fecha en la que se completo y poder marcar tareas como completadas o pendientes
// Crear un sistema de registro de libros para una biblioteca, utilizar datos de los libros como autor, titulo, año de publicación, si el libro está prestado, etc
// Hacer un registro de egresos e ingresos en el mes, representar cada gasto e ingreso con los recursos necesarios, esto tiene que representar un mes de egresos e ingresos de dinero
// Hacer un registro de notas en un curso, 1U - 2U - 3U y al final sacamos el promedio de nota del curso
