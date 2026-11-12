import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"

console.log('Hello from index.js');

const content = document.getElementById("content");

content.replaceChildren(
    ...home()
);