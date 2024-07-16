// Definimos un objeto
/* const persona = {nombre:"lionel", apellido:"messi", dni:33512642, direccion: "AV Miami Beach", ciudad:"Miami", provincia:"Santa Fe", casado:false};
console.log(persona); */

// Accediendo a los valores
/* console.log(persona.apellido + ", " + persona.nombre);

function estaCasado(valor) {
    if (valor == true) {
        console.log("esta casado!");
    } else {
        console.log("esta soltero!");
    }
}

estaCasado(persona.casado); */

/* const bebida = {id:1, nombre:"Coca Cola", precio:1600};
console.log(bebida.nombre + " $" + bebida.precio); */

// Accediendo a los valores - Opción #2
/* const bebida = {id:1, nombre:"Coca Cola", precio:1800};
console.log(bebida.nombre + " $" + bebida.precio);
console.log(bebida["nombre"] + " $" + bebida["precio"]); */


// Modificando valores de un Objeto
/* const bebida = {id:1, nombre:"Coca Cola", precio:1800};
console.log(bebida);
//bebida = "Cocucha"; //No funciona, porque no se puede redefinir una constante
bebida.precio = 2000; // Opción #1
bebida["nombre"] = "Coca Cola 2L"; //Opción #2
console.log(bebida); */

// Constructores
function usuarioIG(dato1, dato2, dato3) {
    this.nombre = dato1;
    this.usuario = dato2;
    this.seguidores = dato3;

    /* if (dato1 == undefined || dato1 == "") {
        this.nombre = "[SIN NOMBRE]";
    } else {
        this.nombre = dato1;
    }

    if (dato2 == undefined || dato2 == "") {
        this.usuario = "[SIN USUARIO]";
    } else {
        this.usuario = dato2;
    }

    if (dato3 == undefined) {
        this.seguidores = 0;
    } else {
        this.seguidores = dato3;
    } */
}

/* const usuario1 = new usuarioIG("Lionel Messi", "leomessi", "503M");
const usuario2 = new usuarioIG("Cristiano Ronaldo", "");
console.log(usuario1);
console.log(usuario2); */


// Crear un Constructor a partir de un Objeto
/* const bebida = {id:1, nombre:"Coca Cola", precio:1600};

function crearBebida(objeto) {
    this.idProducto = objeto.id;
    this.nombreProducto = objeto.nombre.toUpperCase();
    this.precioSinIVA = objeto.precio;
    this.precioConIVA = this.precioSinIVA * 1.21;
    this.descripcion = "";
}

const bebida1 = new crearBebida(bebida);
const bebida2 = new crearBebida({id:2, nombre:"Pepsi", precio:1500});
console.log(bebida1);
console.log(bebida2);
bebida1.descripcion = "Bebida Cola con Azúcar";
console.log(bebida1);
bebida1.descripcion = "Bebida Cola con Azúcarrrrrrrrrrrrrrrrrrr";
console.log(bebida1); */

// Métodos de los Objetos
/* let texto = prompt("Ingrese su Nombre:"); // _Mauro_ (7)
console.log(texto);
console.log(texto.length); // Acceder a la propiedad length
texto = formatearTexto(texto); //7
console.log(texto);

function formatearTexto(texto) {//7
    return texto.trim().toUpperCase(); //5 MAURO
} */


// Creando Métodos a un Constructor
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.saludar = () => {
        console.log("Hola, soy " + this.nombre);
    }
}

const persona1 = new Persona("Diego López", 25, "Av. Libertador 1200");
console.log(persona1);
persona1.saludar(); */


// Operador IN y For..IN
/* const persona1 = {nombre:"Diego López", edad:25, direccion:"Av. Libertador 1200"};
console.log("edad" in persona1); // in sirve para validar si existe una propiedad en un objeto (true/false)
console.log("dni" in persona1);

for (let propiedad in persona1) {
    console.log(propiedad + " => " + persona1[propiedad]);
} */


// Clases
// Crear un Clase Persona
class Persona {
    // Defino las Propiedades de la Clase (que serían las variables)
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    // Defino los Métodos de la Clase (que serían las funciones)
    saludar = () => {
        return ("Hola, soy " + this.nombre);
    }

    pasarAMayuscula = () => {
        this.nombre = this.nombre.toUpperCase();
    }
}

const persona1 = new Persona("Gabriel Roulliet", 25, "Paunero 1200");
console.log(persona1);
let saludo = persona1.saludar();
alert(saludo)
persona1.pasarAMayuscula();
console.log(persona1);

