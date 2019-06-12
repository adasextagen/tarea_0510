let ordersList = []
const menu = [
	{ id:"0001", name: "Tarta de jamón y queso", type:"Principal", price:100, promo:"1" },
	{ id:"0002", name: "Ensalada caprese" , type:"Principal", price:150, promo:"1" },
	{ id:"0003", name: "Milanesa", type:"Principal", price:200, promo:"1" },
	{ id:"0004", name: "Ensalada mixta", type:"Guarnición", price:120, promo:"1" },
	{ id:"0005", name: "Papas fritas", type:"Guarnición", price:75, promo:"1" },
	{ id:"0006", name: "Puré de zapallo", type:"Guarnición", price:100, promo:"1" },
	{ id:"0007", name: "Flan con crema", type:"Postre", price:90, promo:"1" },
	{ id:"0050", name: "Queso y dulce", type:"Postre", price:90, promo:"1" },
    { id:"0020", name: "Mousse de chocolate", type:"Postre", price:90, promo:"1" },
    { id:"0010", name: "Coca común", type: "Bebida", price:50, promo:"1"},
    { id:"0011", name: "Paso de los toros", type: "Bebida", price:50, promo:"1"},
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
    plateTypes.forEach( e => {
        let select = document.getElementById(e)
        let plate = menu.find( e => e.id === select.value)
        select.value = ''
        order.push(plate)
    })
    ordersList.push(order)
    printOrders()
}

const printOrders = () => {
    let container = document.getElementById('orders')
    container.innerHTML = ""

    ordersList.forEach(order => {
        let orderUl = document.createElement('ul')
        let totalPrice = 0
        order.forEach(plate =>{
            let plateLi = document.createElement('li')
            plateLi.innerText = plate.name
            totalPrice += plate.price
            orderUl.appendChild(plateLi)
        })
        let priceLi = document.createElement('li')
        priceLi.innerText = `Precio: ARS ${totalPrice}`
        orderUl.appendChild(priceLi)
        container.appendChild(orderUl)
    })
}

// inicializacion del programa
const initialize = () =>{
    let mainDiv = document.getElementById('selects')
    createSelects(plateTypes, mainDiv)
    fillSelects(menu)
    printOrders()
}