import React from 'react';
import { Link } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import useCart from '../hooks/useCart';

export default function CheckoutPage() {
  const { cart } = useCart();
  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((total, item) => total + item.amount * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">
        <form className="rounded-md bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
            <MdLockOutline className="text-xl text-green-600" />
            <h1 className="text-2xl font-bold text-gray-950">Checkout</h1>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="Full name" />
            <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="Phone number" />
            <input className="sm:col-span-2 rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="House no, building, street" />
            <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="City" />
            <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="Pincode" />
          </div>
        </form>

        <aside className="h-fit rounded-md bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-950">Order summary</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div className="flex justify-between"><span>Items</span><span>{cartItems.length}</span></div>
            <div className="flex justify-between"><span>Subtotal</span><span>Rs. {subtotal}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>Rs. {deliveryFee}</span></div>
            <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-950">
              <span>Total</span><span>Rs. {total}</span>
            </div>
          </div>
          <Link to="/payment" className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700">
            <MdLockOutline /> Continue to payment
          </Link>
        </aside>
      </div>
    </section>
  );
}
