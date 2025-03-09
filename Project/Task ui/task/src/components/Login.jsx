import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const Loginn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8000/user/login', formData);
      setSuccessMessage('Login successful!');
      console.log('Response:', response.data);

      if (response.data) {
        localStorage.setItem('id', response.data._id);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('age', response.data.age);

        navigate('/tasks');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Error during login');
      } else {
        setErrorMessage('Unable to connect to the server.');
      }
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">Welcome Back!</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl text-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">Login to Your Account</h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Login
        </button>

        <div className="mt-4 text-center text-gray-600">
          <p>
            New here?{' '}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition duration-200"
            >
              Register Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Loginn;
