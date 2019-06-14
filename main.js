let ordersList = []
const menu = [
	{ id:"0001", name: "Tarta de jamón y queso", type:"Principal", price:100, promo:"1" },
	{ id:"0002", name: "Ensalada caprese" , type:"Principal", price:150, promo:"2" },
	{ id:"0003", name: "Milanesa", type:"Principal", price:200, promo:"3" },
	{ id:"0004", name: "Ensalada mixta", type:"Guarnición", price:120, promo:"1" },
	{ id:"0005", name: "Papas fritas", type:"Guarnición", price:75, promo:"2" },
	{ id:"0006", name: "Puré de zapallo", type:"Guarnición", price:100, promo:"3" },
	{ id:"0007", name: "Flan con crema", type:"Postre", price:90, promo:"1" },
	{ id:"0050", name: "Queso y dulce", type:"Postre", price:90, promo:"2" },
    { id:"0020", name: "Mousse de chocolate", type:"Postre", price:90, promo:"3" },
    { id:"0010", name: "Coca común", type: "Bebida", price:50, promo:"1"},
    { id:"0011", name: "Paso de los toros", type: "Bebida", price:50, promo:"2"},
]

// IDENTIFICAR LOS TIPOS DE PLATOS
// una lista con todos los tipos de platos del menu
const allTypes = menu.map(({type}) => type)

// Nuev lista con tipos únicos
const plateTypes = allTypes.filter((e, i) => allTypes.indexOf(e) === i)

// GENERAR SELECTORES POR CADA UNO
const createSelects = (list, container) => {
    list.forEach(e => {
        let select = document.createElement('select')
        select.id = e
        container.appendChild(select)
    })
}

// LLENAR LOS SELECTORES CON LA INFO PERTINENTE

// Colocar en cada select un option sin value como placeholder

const fillSelects = list => {
    list.forEach( e => {
        let select = document.getElementById(e.type)
        if(select.childElementCount === 0){
            let placeholder = {name:`seleccione plato ${e.type}`, id:''}
            select.appendChild(createOption(placeholder))
        }
        select.appendChild(createOption(e))
    })
}

const createOption = elem =>{
    let option = document.createElement('option')
    option.innerText = elem.name
    option.value = elem.id
    return option
}

const createOrder = () => {
    let order = []
    plateTypes.forEach( type => {
        let select = document.getElementById(type)
        let selectedPlate = menu.find( 
            plate => plate.id === select.value
        )
        select.value = ''
        order.push(selectedPlate)
    })
    ordersList.push(order)
    printOrders()
}

const printOrders = () => {
    let container = document.getElementById('orders')
    container.innerHTML = ""

    ordersList.forEach(order => {
        let orderUl = document.createElement('ul')
        order.forEach(plate =>{
            let plateLi = document.createElement('li')
            plateLi.innerText = plate.name
            orderUl.appendChild(plateLi)
        })
        let priceLi = document.createElement('li')
        priceLi.innerText = totalPrice(order)
        orderUl.appendChild(priceLi)
        container.appendChild(orderUl)
    })
}

//const totalPrice = order => order.map(plate => plate.price).reduce((a,b) => a+b)

const totalPrice = order => {
    let price = order.map(e=> e.price).reduce((a,b)=>a+b)
    let promo = order.map(e=> e.promo).reduce((a,b)=> a === b ? a : undefined )
    switch(promo){
        case "1":
         return price*0.8
         break
        case "2":
         return price*0.75
         break
        case "3":
         return price*1.25
         break
        default:
            return price
    }
}

// inicializacion del programa
const initialize = () =>{
    let mainDiv = document.getElementById('selects')
    createSelects(plateTypes, mainDiv)
    fillSelects(menu)
    printOrders()
}