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
