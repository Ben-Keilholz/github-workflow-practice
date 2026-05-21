import { subtotal } from "../src/cart.js";

const items = [
   { name: "Coffee", price: 5, qty: 2 },
   { name: "Bagel", price: 3, qty: 1 }
];

if (subtotal(items) !== 13) {
   throw new Error("Subtotal calculation failed");
}

console.log("All tests passed");