// / Definir un Array
/* const lista = [1, 2, 3]; // Esto es un Array, se defines con corchetes
const lista1 = ["claudio", "gabriela", "laura"];
const lista2 = ["javier", "veron", 1122334455, "Av. San Martin", ["Fiat Duna", "Fiat Palio", "Chery QQ"], {id:1, nombre:"Tomas", categoria:"perro"}, {id:2, nombre:"Amy", categoria:"gatos"}];
console.log(lista);
console.log(lista1);
console.log(lista2); */

//let bebida = {id:1, nombre:"coca cola", precio:1600}; // Esto es un objeto, se definen con llaves

// Accediendo a valores de un Array
/* console.log("Nombre: " + lista2[0] + " " + lista2[1]);
//console.log(lista2[4]);
console.log("Auto: " + lista2[4][1]);
console.log("Bebida: " + bebida.nombre);
console.log("Mascota: " + lista2[6].nombre + "(" + lista2[6].categoria + ")"); */

// Modificando valores de un Array
/* lista2[6] = "www.google.com.ar";
lista2[5].categoria = "Perros"; // Modificar una propiedad de un objeto que está dentro de un array
lista2[4][0] = "Bicicleta"; // Modificar un elemento de un array que está dentro de otro array
console.log(lista2); */

// Recorrer un Array
/* const numeros = [10, 9, 8, 5, 1, 2, 43, 99.9];

for (let i=0; i<numeros.length; i++) {
    console.log(numeros[i]);
} */

// Propiedad length (devuelve la cantidad de elementos de un array)
//console.log(numeros.length);

// Defino un Array de Nombres
// const nombres = ["laura", "alexandra", "marcelo", "aldo", "facundo"];

// Método Push (permite agregar un elemento al final de un array)
/* nombres.push("Juan");
nombres.push({id:1, nombre:"Coca Cola"});
nombres.push(["coca cola", "fernet", "hielo"]);
console.log(nombres); */

// Método Unshift (permite agregar un elemento al comienzo de un array)
/* nombres.unshift("Pedro");
console.log(nombres); */

// Método Pop (permite eliminar y devolver un elemento del final de un array)
/* let nombreEliminado = nombres.pop();
console.log(nombres);
console.log(nombreEliminado); */

// Método Shift (permite eliminar y devolver un elemento del comienzo de un array)
/* let nombreEliminado = nombres.shift();
console.log(nombres);
console.log(nombreEliminado); */

// Método Splice (elimina uno o varios elementos a partir de un posición de un array)
/* nombres.splice(2, 2);
console.log(nombres); */

// Método Join (devuelve un string con todos los elementos unidos por un caracter definidos)
/* let nombreFinal = nombres.join(" / ");
console.log(nombreFinal); */

// Método Concat (devuelve un nuevo array concatenando 2 arrays)
/* const perros = ["cambai", "tomas"];
const gatos = ["amy", "benita"];
const cobayos = ["blanco", "negro"];
const mascotas = perros.concat(gatos).concat(cobayos); //concatenar 3 arrays
//const nuevasMascotas = mascotas.concat(cobayos);
//const mascotas = gatos.concat(perros);
console.log(mascotas);
//console.log(nuevasMascotas); */

// Método Slice (nos devuelve un nuevo array a partir de un posición especificada y total elementos)
/* const nombresFinal = nombres.slice(2, 3);
console.log(nombresFinal); */

// Método indexOf (nos devuelve la posición donde se encuentra el elemento, en caso contrario devuelve -1)
/* let pos = nombres.indexOf("alexandra");
console.log(nombres);
console.log(pos);

let nombreBuscado = prompt("Ingrese el nombre a buscar:"); */
/* let posArray = nombres.indexOf(nombreBuscado);

if (posArray >= 0) {
    alert("El nombre se encuentra en la posición: " + posArray)
} else {
    alert("Error! No existe el nombre ingresado!");
} */

// Método includes (devuelve true/false en caso de encontrar un elemento)
/* if (nombres.includes(nombreBuscado)) {
    alert("El nombre se encuentra en el Array!");
} else {
    alert("Error! No existe el nombre ingresado!");
} */

// Método Reverse (invierte el orden de los elementos, ATENCIÓN: MODIFICA EL ARRAY ORIGINAL)
/* nombres.reverse();
console.log(nombres);
nombres.reverse();
console.log(nombres); */

