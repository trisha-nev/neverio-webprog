import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/userService';

const inputClasses = 
  'mt-2 w-full rounded-xl border-2 border-[#384355] bg-[#fDFDFD] px-4 py-3 text-sm text-[#384355] outline-none transition-all duration-200 placeholder:text-[#384355]/40 focus:bg-[#FCF886]/10 focus:shadow-[2px_2px_0px_0px_#384355]';

const actionButtonClassName = 'w-full py-3 mt-2';

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
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#384355] sm:text-4xl">Log In</h1>
      <p className="mt-3 text-xs leading-relaxed text-[#384355]/70">
        Access your vacation dashboard and manage your custom article listings.
      </p>

      {error && (
        <div className="mt-4 rounded-xl border-2 border-[#384355] bg-red-50 p-4 text-xs font-semibold text-red-600 shadow-[3px_3px_0px_0px_#384355]">
          {error}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
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
          <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
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
          <p className="mt-2 text-[10px] leading-relaxed text-[#384355]/60">
            Password must combine letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-xs">
          <label className="flex items-center gap-2 font-medium text-[#384355] cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-2 border-[#384355] bg-white accent-[#384355] cursor-pointer" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-bold text-[#384355] transition hover:text-[#384355]/70">
            Forgot Password?
          </button>
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className={actionButtonClassName} disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'Log In'}
          </Button>
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className="w-full py-2.5 text-[9px]">
            Google
          </Button>
          <Button type="button" variant="secondary" className="w-full py-2.5 text-[9px]">
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-[#384355]/10 pt-4 text-xs text-[#384355]/80">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-bold text-[#384355] underline hover:text-[#384355]/70">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;