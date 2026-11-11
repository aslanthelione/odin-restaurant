import "./styles.css"

console.log('Hello from index.js');

function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key in el) el[key] = value;   // id, className, href, textContent...
    else el.setAttribute(key, value); // class, data-*, aria-*...
  }
  el.append(...children);
  return el;
}

const content = document.getElementById("content");

content.replaceChildren(
    h("h2", {}, "You want nugget? We have nugget!"),
    h("p", {},
        "We are the world leading chicken nugget experts. Through billions of dollars of research and development, our scientists have created the ",
        h("em", {}, "crispiest"), ", ",
        h("em", {}, "goldenest"), ", most ",
        h("em", {}, "succulent"),
        " chicken nugget in the history of mankind."
    ),
    h("a", {}, "Get yours today!")
);