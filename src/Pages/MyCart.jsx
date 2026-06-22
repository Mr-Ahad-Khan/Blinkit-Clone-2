import React from 'react';
import { Link } from 'react-router-dom';
import { MdLockOutline, MdShoppingCart } from 'react-icons/md';
import useCart from '../hooks/useCart';

export default function MyCart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((total, item) => total + item.amount * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-md bg-white p-8 text-center shadow-sm">
          <MdShoppingCart className="mx-auto text-5xl text-green-600" />
          <h1 className="mt-4 text-3xl font-bold text-gray-950">Your cart is empty</h1>
          <p className="mt-2 text-gray-600">Add fresh products before checkout.</p>
          <Link to="/" className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700">
            Shop products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-md bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
            <MdLockOutline className="text-xl text-green-600" />
            <h1 className="text-2xl font-bold text-gray-950">My Cart</h1>
          </div>

          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <h2 className="font-bold text-gray-950">{item.name}</h2>
                  <p className="mt-1 text-sm text-gray-500">Rs. {item.amount}</p>
                  <p className="mt-2 text-sm font-bold text-gray-900">Rs. {item.amount * item.quantity}</p>
                </div>
                <div className="flex h-10 items-center overflow-hidden rounded-md border border-gray-300">
                  <button className="h-full w-9 font-bold" type="button" onClick={() => removeFromCart(item.id)}>-</button>
                  <span className="min-w-10 text-center text-sm font-bold">{item.quantity}</span>
                  <button className="h-full w-9 font-bold" type="button" onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-md bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-950">Bill details</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div className="flex justify-between"><span>Subtotal</span><span>Rs. {subtotal}</span></div>
            <div className="flex justify-between"><span>Delivery fee</span><span>Rs. {deliveryFee}</span></div>
            <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-950">
              <span>Total</span><span>Rs. {total}</span>
            </div>
          </div>
          <Link to="/checkout" className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700">
            <MdLockOutline /> Checkout securely
          </Link>
        </aside>
      </div>
    </section>
  );
}
