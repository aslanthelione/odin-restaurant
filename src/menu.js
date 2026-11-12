import { e } from "./dom.js"

const PRICE_PER_NUGGET = 5 / 6; // dollars

const tiers = [
    { name: "The Snack", count: 6, discount: 0 },
    { name: "The Lunch", count: 12, discount: 0.1 },
    { name: "The Family Pack", count: 24, discount: 0.2 },
    { name: "The Feast", count: 48, discount: 0.3 },
    { name: "The Nugget Tub", count: 100, discount: 0.4 },
];

function tierItem({ name, count, discount }) {
    const price = count * PRICE_PER_NUGGET * (1 - discount);
    return e("li", { className: "menu-item" },
        e("h3", {}, name),
        e("p", {}, `${count} nuggets`),
        e("div", { className: "price-info" },
            e("p", { className: "price" }, `$${price.toFixed(2)}`),
            ...(discount > 0
                ? [e("p", { className: "discount" }, `${discount * 100}% off!`)]
                : [])
        )
    );
}

export default function () {
    return [
        e("h2", {}, "MENU"),
        e("ul", { className: "menu-list" }, ...tiers.map(tierItem))
    ];
}