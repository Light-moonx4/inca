window.onload =FCargar();

function FCargar() {
    alert("Cargando funciones...");
    setTimeout(FMaquetar, 5);
    setTimeout(FEstilos, 5);
    setTimeout(FContenido, 5);
}

function FMaquetar() {
    var contenido = document.getElementById("container"); // instanciamos el objeto container por mefdio de su id
   
    var cabecera = document.createElement("header"); // creamos un elemento header
    cabecera.setAttribute("id", "cabecera"); // le asignamos un id a ese elemento

    var menu = document.createElement("nav"); // creamos un elemento nav
    menu.setAttribute("id", "barramenu");

    var principal = document.createElement("main"); // creamos un elemento h1
    principal.setAttribute("id", "principal");

    var pdp = document.createElement("footer"); // creamos un elemento footer
    pdp.setAttribute("id", "pdp");

  
    contenido.appendChild(cabecera); // agregamos el elemento header al container
    contenido.appendChild(menu); // agregamos el elemento nav al container
    contenido.appendChild(principal); // agregamos el elemento h1 al container
    contenido.appendChild(pdp); // agregamos el elemento footer al container
}
function FContenido() {
    var titulo=document.createElement("h1");
    titulo.setAttribute("id","titulopagina");
    titulo.textContent="mi pagina creada Dinamica";
    var cabe=document.getElementById("cabecera");
    cabe.appendChild(titulo);
    
    var imagenfondo=document.createElement("img");
    imagenfondo.setAttribute("id","imgfondo");
    imagenfondo.setAttribute("src","img/fondo.png");
    imagenfondo.setAttribute("alt","Imagen de fondo");
    var ppal=document.getElementById("principal");
    ppal.appendChild(imagenfondo);
}
function FEstilos() {
    var estilos = document.createElement("style"); // creamos un elemento style
    estilos.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: gray;
        outline: 1px solid black;
    }
    #container{
        width:1200px;
        height: 1000px;
        min-width: 1200px;
        min-height: 1000px;
        margin:auto;
        margin-top: 10px;
        background-color: white;
        padding-top: 5px;
    }
    #cabecera{
        width: 1190px;
        height: 150px;
        min-width: 1190px;
        min-height: 150px;
        margin:5px;
        outline: 1px solid green;
        background-color: yellow;
    }
    #barramenu{
        width: 1190px;
        height: 50px;
        min-width: 1190px;
        min-height: 50px;
        margin:5px;
        outline: 1px solid green;
        background-color: blue;
    }
    #principal{
        width: 1190px;
        height: 690px;
        min-width: 1190px;
        min-height: 690px;
        margin:5px;
        outline: 1px solid blue;
        background-color: orange; 
    }
    #pdp{
        width: 1190px;
        height: 80px;
        min-width: 1190px;
        min-height: 80px;
        margin:5px;
        outline: 1px solid green;
        background-color: purple;
    }
    #imgfondo{   
        width: 1190px;
        height: 690px;
        min-width: 1190px;
        min-height: 690px;
        outline: 1px solid blue;
        border-radius: 10px;
    }     
    `
    document.head.appendChild(estilos); // agregamos el elemento style al head
}   