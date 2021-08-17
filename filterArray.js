//***************************************** */
//* FILTRADO DE DOS LISTAS
//***************************************** */
const array = [1, 2, 2, 5, 8];
// const list = [1, 5];
// const list = [];
const list = [2];

const filtered = array.filter(function (e) {
  return this.indexOf(e) < 0;
}, list);

console.log(filtered);

let users = [
  {
    nombre: "Carlos",
    edad: 19,
    estado: false,
  },
  {
    nombre: "Ana",
    edad: 15,
    estado: true,
  },
  {
    nombre: "Andres",
    edad: 26,
    estado: true,
  },
  {
    nombre: "Mario",
    edad: 19,
    estado: true,
  },
];

//***************************************** */
//* FILTRANDO UN ARRAY DE OBJETOS (FILTER)
//***************************************** */
//  Crea un nuevo arreglo a partir de una existente filtrando los elementos mediante un criterio dado.
// No altera el arreglo original

const newUsers = users.filter((user) => {
  if (user.edad >= 18) {
    return user;
  }
});

const newUsersV2 = users.filter((user) => {
  return user.edad >= 18;
});

const init = 18;
const end = 20;
function filtrarArreglo(item, indice, arreglo) {
  return item.edad >= init && item.edad <= end;
}
const filtrado = users.filter(filtrarArreglo);
console.log(filtrado);

//***************************************** */
//* FILTRANDO UN ARRAY DE OBJETOS (REDUCE)
//***************************************** */
//  devolverá un solo valor.
// No se ejecuta en arreglos vacíos.
// Es inmutable, no altera ni modifica el arreglo original.

//* cuantas personas mayores de 18 años, existen
let cantidadMayores = users.reduce((contador, item) => {
  if (item.edad > 18) {
    return contador + 1;
  } else {
    return contador;
  }
}, 0);
console.log(cantidadMayores);

//***************************************** */
//* FILTRANDO UN ARRAY DE OBJETOS (MAP)
//***************************************** */
// Crea un nuevo arreglo a partir de una existente.
// Nunca altera la cantidad de elementos del array original.
// No altera el arreglo original (inmutabilidad del código).
const data = users.map((item) => {
  return item.nombre;
});

const data2 = users.map((item) => {
  item.newValue = Math.floor(Math.random() * (100 - 50) + 50);
  return item;
});

const data3 = users.map((item) => {
  return {
    ...item,
    newValue: Math.floor(Math.random() * (100 - 50) + 50),
  };
});
console.log(data3);

//***************************************** */
//* FILTRANDO UN ARRAY DE OBJETOS (FILTER AVANZADO)
//***************************************** */
const newUsersV3 = users
  .filter((user) => user.edad > 18)
  .sort((user1, user2) => user1.edad - user2.edad)
  .map((user) => user.nombre + ":" + user.edad);

const result = users
  .map((user) => user.edad)
  .reduce((counter, edad) => (edad > 18 ? counter + 1 : counter), 0);

const result2 = users
  .map((user) => user.edad)
  .reduce((obj, edad) => {
    if (obj[edad]) {
      obj[edad] = obj[edad] + 1;
    } else {
      obj[edad] = 1;
    }
    return obj;
  }, {});

console.log(result2);