// Ejemplo Aplicado #1
/* const arrayNombres = []; // Array vacío (o sin elementos)
const maximo = 3;

do {
    let nombreIngresado = prompt("Ingrese un Nombre:");
    arrayNombres.push(nombreIngresado.toUpperCase());
    console.log("Nombre Agregado: " + nombreIngresado);
} while (arrayNombres.length < maximo); */

//const nuevoNombres = ["Mauro", "Lisandro"];
//const nombresFinal = arrayNombres.concat(nuevoNombres);
//alert(nombresFinal.join("\n"));

// Ejemplo aplicado #2
/* function eliminarNombre(valor) {
    let pos = arrayNombres.indexOf(valor);
    console.log("posición: " + pos);

    if (pos > -1) {
        arrayNombres.splice(pos, 1); // Elimino un elemento a partir de la posición encontrada
    }
}

let nombreAEliminar = prompt("Ingrese un Nombre a Eliminar:").toUpperCase();
console.log("Nombre Ingresado para Eliminar: " + nombreAEliminar);
eliminarNombre(nombreAEliminar);
console.log(arrayNombres); */


// Crear un array de objetos
/* let bebida1 = {id:1, nombre:"Coca Cola", precio:1600};
const bebidas = [bebida1, {id:2, nombre:"Pepsi", precio:1500}];
bebidas.push({id:3, nombre:"Seven Up", precio:1500});
console.log(bebidas); */

// Recorrer un array con el método For Of
/* for (const nombre of nombres) {
    console.log(nombre);
} */


// Ejemplo aplicado #3
// class Producto {
   // constructor(nombre, precio) {
       // this.name = nombre.toUpperCase();
      //  this.price = precio;
   // }

  //  sumaIVA() {
     //   this.price = this.price * 1.21;
 //   }
// }

// Defino un array vacío de productos
// const productos = []; 
// Agregando un producto al array Productos
// productos.push(new Producto("Coca Cola", 1600));
// productos.push(new Producto("Pepsi", 1500));
//productos.push(new Producto("Seven Up", 1500));
// Ver el estado de mi Array Productos
// console.log(productos);
// Recorrer el Array Productos y ejecutar el método SumaIva()
// for (const producto of productos) {
   // producto.sumaIVA();
// }
// Ver el estado de mi Array Productos
// console.log(productos);

// Ejemplo #1
/* let total = 0;

for (let i=1; i<=10; i++) {
    total += i;
}

console.log(total); // Da como resultado 55 */

// Ejemplo de Abstracción
// 1- Entrada de Datos // 2- Proceso de Datos // 3- Salida de Datos
/* function sumarRango(valorMin, valorMax) {
    let total = 0;

    for (let i=valorMin; i<=valorMax; i++) {
        total += i;
    }

    return total;
}

console.log(sumarRango(1, 10)); // 55 */


// Funciones de Orden Superior
// Ejemplo #1
/* function mayorQue(valorX) {
    return valor => valor > valorX // Devuelvo una función
}

let mayorQue10 = mayorQue(10); // (valor) => valor > 10 => mayorQue10 es una función flecha
console.log(mayorQue10(10)); // (10) => 10 > 10 => No es mayor, es IGUAL => Resultado es FALSE
console.log(mayorQue10(12)); // (12) => 12 > 10 => es mayor => Resultado es TRUE */

/* function textoMayor(texto1, texto2) {
    return texto1.length > texto2.length
}

let texto = textoMayor("hola", "chauchis");
console.log(texto); */


// Ejemplo #2
/* function asignarOperacion(tipoOperacion) {
    if (tipoOperacion == "suma") {
        return (a, b) => a + b;
    } else if (tipoOperacion == "resta") {
        return (a, b) => a - b;
    } else if (tipoOperacion == "multiplicacion") {
        return (a, b) => a * b;
    } else if (tipoOperacion == "division") {
        return (a, b) => a / b;
    } else {
        return 0;
    }
}

const operacionSuma = asignarOperacion("suma"); // (a, b) => a + b
console.log("Suma: " + operacionSuma(10, 5)); // (10, 5) => 10 + 5 => 15

const operacionResta = asignarOperacion("resta"); // (a, b) => a - b
console.log("Resta: " + operacionResta(10, 5)); // (10, 5) => 10 - 5 => 5

const operacionMulti = asignarOperacion("multiplicacion"); // (a, b) => a * b
console.log("Multiplicación: " + operacionMulti(10, 5)); // (10, 5) => 10 * 5 => 50

const operacionDivi = asignarOperacion("division"); // (a, b) => a / b
console.log("División: " + operacionDivi(10, 5)); // (10, 5) => 10 / 5 => 2 */


