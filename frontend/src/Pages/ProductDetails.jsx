import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fallbackProducts from '../data/products';
import useCart from '../hooks/useCart';
import { apiRequest, normalizeProduct } from '../api';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, getProductQuantity } = useCart();
  const [product, setProduct] = useState(() => fallbackProducts.find((item) => item.id === Number(id)));
  const [loading, setLoading] = useState(true);
  const cartQuantity = product ? getProductQuantity(product.id) : 0;

  useEffect(() => {
    let isMounted = true;

    apiRequest(`/products/${id}`)
      .then((data) => {
        if (isMounted) {
          setProduct(normalizeProduct(data));
        }
      })
      .catch(() => {
        if (isMounted) {
          setProduct(fallbackProducts.find((item) => item.id === Number(id)));
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const buyNow = () => {
    if (!product) return;
    if (cartQuantity === 0) {
      addToCart(product);
    }
    navigate('/cart');
  };

  if (!product && loading) {
    return (
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Loading product...</h1>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-3 text-gray-600">The product you are looking for is not available.</p>
          <Link to="/" className="mt-6 inline-block rounded-md bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-block text-sm font-semibold text-green-700 transition hover:text-green-900">
          Back to Products
        </Link>
        {loading && <p className="mb-4 text-sm font-semibold text-gray-500">Loading product...</p>}

        <div className="grid gap-10 rounded-md bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-md bg-gray-100">
            <img className="h-full min-h-80 w-full object-cover" src={product.image} alt={product.name} />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">{product.category}</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">{product.name}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">{product.quantity}</span>
              <span className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">{product.rating} Rating</span>
            </div>

            <p className="mt-6 text-3xl font-bold text-gray-900">Rs. {product.amount}</p>
            <p className="mt-5 text-base leading-7 text-gray-600">{product.details}</p>

            {cartQuantity > 0 && (
              <p className="mt-5 rounded-md bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800">
                Cart Quantity: {cartQuantity}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {cartQuantity > 0 ? (
                <div className="flex w-full items-center justify-between overflow-hidden rounded-md border border-gray-300 sm:w-auto">
                  <button
                    className="px-5 py-3 text-xl font-bold text-gray-900 transition hover:bg-gray-100"
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    -
                  </button>
                  <span className="min-w-14 px-4 text-center font-bold text-gray-900">{cartQuantity}</span>
                  <button
                    className="px-5 py-3 text-xl font-bold text-gray-900 transition hover:bg-gray-100"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
              <button
                type="button"
                onClick={buyNow}
                className="rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
