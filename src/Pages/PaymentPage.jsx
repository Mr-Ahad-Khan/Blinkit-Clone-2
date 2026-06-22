import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLockOutline, MdPayment } from 'react-icons/md';
import useCart from '../hooks/useCart';

export default function PaymentPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const total = Object.values(cart).reduce((sum, item) => sum + item.amount * item.quantity, 0) + 25;

  const handlePayment = (event) => {
    event.preventDefault();
    clearCart();
    toast.success('Payment successful!');
    navigate('/order-success', { replace: true });
  };

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-md bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
          <MdLockOutline className="text-xl text-green-600" />
          <h1 className="text-2xl font-bold text-gray-950">Secure Payment</h1>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handlePayment}>
          <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">
            Payable amount: Rs. {total}
          </div>
          <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="Card number" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="MM / YY" />
            <input className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="CVV" />
          </div>
          <button className="mt-2 flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700" type="submit">
            <MdPayment /> Pay now
          </button>
        </form>
      </div>
    </section>
  );
}
