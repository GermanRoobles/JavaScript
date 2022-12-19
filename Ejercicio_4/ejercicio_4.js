const nombre = "Germán";
const apellido ="Robles";

const estudiante = nombre.concat(" ").concat(apellido)
console.log(estudiante);

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);

const numletras = estudiante.length
console.log(estudiante.length);

const primera_letra_nombre = nombre.charAt(0)
console.log(primera_letra_nombre);

const ultima_letra_apellido= apellido.charAt(apellido.length - 1)
console.log(ultima_letra_apellido);

const estudianteSinEspacios = estudiante.replace(/ /g, "")
console.log(estudianteSinEspacios);

const nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante);