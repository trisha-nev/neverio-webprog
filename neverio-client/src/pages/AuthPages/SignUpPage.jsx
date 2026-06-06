import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import constants from '../../constants';
import Button from '../../components/Button';

const inputClasses = 
  'mt-2 w-full rounded-xl border-2 border-[#384355] bg-[#fDFDFD] px-4 py-3 text-sm text-[#384355] outline-none transition-all duration-200 placeholder:text-[#384355]/40 focus:bg-[#FCF886]/10 focus:shadow-[2px_2px_0px_0px_#384355]';

const actionButtonClassName = 'w-full py-3 mt-2';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${constants.HOST}/users/register`, formData);
      const { token, firstName, role } = response.data;

      localStorage.setItem('user', JSON.stringify({ firstName, role, token }));

      if (role === 'viewer') {
        navigate('/articles');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Validation failed. Please fill all fields.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#384355] sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-xs leading-relaxed text-[#384355]/70">
        Create a new account to plan your travels and publish custom articles.
      </p>

      {error && (
        <div className="mt-4 rounded-xl border-2 border-[#384355] bg-red-50 p-4 text-xs font-semibold text-red-600 shadow-[3px_3px_0px_0px_#384355]">
          {error}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Juan"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Dela Cruz"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="username" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="juandelacruz"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
              Contact Number
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="text"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="e.g. 09123456789"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="25"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="gender" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              disabled={isLoading}
              className={`${inputClasses} bg-[#fDFDFD] cursor-pointer`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="Quezon City, Metro Manila"
            disabled={isLoading}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#384355]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
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
            required
            minLength={8}
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            disabled={isLoading}
            className={inputClasses}
          />
          <p className="mt-2 text-[10px] leading-relaxed text-[#384355]/60">
            Password must be at least 8 characters.
          </p>
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className={actionButtonClassName} disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
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
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-bold text-[#384355] underline hover:text-[#384355]/70">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;