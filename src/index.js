import './styles.css'
import { Home } from "./home";
import { Menu } from './menu';
import { About } from './about';

Home();

document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    Home();
});

document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    Menu();
});

document.getElementById('about').addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    About();
});