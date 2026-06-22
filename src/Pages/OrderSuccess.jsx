import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheckCircle, MdLockOutline } from 'react-icons/md';

export default function OrderSuccess() {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-md bg-white p-8 text-center shadow-sm">
        <MdCheckCircle className="mx-auto text-6xl text-green-600" />
        <h1 className="mt-4 text-3xl font-bold text-gray-950">Order placed successfully</h1>
        <p className="mt-3 text-gray-600">Your payment is complete and your groceries are being prepared.</p>
        <div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-2 rounded-md bg-green-50 px-4 py-3 text-sm font-bold text-green-800">
          <MdLockOutline /> Secure checkout completed
        </div>
        <Link to="/" className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700">
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
