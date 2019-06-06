let list = [1, 2, 3, 4, 5]
let newList = []

// Foreach equivale al for clasico, ejecuta una función por cada elemento de una lista
// siempre va a recorrer cada elemento de esa lista, no se detiene
list.forEach( e => e < 4 ? newList.push(e) : null)
// % nos devuelve el cociente de una división

// Filter devuelve UNA NUEVA LISTA con todos los elemento que cumplan el criterio especificado
newList = list.filter( e => e < 4)

// Find devulve EL PRIMER ELEMENTO que cumpla con el criterio especificado
newList = list.find(e => e < 4)

// Map deuelve UNA NUEVA LISTA 
newList = list.map(e => e * 2)


console.log(list, newList)