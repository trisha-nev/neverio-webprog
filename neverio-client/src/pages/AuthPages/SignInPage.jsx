import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses = 
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/userService';

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await loginUser(formData);
      const { token, firstName, role } = response.data;

      // Block viewers from entering the workspace
      if (role === 'viewer') {
        setError('Viewers are not permitted to access the dashboard.');
        setIsLoading(false);
        return;
      }

      const userData = { firstName, role, token };
      localStorage.setItem('user', JSON.stringify(userData));

      navigate('/dashboard', { state: userData });
    } catch (err) {
      const message = err.response?.data?.message || 'An error occurred during login. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your account using the same monochrome wireframe language used across the site.
      </p>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            autoComplete="email"
            required
            disabled={isLoading}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            autoComplete="current-password"
            required
            disabled={isLoading}
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-zinc-900" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-zinc-700 transition hover:text-zinc-900">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName} disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Log In'}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName} disabled={isLoading}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName} disabled={isLoading}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;