// - un **array** OK
// - un **condicional** (puede ser `if` y/o `switch`) OK
// - un **ciclo de iteración** (puede ser un `for`, un `while` o un `do-while`). OK
// - **funciones bien hechas:** que usen parámetros y/o retornen un valor. OK
// - las variables deben estar declaradas solo con **let** o **const** OK
// - Respetar la indentación del código y el formato camelCase OK

//---------------------------- DECLARACION DE FUNCIONES ----------------------------

const verProp = (propiedades) => {
  propiedades.length == 0 //Operador ternario, verifica si variable propiedades esta vacio y responde acorde
    ? console.log(`No hay propiedades disponibles, desea agregar una?\n`)
    : console.log(`Las propiedades son:\n ${propiedades.join("-")}`);
};

const agregarProp = () => {
  //Esta funcion en mi juicio deberia trabajar con objetos, dadas las condiciones de entrega, se simplifica para operar con Arrays
  console.log(
    "Que propiedad desea agregar? Escriba las siguientes opciones \nCasa\nMansion\nCabaña \nOtra(Especificar)"
  );
  let propiedad = prompt();
  return propiedad;
};

const eliminarProp = (propiedades) => {
  let salida = true;
  do {
    console.log("Que propiedad desea eliminar? Escriba el numero");
    for (let i = 0; i < propiedades.length; i++) {
      console.log(`${i} - ${propiedades[i]}`); // Imprime al usuario el listado de propiedades de forma legible
    }
    indice = parseInt(prompt());
    if (indice < propiedades.length) {
      // Este IF previene que el usuario se equivoque y elija una opcion que no exista
      propiedades.splice(indice, 1); // no te rompas por favor
      console.log(`Eliminacion exitosa\nResultado:\n${propiedades.join("-")}`);
      salida = false;
    } else {
      console.log(`No existe ese valor, por favor intente de nuevo`);
    }
  } while (salida === true);
  return propiedades;
};

const reemplazarProp = (propiedades) => {
  let salida = true;
  do {
    console.log("Que propiedad desea reemplazar? Escriba el numero");
    for (let i = 0; i < propiedades.length; i++) {
      console.log(`${i} - ${propiedades[i]}`); // Imprime al usuario el listado de propiedades de forma legible
    }
    indice = parseInt(prompt());
    if (indice < propiedades.length) {
      propiedades[indice] = prompt("Escriba el nuevo valor");
      // Este IF previene que el usuario se equivoque y elija una opcion que no exista
      console.log(`ediicion exitosa\nResultado:\n${propiedades.join("-")}`);
      salida = false;
    } else {
      console.log(`No existe ese valor, por favor intente de nuevo`);
    }
  } while (salida === true);
  return propiedades;
};

/* ----------------- menu de seleccion, comienzo de funcion main() -----------------   */
const main = () => {
  let respuesta;
  let propiedades = [];

  do {
    console.log(
      "Bienvenido!\nPara ver las propiedades presione 1\nPara agregar una propiedad presione 2\nPara eliminar una propiedad presione 3\nPara editar una propiedad presione 4\nPara salir presione 5"
    );
    respuesta = parseInt(prompt());

    switch (respuesta) {
      case 1:
        verProp(propiedades);
        break;
      case 2:
        propiedades.push(agregarProp());
        break;
      case 3:
        propiedades = eliminarProp(propiedades);
        break;
      case 4:
        propiedades = reemplazarProp(propiedades);
        break;
      case 5:
        console.log("Salida exitosa");
        break; // Si el usuario ingresa 5, salimos del ciclo
      default:
        console.log("Respuesta erronea, intente de nuevo");
        break;
    }
  } while (respuesta !== 5);
};

/* ----------------- fin de funcion main() -----------------   */

// ---------------------------- FIN DE DECLARACION DE FUNCIONES ----------------------------

main();