/* function realizarCalculo() {
    let valor1 = parseFloat(prompt("Ingrese valor #1:"));
    let valor2 = parseFloat(prompt("Ingrese valor #2:"));
    const operacionSuma = asignarOperacion("suma"); // (a, b) => a + b
    let resultado = operacionSuma(valor1, valor2);
    alert("Resultado: " + resultado);
}

realizarCalculo(); */


// Función de Orden Superior que recibe una función como parámetro
function porCadaUno(unArray, unaFuncion) { // espero un array y una función como parámetros
    for (const elemento of unArray) {
        unaFuncion(elemento)
    }
}

const numeros = [1, 2, 3, 4];
//porCadaUno(numeros, console.log);

const nombres = ["mauro", "florencia", "marcelo", "ryosho"];
//porCadaUno(nombres, alert);

// Ejemplo #3
/* let total = 0;

function acumular(valor) {
    total += valor
}

porCadaUno(numeros, acumular); */

/* for (const elemento of numeros) {
    acumular(elemento);
    // acumular(1) 0 + 1 => 1
    // acumular(2) 1 + 2 => 3
    // acumular(3) 3 + 3 => 6
    // acumular(4) 6 + 4 => 10
} */

//console.log("Total: " + total);

// Ejemplo #4
/* const numerosDoble = []; // array vacío
const unaFuncion = (valor) => {
    numerosDoble.push(valor * 2);
} // Defini una función flecha

porCadaUno(numeros, unaFuncion);

console.log(numerosDoble); */


// Métodos de Búsqueda y Transformación
// forEach => Recorre cada uno de los elementos del array con un función que definamos
/* numeros.forEach(valor => {
    console.log(valor);
})
nombres.forEach(valor => {
    alert(valor);
}) */

const cursos = [
    {id:1, nombre:"Desarrollo Web", precio:50000},
    {id:2, nombre:"JavaScript", precio:55000},
    {id:3, nombre:"React JS", precio:60000}
]

// find => Busca el primer elemento que coincida con la condición, caso contrario devuelve undefined
/* let curso1 = cursos.find(item => item.nombre == "React JS");
let curso2 = cursos.find(item => item.nombre == "JS");
let curso3 = cursos.find(item => item.precio <= 54000);
console.log(curso1.nombre + " $" + curso1.precio);
console.log(curso2); // undefined
console.log(curso3); // undefined */

// filter => devuelve un array que coincida con la condición, caso contrario devuelve un array vacío
/* const cursosQuePuedoPagar = cursos.filter(item => item.precio <= 56000);
console.log(cursosQuePuedoPagar); */

// some => devuelve true o false en caso de que encuentre un elemento
/* let producto = cursos.some(item => item.nombre == "React JS");
console.log(producto); */

// map => crea un nuevo array con la posibilidad de transformar sus valores
/* const cursosIVA = cursos.map(item => ({idCurso:item.id, nombreCurso:item.nombre.toUpperCase(), precioCurso:item.precio * 1.21}));
const cursosIVA2 = cursos.map(item => item.precio * 1.21);
const cursos3 = cursos.map(item => ({nombre:item.nombre, precio:item.precio}));
console.log(cursosIVA);
console.log(cursosIVA2);
console.log(cursos3); */

// reduce => devuelve un unico valor sumando todos los elementos de un array
/* let totalAPagar = cursos.reduce((acumulador, item) => acumulador += item.precio, 0);
console.log("Total a Pagar: $" + totalAPagar); */

// sort => ordena un array de acuerdo a una condición que definamos
const numeros2 = [20, 10, 1, -2];
const nombres2 = ["mauro", "florencia", "laura", "abril"];
numeros2.sort((a, b) => a - b); // Ordena de forma ascendente
console.log(numeros2);
numeros2.sort((a, b) => b - a); // Ordena de forma descendente
console.log(numeros2);
nombres2.sort((a, b) => a > b); // Ordena de forma ascendente los nombres
console.log(nombres2);
cursos.sort((a, b) => { // Ordenar en forma descendente por nombre de curso el array "cursos"
    if (a.nombre > b.nombre) {
        return -1
    }

    if (a.nombre < b.nombre) {
        return 1
    }

    return 0;
})
console.log(cursos);


