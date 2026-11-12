export function e(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key in el) el[key] = value;   // id, className, href, textContent...
    else el.setAttribute(key, value); // class, data-*, aria-*...
  }
  el.append(...children);
  return el;
}