menu = [
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

var createItem = function(item){
    var menuItem = document.createElement('option')
    menuItem.innerText = item.nombre;
    menuItem.value = (item.plato);

var option = document.createElement("option");
    option.text = item.nombre;
    principal.add(option);

   principal.appendChild(option);
    console.log(option)
  }
  
  var populateMenu = function(){
    principal = document.getElementById('principal')
    menu.map(function(item){createItem(item)})
  }

  // Puedo imprimir todo en el primer option (que corresponderia a principal)
  // pero  no se como hacer para que identifique el ID ya sea principal,guarnicion
  //y arroje los valores correctos en cada option.. :( supongo que seria con If?