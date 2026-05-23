window.onload = () => {
    FCargar();
}
const FCargar = () => {
    alert("Cargando funciones...");
    setTimeout(() => {
        FMaquetar();
    }, 5000);
    setTimeout(() => {
        FEstilos();
    }, 5000);
    setTimeout(() => {
        FContenido();
    }, 5000);
}

const FMaquetar = () => {
    alert(" cargando Maquetando...");
}
const FContenido = () => {
    alert(" cargando Contenido...");
}
const FEstilos = () => {
    alert(" cargando Estilos...");
}