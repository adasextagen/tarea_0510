let list = [1, 2, 3, 4, 5]
let newList = [ ]

list.forEach( e => { 
    e < 4 ? newList.push(e) : null
})

newList = list.filter(e => e < 4)

console.log(list, newList)