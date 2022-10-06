import '../css/componets.css';
// import webapcklogo from '../assets/img/webpack-logo.png'     

export const saludar = (nombre = 'Sin nombre') => {
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}m`

    document.body.append(h1);

}