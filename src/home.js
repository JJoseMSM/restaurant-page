import Logo from './Logo.png';

export function Home() {

    const contenedor = document.getElementById('content');

    const img = document.createElement('img');
    img.src = Logo;
    contenedor.appendChild(img);

    const titulo = document.createElement('h1');
    titulo.textContent = '(Wild West Pizza)';
    contenedor.appendChild(titulo);

    const parrafo = document.createElement('h3');
    parrafo.textContent = 'Best stone pizza from the Yellowstone valley, beer, sports and a good time.';
    contenedor.appendChild(parrafo);   

    const parrafo1 = document.createElement('h3');
    parrafo1.className = parrafo1;
    parrafo1.textContent = 'PO BOX 592 (From 592 To 608), YELLOWSTONE NATIONAL PARK, WY.';
    contenedor.appendChild(parrafo1); 
}