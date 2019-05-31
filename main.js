var entree, garnish, dessert
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
    order.push(menu[entree.value])
    order.push(menu[garnish.value])
    order.push(menu[dessert.value])
    console.log(order)
}