// Métodos de Strings
/* let texto = "   Curso de DW   ";
console.log(texto);
console.log(texto.length);
let texto2 = texto.replace("Curso", "Introducción"); // Reemplaza un texto por otro y devuelve un nuevo string
console.log(texto2);
texto2 = texto.trim(); // Quita los espacios del comienzo y final del string
texto2 = texto.trimStart(); // Quita los espacios del comienzo del string
texto2 = texto.trimEnd(); // Quita los espacios del final del string
console.log(texto2);
let nombre = prompt("Ingrese su Nombre:").trim().toUpperCase();
let apellido = prompt("Ingrese su Apellido:").trim().toUpperCase();
let mensaje = "Hola, " + nombre + " " + apellido;
alert(mensaje); */

// Objeto Math
//console.log(Math.PI);

// Min y Max
/* console.log("Máx: " + Math.max(10, 50, 5, 0 , -10));
console.log("Mín: " + Math.min(10, 50, 5, 0 , -10));
console.log("Máx (Infinito): " + Math.max(10, 50, Infinity, 5, -Infinity, 0 , -10));
console.log("Mín (Infinito): " + Math.min(10, 50, Infinity, 5, -Infinity, 0 , -10)); */

// Ceil, floor, round
/* const valor = 9.4;
console.log("Ceil: " + Math.ceil(valor)); // Techo
console.log("Floor: " + Math.floor(valor)); // Piso
console.log("Round: " + Math.round(valor)); // Redondeo */

// Square Root
/* console.log("Raíz cuadrada de 9: " + Math.sqrt(9)); // 3
console.log("Raíz cuadrada de 25: " + Math.sqrt(25)); // 5
console.log("Raíz cuadrada de 81: " + Math.sqrt(81)); // 9
console.log("Raíz cúbica de 625: " + Math.cbrt(125)); // 5 */

// Random
/* console.log(Math.random()); // Genero números random entre 0 y 1
let valorRandom = Math.random() * 10;
console.log(valorRandom); // Genero números random entre 0 y 10
console.log(Math.round(valorRandom)); // Genero números random entre 0 y 10 */

// Creamos un array de Participantes
/* const participantesGH = ["Nico", "Darío", "Ema", "Bauti"];
let posicicionGanador = Math.round(Math.random() * participantesGH.length);

if (posicicionGanador >= participantesGH.length) {
    console.log(posicicionGanador);
    posicicionGanador--;
}

console.log(posicicionGanador); //2
alert("Ganador de GH: " + participantesGH[posicicionGanador]); */

// Generador de Números Random
/* const generadorRandom = (maximo) => {
    return Math.round(Math.random() * maximo);
}

console.log(generadorRandom(1000)); */

// Objeto Date
/* const fecha = new Date(); // Obtener la fecha actual
let fecha2 = new Date(2020, 4, 21, 18, 35, 14, 20); // Declarar una fecha específica
console.log(fecha);
console.log(fecha2);
console.log(fecha2.getMinutes());
console.log(fecha2.getSeconds());
console.log(fecha2.getMilliseconds()); */

const fecha = new Date("December 15 2022 08:45");
console.log(fecha);

// Obteniendo los valores por separado
/* let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();
console.log("Día: " + dia);
console.log("Mes: " + mes);
console.log("Año: " + anio); */

// Distintas formas de representación de una fecha
/* console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString().replaceAll("/", "-"));
console.log(fecha.toTimeString());
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();
alert(dia + "-" + mes + "-" + anio) */





// Solicito los datos al usuario
/* let nombre = prompt("Ingrese su Nombre");
let dia = parseInt(prompt("Ingrese su Día de Cumpleaños"));
let mes = parseInt(prompt("Ingrese su Mes de Cumpleaños")) - 1;
mostrarMensajeCumple(nombre, dia, mes); */


// Calculo de tiempo
/* const inicio = new Date();

for (let i=0; i<100000; i++) {
    console.log("Procesando...");
}

const final = new Date();
const diferencia = Math.round((final - inicio) / 1000);
alert("Tu proceso tardó: " + diferencia + " segundos!"); */


// Acceder al Body de una página
/* console.log(document.body); */

// Accediendo al primer elemento hijo del body de la página
/* let titulo = document.body.children[1];
console.log(titulo);
titulo.id = "cursoCoder"; */

