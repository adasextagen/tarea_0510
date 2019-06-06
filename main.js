let order = []
menu = [
	{ id:0001, name: "Tarta de jamón y queso", type:"Principal", price:100, promo:"1" },
	{ id:0002, name: "Ensalada caprese" , type:"Principal", price:150, promo:"1" },
	{ id:0003, name: "Milanesa", type:"Principal", price:200, promo:"1" },
	{ id:0004, name: "Ensalada mixta", type:"Guarnición", price:120, promo:"1" },
	{ id:0005, name: "Papas fritas", type:"Guarnición", price:75, promo:"1" },
	{ id:0006, name: "Puré de zapallo", type:"Guarnición", price:100, promo:"1" },
	{ id:0007, name: "Flan con crema", type:"Postre", price:90, promo:"1" },
	{ id:0050, name: "Queso y dulce", type:"Postre", price:90, promo:"1" },
    { id:0020, name: "Mousse de chocolate", type:"Postre", price:90, promo:"1" },
    { id:0010, name: "Coca común", type: "Bebida", price:50, promo:"1"},
    { id:0011, name: "Paso de los toros", type: "Bebida", price:50, promo:"1"},
]

// Identificar tipos de platos
let allTypes = menu.map( e => e.type)
let productTypes = allTypes.filter((e,i) => allTypes.indexOf(e) === i)

// Crear contenedores tipo
const createSelects = container => {
    productTypes.forEach(e => {
        let select = document.createElement('select')
        select.id = e
        container.appendChild(select)
    })
}

// Popular contenedores según
const fillSelects = data => {
    data.forEach(e => {
        let select = document.getElementById(e.type)
        !select.childElementCount ? select.appendChild(createOption({name:`Seleccione ${e.type}`, id:''})) : null
        select.appendChild(createOption(e))
    })


const createOption = ({name, id}) => {
    let option = document.createElement('option')
    option.innerText = name
    option.id = id
    return option
}

// funcion inicializadora
const initialize = () => {
    let container = document.getElementById('selects')
    createSelects(container)
    fillSelects(menu)
}