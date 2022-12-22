const carrito = document.getElementById('carrito');
const bolis = document.getElementById('lista-boli');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();
function cargarEventListeners (){
    bolis.addEventListener('click', comprarBoli);
    carrito.addEventListener('click', eliminarBoli);
    vaciarCarritoBtn.addEventListener('click', vaciarCarritoBtn);
    document.addEventListener('DOMContentLoaded', leerlocalStorage)
}

function comprarBoli(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const boli = e.target.parentElement.parentElement;
        leerDatosBoli(boli);
    }
}

function leerDatosBoli(boli) {
    const infoBoli = {
        imagen: boli.querySelector('img').src,
        titulo: boli.querySelector('h4').textContent,
        precio: boli.querySelector('.precio span').textContent,
        id: boli.querySelector('a').getAttribute('date-id')
    }
    insertarCarrito(infoBoli);
}
function insertarCarrito(boli){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src"${boli.imagen}" width=100>
    </td>
    <td>${boli.titulo}</td>
    <td>${boli.precio}</td>
    <td>
    <a href="#" class="borrar-boli" data-id="${boli.id}"X</a>
    </td>
    `;
    listaBolis.appendChild(row);
    guardarBoliLocalStorage(boli);
}

function eliminarBoli(e){
    e.preventDefault();

    let boli;
    boliId;
    if(e.target.classList.contains('borrar-boli')){
        e.target.parentElement.parentElement.remove();
        boli = e.target.parentElement.parentElement;
        boliId = boli.querySelector('a').getAttribute('data-id');
    }
    eliminarBoliLocalStorage(boliId);

}
function vaciarCarrito(){
    while(listaBolis.firstChild){
        listaBolis.removeChild(listaBolis.firstChild);
    }

    vaciarLocalStorage();
    return false;
}

function guardarBoliLocalStorage(boli){
    let bolis;
    bolis = obtenerBolisLocalStorage();
    bolis.push(boli);
    localStorage.setItem('bolis', JSON.stringify(bolis))
}

function obtenerBolisLocalStorage(){
    let bolisLS;
    if(localStorage.getItem('bolis') === null){
        bolisLS = [];
    } else {
        bolisLS = JSON.parse(localStorage.getItem('bolis'));
    }
    return bolisLS;
}

function leerlocalStorage(){
    let bolisLS;

    bolisLS = obtenerBolisLocalStorage();

    bolisLS.forEach(function(boli){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src="${boli.imagen}" width=100>
        </td>
        <td>"${boli.titulo}"</td>
        <td>"${boli.precio}"</td>
            <a href="#" class="borrar-boli" data-id="${boli.id}"X</a>
    </td>
        `;
        listaBolis.appendChild(row);
    });
}

function eliminarBoliLocalStorage(boli){
    let bolisLS;

    bolisLS = obtenerBolisLocalStorage();

    bolisLS.forEach(function(bolisLS, index){
        if(bolisLS.id === boli) {
            bolisLS.splice(index, 1)
        }
    });

    localStorage.setItem('bolis', JSON.stringify(bolisLS));

}

function vaciarLocalStorage(){
    localStorage.clear();
}