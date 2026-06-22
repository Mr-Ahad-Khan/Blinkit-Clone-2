import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import useCart from '../hooks/useCart';

export default function ProductCards() {
  const { addToCart, removeFromCart, getProductQuantity } = useCart();

  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((card) => {
            const cartQuantity = getProductQuantity(card.id);

            return (
              <div key={card.id} className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Link to={`/products/${card.id}`}>
                  <img className="h-52 w-full object-cover" src={card.image} alt={card.name} />
                </Link>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                    <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">{card.quantity}</span>
                  </div>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">{card.description}</p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-xl font-bold text-gray-900">Rs. {card.amount}</p>
                    {cartQuantity > 0 ? (
                      <div className="flex h-10 items-center overflow-hidden rounded-md border border-gray-300">
                        <button
                          className="h-full w-9 text-lg font-bold text-gray-900 transition hover:bg-gray-100"
                          type="button"
                          onClick={() => removeFromCart(card.id)}
                        >
                          -
                        </button>
                        <span className="min-w-10 px-2 text-center text-sm font-bold text-gray-900">{cartQuantity}</span>
                        <button
                          className="h-full w-9 text-lg font-bold text-gray-900 transition hover:bg-gray-100"
                          type="button"
                          onClick={() => addToCart(card)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="h-10 rounded-md bg-gray-900 px-4 text-sm font-semibold text-white transition hover:bg-gray-700"
                        type="button"
                        onClick={() => addToCart(card)}
                      >
                        ADD
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
