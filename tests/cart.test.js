import { subtotal, applyCoupon } from "../src/cart.js";

const items = [
  { name: "Coffee", price: 5, qty: 2 },
  { name: "Bagel", price: 3, qty: 1 }
];

if (subtotal(items) !== 13) {
  throw new Error("Subtotal calculation failed");
}

if (applyCoupon(100, { type: "percent", value: 20 }) !== 80) {
  throw new Error("Percent coupon failed");
}

if (applyCoupon(10, { type: "fixed", value: 15 }) !== 0) {
  throw new Error("Fixed coupon should not create negative totals");
}

console.log("All tests passed");
