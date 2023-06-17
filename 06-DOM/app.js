//con document accedo a todo lo que tiene el DOM
/*console.dir(document);

//podemos acceder a cada propiedad el dom
console.log(document.URL);

//podemos modificar datos que ya tuiene el dom
console.log(document.title);
document.title = 'interistas'
console.log(document.title);

console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);*/

//getElementById()
/*console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(header);

headerTitle.textContent = 'holiii';
headerTitle.innerText = 'pigy';
headerTitle.innerHTML = '<h3>Prueba</h3>';*/

//getElementsByClassName seleccionar elementos por clase
/*var items = document.getElementsByClassName('list-group-item');
console.log(items[0]);*/

//getElementByTagName seleccionar elementos por tagName
// var items = document.getElementsByTagName('li');
// items[0].textContent = 'Prueba 02';
// console.log(items);

//querySelector es para seleccionar y modificar css y devuelve el primer elemento que encuentra
// var header = document.querySelector('#main-header');
// header.style.border = 'solid 4px #000';
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hola Mundo';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Enviar";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';


//querySelectorAll, con este se seleccionan todos los items
// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color = 'red';

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Prueba';

// var impar = document.querySelectorAll('li:nth-child(odd)');
// var par = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < impar.length; i++) {
//    impar[i].style.backgroundColor = '#ccc'; 
//    par[i].style.backgroundColor = '#f4f4f4'; 
// }


//parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// var main = itemList.parentNode;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentNode.parentNode);\


//parentElement funciona igual al parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// var main = itemList.parentElement;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentElement.parentElement);


//var itemList = document.querySelector('#items');
//childNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);

//firstchild/firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "prueba"

//lastChild/lastElementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "prueba";


// var itemList = document.querySelector('#items');

// //previousSibling
// console.log(itemList.previousSibling);

// //previousElement
// console.log(itemList.previousElementSibling);

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElement
// console.log(itemList.nextElementSibling);

/****Crear elementos ******/

//createElement

// //tagName
// var nuevodiv = document.createElement('div');
// nuevodiv.className = 'hola'
// nuevodiv.id = 'div-hola'
// nuevodiv.setAttribute('title','HolaMundo')

// //createNode
// var nuevoNotoText = document.createTextNode('Hola Mondo')
// nuevodiv.appendChild(nuevoNotoText)

// console.log(nuevodiv);

// var container = document.querySelector('header .container')
// console.log(container);

// var h1 = document.querySelector('h1')
// console.log(h1);

// container.insertBefore(nuevodiv,h1)

/***** Eventos de JavaScript ******/
//evento onClick
// document.getElementById('boton').addEventListener('click', hacerClic);

// function hacerClic() {
//     //console.log('usted hizo clic');
//     document.getElementById('header-title').textContent = 'Texto cambiado'
// }

//agregar elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//evento submit crear un item
form.addEventListener('submit',agregarItem);

//evento click eliminar un item
lista.addEventListener('click',eliminarItem);

//evento keyup del teclado en el campo de filtro para buscar un item
filtro.addEventListener('keyup',buscarItem);

//funcion para agregar un item a la lista
function agregarItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li')
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));
    li.appendChild(botonDel);
    lista.appendChild(li);
}

//funcion para eliminar un item de la lista
function eliminarItem(e) {
    if(e.target.classList.contains('eliminar')){
        if(confirm('Seguro que desea eliminar el elemento?')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}

//funcion para buscar un item
function buscarItem(e) {
    var texto = e.target.value.toLowerCase()
    var items = lista.getElementsByTagName('li')
    Array.from(items).forEach(function(item) {
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}