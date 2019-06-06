var entree, garmish, dessert, orderUl
var order = []

menu = [
	{ name : "Tarta de jamón y queso", type : "principal" },
	{ name : "Ensalada caprese" , type : "principal" },
	{ name : "Milanesa" , type : "principal" },
	{ name : "Ensalada mixta", type : "guarnicion" },
	{ name : "Papas fritas", type : "guarnicion" },
	{ name : "Puré de zapallo", type: "guarnicion" },
	{ name : "Flan con crema", type : "postre" },
	{ name : "Queso y dulce", type : "postre" },
	{ name : "Mousse de chocolate", type : "postre" },
]

var setSelects = function(){
    entree = document.getElementById("entree")
    garmish = document.getElementById("garmish")
    dessert = document.getElementById("dessert")
    
    menu.map(function(dish, index){
        var dishItem =document.createElement("option") 
        dishItem.innerText = dish.name
        dishItem.value = index
        

        switch(dish.type){
            case "principal":
                entree.appendChild(dishItem)
                break;
            case "guarnicion":
                garmish.appendChild(dishItem)
                break;
            case "postre":
                dessert.appendChild(dishItem)
                break;
        }
    })
}

var confirm = function(){
    orderUl =[]
    order.push(menu[entree.value])
    order.push(menu[garmish.value])
    order.push(menu[dessert.value])
    orderUl= document.getElementById("orderUl")
    orderUl.innerHtml = ""

    var aux = JSON.stringify(order)
    window.localStorage.setItem("order", aux)

    printOrder()
}

var printOrder = function(){
    order.map(function(itemFood){
        var li =document.createElement("li")
        li.innerText = itemFood.name
        orderUl.appendChild(li)
    })
}

var checkStorage = function(){
    var storeOrders = window.localStorage.getItem("order")
    console.log(storeOrders)
}