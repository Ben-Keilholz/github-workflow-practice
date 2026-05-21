export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function applyCoupon(total, coupon) {
  if (!coupon) return total;

  if (coupon.type === "percent") {
    return total * (1 - coupon.value / 100);
  }

  if (coupon.type === "fixed") {
    return Math.max(0, total - coupon.value);
  }

  return total;
}
