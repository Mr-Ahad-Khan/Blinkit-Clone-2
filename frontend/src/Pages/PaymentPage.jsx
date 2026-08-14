import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLockOutline, MdPayment } from 'react-icons/md';
import useCart from '../hooks/useCart';
import { apiRequest, CHECKOUT_STORAGE_KEY, readStoredCustomer } from '../api';

export default function PaymentPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((sum, item) => sum + item.amount * item.quantity, 0);
  const total = subtotal + (subtotal > 0 ? 25 : 0);

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handlePayment = async (event) => {
    event.preventDefault();
    const customer = readStoredCustomer();

    if (!customer?.id) {
      toast.error('Please login again before payment.');
      navigate('/login', { state: { from: { pathname: '/payment' } } });
      return;
    }

    setLoading(true);

    try {
      const checkoutDetails = JSON.parse(localStorage.getItem(CHECKOUT_STORAGE_KEY) || '{}');
      if (checkoutDetails.phone || checkoutDetails.address || checkoutDetails.city || checkoutDetails.pincode) {
        await apiRequest(`/customers/${customer.id}`, {
          method: 'PUT',
          body: JSON.stringify({
            phone: checkoutDetails.phone,
            address: [checkoutDetails.address, checkoutDetails.city, checkoutDetails.pincode].filter(Boolean).join(', '),
          }),
        });
      }

      const orders = await Promise.all(
        cartItems.map((item) =>
          apiRequest('/orders/register', {
            method: 'POST',
            body: JSON.stringify({
              customerId: customer.id,
              productId: item.id,
              quantity: item.quantity,
            }),
          }),
        ),
      );

      await Promise.all(
        orders.map((order, index) =>
          apiRequest('/payments', {
            method: 'POST',
            body: JSON.stringify({
              orderId: order.id,
              amount: cartItems[index].amount * cartItems[index].quantity + (index === 0 ? 25 : 0),
              paymentMethod: 'card',
              paymentStatus: 'success',
              transactionId: `WEB-${Date.now()}-${order.id}`,
            }),
          }),
        ),
      );

      clearCart();
      localStorage.removeItem(CHECKOUT_STORAGE_KEY);
      toast.success('Payment successful!');
      navigate('/order-success', { replace: true, state: { orderCount: orders.length, total } });
    } catch (error) {
      toast.error(error.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
          <input required inputMode="numeric" autoComplete="cc-number" className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="Card number" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input required autoComplete="cc-exp" className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="MM / YY" />
            <input required inputMode="numeric" autoComplete="cc-csc" className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" placeholder="CVV" />
          </div>
          <button disabled={loading} className="mt-2 flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400" type="submit">
            <MdPayment /> {loading ? 'Processing...' : 'Pay now'}
          </button>
        </form>
      </div>
    </section>
  );
}
