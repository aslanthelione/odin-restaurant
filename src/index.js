import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const pages = { home, menu, contact };
const content = document.getElementById("content");

function show(name) {
  content.replaceChildren(...pages[name]());
}

document.querySelector("nav").addEventListener("click", (event) => {
  const page = event.target.dataset.page;
  if (page) show(page);
});

show("home"); // initial page