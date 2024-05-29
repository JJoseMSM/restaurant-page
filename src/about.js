import Logo from './Logo.png';

export function About() {

    const contenedor = document.getElementById('content');

    const img = document.createElement('img');
    img.src = Logo;
    contenedor.appendChild(img);

    const titulo = document.createElement('h1');
    titulo.textContent = '(Wild West Pizza)';
    contenedor.appendChild(titulo);

    const about = document.createElement('h4');
    about.textContent = `Welcome to Wild West Pizza, where the spirit of the frontier meets the flavors of today!

    Nestled in the heart of [City/Town], our restaurant embodies the essence of the American West with a contemporary twist. Inspired by the rugged landscapes and hearty culinary traditions of the frontier, our menu celebrates the bold flavors and adventurous spirit of the Wild West.
    
    At Wild West Pizza, we believe in using only the freshest ingredients sourced from local producers whenever possible. Our artisanal pizzas are crafted from scratch, with hand-tossed dough made daily and topped with an array of mouthwatering ingredients that capture the essence of the West.
    
    From the classic Cowboy BBQ Pizza, smothered in tangy barbecue sauce and piled high with tender pulled pork, to the adventurous Gold Rush Pizza, featuring savory buffalo chicken and spicy jalapeños, there's something for every palate at Wild West Pizza.
    
    But our commitment to quality doesn't stop at pizza. Our menu also features a variety of delicious appetizers, hearty salads, and tempting desserts, all made with the same attention to detail and dedication to flavor that defines our pizzas.
    
    Whether you're looking for a family-friendly dining experience, a casual meal with friends, or a place to relax and unwind after a long day on the trail, Wild West Pizza invites you to saddle up and join us for a taste of the frontier. So come on down and see why we're the hottest spot west of the Mississippi!`;
    contenedor.appendChild(about);   
}