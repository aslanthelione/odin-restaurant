import { e } from "./index.js"

export default function () {
    return [
        e("h2", {}, "You want nugget? We have nugget!"),
        e("p", {},
            "We are the world leading chicken nugget experts. Through billions of dollars of research and development, our scientists have created the ",
            e("em", {}, "crispiest"), ", ",
            e("em", {}, "goldenest"), ", most ",
            e("em", {}, "succulent"),
            " chicken nugget in the history of mankind."
        ),
        e("a", {}, "Get yours today!")
    ]
}