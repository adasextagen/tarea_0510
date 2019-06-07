let list = [1, 2, 3, 4, 5]
let newList = []

// Recorre todos los elementos de una lista y ejecuta ordenes por cada uno
// simil al funcionamiento del for() tradicional
list.forEach( e => {
    e < 4 ? newList.push(e) : null
})

// Filter RETORNA una nueva lista de elemento que cumplan concierta condicion
newList = list.filter(e => e < 4)

// Find RETORNA el primer elemento de la lista que cumpla con la condición
newList = list.find(e => e < 4)

// Map RETORNA un elemento por cada indice de la lista recorrida que puede ser operado
newList = list.map(e  => e < 4)

console.log(list, newList)