// Hacer referencia al elemento párrafo desde los nodos
/* let contenedor = document.body.children[4];
console.log(contenedor.children);
let parrafo = contenedor.children[0];
console.log(document.body.children[4].children[0].children[0]); */

// Consola
/* console.dir(document.head)
console.dir(document.body) */

// Accediendo a elementos html por ID
/* let contenedor = document.getElementById("contenedor");
let parrafo = document.getElementById("parrafo");
console.log(contenedor);
console.log(parrafo);
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);
parrafo.innerHTML = "Hola <b>Mundo!</b>";
parrafo.style.color = "blue";
parrafo.className = "display-1";

contenedor.className = "bg-info-subtle";
contenedor.style.padding = "30px"; */

// Accediendo a elementos por su nombre de clase
/* let paisesClase = document.getElementsByClassName("paises");
paisesClase[1].innerHTML = "Perú";
console.log(paisesClase);

for (const pais of paisesClase) {
    console.log(pais.innerHTML);
} */

// Accediendo a elementos por su nombre de etiqueta
/* let paisesEtiqueta = document.getElementsByTagName("li");
paisesEtiqueta[2].innerHTML = "Uruguay";
console.log(paisesEtiqueta);

for (const pais of paisesEtiqueta) {
    pais.style.fontStyle = "italic";
    //pais.innerHTML = "<i>" + pais.innerText + "</i>";
    console.log(pais.innerHTML);
}

document.getElementById("academia").className = "text-warning bg-black"; */


// Crear un nuevo nodo y adjuntarlo al Body
/* let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "Curso de JavaScript";
nuevoParrafo.className = "display-4 text-danger bg-light";
let nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerHTML = "Curso de React JS";
nuevoParrafo2.className = "display-3 text-danger bg-light";
document.body.append(nuevoParrafo); // Agrega el elemento al Final del Body
document.body.prepend(nuevoParrafo2); // Agrega el elemento al Comienzo del Body */

// Como agrego un nuevo país al final de mi lista de paises
/* let paises = document.getElementById("paises");
let nuevoPais = document.createElement("li");
nuevoPais.innerHTML = prompt("Ingrese el País:");
paises.appendChild(nuevoPais); */
//paises.remove(); // Quita el nodo paises de mi pagina web

// Accediendo y modificando campos de texto de un form
/* let nombre = document.getElementById("nombre");
console.log(nombre.value);
nombre.value = "Javier Verón";
document.getElementById("email").value = "javier.veron@gmail.com"; */

// Creamos nodos a partir de un Array
/* const listaInfusiones = ["Té", "Café", "Mate", "Capuccino", "Chocolate Caliente"];
let infusiones = document.getElementById("infusiones");

for (const item of listaInfusiones) {
    let li = document.createElement("li");
    li.innerHTML = item;
    infusiones.appendChild(li);
} */


// Plantillas literales
/* let producto = {id:1, nombre:"Coca Cola", precio:1800, imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/783070/Gaseosa-Coca-cola-Sabor-Original-2-25-L-1-247191.jpg?v=638206690815300000"};
let mensaje1 = "#1 - ID: " + producto.id + " - Nombre: " + producto.nombre + " - Precio: $" + producto.precio;
console.log(mensaje1);
let mensaje2 = `#2 - ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: $${(producto.precio * 1.1).toFixed(2)}`;
console.log(mensaje2);


const productos = [
    {id:1, nombre:"Coca Cola", precio:1800, imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/783070/Gaseosa-Coca-cola-Sabor-Original-2-25-L-1-247191.jpg?v=638206690815300000"},
    {id:2, nombre:"Pepsi", precio:1700, imagen:"https://static.cotodigital3.com.ar/sitios/fotos/full/00003200/00003247.jpg?3.0.172"}
]

for (const prod of productos) {
    let contenido = `<img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
    <div class="card-body text-center">
        <p class="card-text"><b>${prod.nombre}</b></p>
        <p class="card-text">$${prod.precio}</p>
    </div>`;
    let elemento = document.createElement("div");
    elemento.className = "card my-5 border-0";
    elemento.style.width = "18rem";
    elemento.innerHTML = contenido;
    document.getElementById("resultado").appendChild(elemento);
} */


// QuerySelector
let paises = document.querySelector("li.paisesVecinos"); // Devuelve el primer elemento
let paises2 = document.querySelectorAll("li.paisesVecinos"); // Devuelve un NodeList de Elementos HTML
console.log(paises);




