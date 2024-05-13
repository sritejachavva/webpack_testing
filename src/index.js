import "./styles.css";
import { loadHome } from "./home.js"
import { loadStory } from "./story.js"
import { loadMenu } from "./menu.js"



function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('story');
  
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadStory);
}
  