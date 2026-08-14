import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { apiRequest, saveStoredCustomer } from '../api';

export default function Loginpage( { setIsLoggedIn } ) {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.from?.pathname || '/';
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
          const data = await apiRequest(isRegistering ? '/customers/register' : '/customers/login', {
            method: 'POST',
            body: JSON.stringify(
              isRegistering
                ? formData
                : { email: formData.email, password: formData.password },
            ),
          });

          saveStoredCustomer(data.customer || data);
          setIsLoggedIn(true);
          toast.success(isRegistering ? 'Account created successfully!' : data.message || 'Login successful!');
          navigate(redirectPath, { replace: true });
        } catch (error) {
          toast.error(error.message || (isRegistering ? 'Account creation failed.' : 'Login failed. Please check your details.'));
        } finally {
          setLoading(false);
        }
      }

    const toggleMode = () => {
      setIsRegistering((current) => !current);
    };

  return (
    <div>
     <form className="mx-auto max-w-md rounded-lg
      bg-white p-8 shadow-md" onSubmit={handleAuth}>
        <h1 className="mb-5 text-center text-2xl font-bold text-gray-950">
          {isRegistering ? 'Create account' : 'Login'}
        </h1>

        {isRegistering && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Full name"
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="Email"
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
          placeholder="Password"
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"  
        />

        {isRegistering && (
          <>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="Phone number"
              className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="street-address"
              placeholder="Address"
              rows="3"
              className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
         
        >
          {loading ? (isRegistering ? 'Creating account...' : 'Logging in...') : (isRegistering ? 'Create account' : 'Login')}
        </button>

        <button
          type="button"
          onClick={toggleMode}
          className="mt-4 w-full text-sm font-semibold text-green-700 transition hover:text-green-900"
        >
          {isRegistering ? 'Already have an account? Login' : 'New user? Create an account'}
        </button>
      </form>
    </div>
  )
}
