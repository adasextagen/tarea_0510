var entree, garnish, dessert, orderUl
var order = []
menu = [
	{ name : "Tarta de jamón y queso", type: "principal" },
	{ name : "Ensalada caprese" , type: "principal" },
	{ name : "Milanesa" , type: "principal" },
	{ name : "Ensalada mixta", type: "guarnición" },
	{ name : "Papas fritas", type: "guarnición" },
	{ name : "Puré de zapallo", type: "guarnición" },
	{ name : "Flan con crema", type: "postre" },
	{ name : "Queso y dulce", type: "postre" },
	{ name : "Mousse de chocolate", type: "postre" },
]

var setSelects = function(){
    entree = document.getElementById('entree')
    garnish = document.getElementById('garnish')
    dessert = document.getElementById('dessert')

    menu.map(function(dish, index){
        var dishItem = document.createElement('option')
        dishItem.innerText = dish.name
        dishItem.value = index

        switch(dish.type){
            case 'principal':
                entree.appendChild(dishItem)
                break;
            case 'guarnición':
                garnish.appendChild(dishItem)
                break;
            case 'postre':
                dessert.appendChild(dishItem)
                break;
        }
    })
}

var confirm = function(){
    order = []
    order.push(menu[entree.value])
    order.push(menu[garnish.value])
    order.push(menu[dessert.value])
    orderUl =  document.getElementById('orderUl')
    orderUl.innerHTML = ''

    var aux = JSON.stringify(order)
    window.localStorage.setItem('order', aux)

    printOrder();
}

var printOrder = function(){
    order.map(function(item){
        var li = document.createElement('li')
        li.innerText = item.name;
        orderUl.appendChild(li)
    })
}

var checkStorage = function(){
    var storedOrders = window.localStorage.getItem('order')
    console.log(storedOrders)
}