import Pizza from './pizza.jpg';
import Hamburger from './hamburger.jpg';
import ChiliFries from './chilifries.jpg';
import Tacos from './tacos.jpg'

export function Menu() {

    const contenedor = document.getElementById('content');

    const titulo = document.createElement('h1');
    titulo.textContent = '(Wild West Pizza)';
    contenedor.appendChild(titulo);

    const lista = document.createElement('h2');
    lista.textContent = ('(Our Menu)');
    contenedor.appendChild(lista);

    const menuContainer = document.getElementById('content');
    menuContainer.className = menuContainer;

    const menuItems = [
        {name: 'Pizza', price: '$5', image: Pizza},
        {name: 'Hamburger', price: '$4', image: Hamburger},
        {name: 'Chili fries', price: '$3', image: ChiliFries},
        {name: 'Tacos', price: '$5', image: Tacos},
    ];

    const listMenu = document.createElement('ul');

    menuItems.forEach(item => {
        const listItem = document.createElement('li');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        const namePrice = document.createElement('p');
        namePrice.textContent = `${item.name}-${item.price}`;

        listItem.appendChild(image);
        listItem.appendChild(namePrice);

        listMenu.appendChild(listItem);
    });

    menuContainer.appendChild(listMenu);
    
}