import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../Api/auth';
// import axios from 'axios';

export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
        setErrorMessage(""); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setErrorMessage(""); 
        setLoading(true); 

        try {
            const response = await loginApi(login)
            console.log("Login successful:", response);

            if (response?.status === 200) {
                alert("Login successful!");
                navigate("/dashboard"); 
                setLogin({ email: "", password: "" }); 
            } else if (response?.status === 401) {
                setErrorMessage("Invalid Email or Password!");
            } else if (response?.status === 400) {
                setErrorMessage("Please fill all fields.");
            }
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 400) {
                    setErrorMessage("Please fill all the fields.");
                } else if (status === 401) {
                    setErrorMessage("Password is incorrect.");
                } else {
                    setErrorMessage(`Error: ${error.response.data.message || 'Unknown error'}`);
                }
            } else if (error.request) {
                console.error("No response received:", error.request);
                setErrorMessage("Connection failed. Please try again.");
            } else {
                console.error("Error:", error.message);
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl text-center text-gray-900 font-semibold">Login</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={login.email}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={login.password}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                    <div className='text-center underline'>
                        <Link to={"/register"}>
                            <p>New Here?</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
