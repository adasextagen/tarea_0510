var cosaAuxiliar
var seleccion

var menu = [
	{ "nombre" : "Tarta de jamón y queso", "plato" : "principal" },
	{ "nombre" : "Ensalada caprese" , "plato" : "principal" },
	{ "nombre" : "Milanesa" , "plato" : "principal" },
	{ "nombre" : "Ensalada mixta", "plato" : "guarnición" },
	{ "nombre" : "Papas fritas", "plato" : "guarnición" },
	{ "nombre" : "Puré de zapallo", "plato" : "guarnición" },
	{ "nombre" : "Flan con crema", "plato" : "postre" },
	{ "nombre" : "Queso y dulce", "plato" : "postre" },
	{ "nombre" : "Mousse de chocolate", "plato" : "postre" },
];


var armandoMenu = function () {
    menu.map(function(a){
        var listItem=document.createElement("option")
        listItem.innerText=a.nombre
        listItem.classList.add("menu-item")
        listItem.value=a.nombre

        if (a.plato=="principal") {
            cosaAuxiliar=document.getElementById("principal")
            cosaAuxiliar.appendChild(listItem)
        } else if (a.plato=="guarnición") {
            cosaAuxiliar=document.getElementById("guarnicion")
            cosaAuxiliar.appendChild(listItem)
        } else if (a.plato="postre") {
            cosaAuxiliar=document.getElementById("postre")
            cosaAuxiliar.appendChild(listItem)
        }
    })}

var confirmandoMenu = function () {
    seleccion =["un plato", "dos platos", "tres platos"]
    seleccion.map (function(bla) {
        var unItem = document.createElement("li")
        unItem.innerText = bla
        var lista=document.getElementById("items")
        lista.appendChild(unItem)
    })}
