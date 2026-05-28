import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import constants from '../../constants';
import Button from '../../components/Button';

// Added missing style strings here:
const inputClasses = 
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

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

      // Notice this matches your Layout rule fix from earlier! It registers the property as 'role'
      localStorage.setItem('user', JSON.stringify({ firstName, role, token }));

      // Redirect based on role
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
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account with the same monochrome layout pattern and shared button treatment.
      </p>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
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
            <label htmlFor="lastName" className="text-sm font-medium text-zinc-700">
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="username" className="text-sm font-medium text-zinc-700">
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
            <label htmlFor="contactNumber" className="text-sm font-medium text-zinc-700">
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className="text-sm font-medium text-zinc-700">
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
            <label htmlFor="gender" className="text-sm font-medium text-zinc-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              disabled={isLoading}
              className={`${inputClasses} appearance-none bg-zinc-100`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="address" className="text-sm font-medium text-zinc-700">
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
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
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
          <label htmlFor="password" className="text-sm font-medium text-zinc-700">
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
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with at least 8 characters.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName} disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName} disabled={isLoading}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName} disabled={isLoading}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;