import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../config';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const signup = async () => {
        if(email === "" || password === ""){
            return setMessage("Please fill all fields");
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
            setMessage(response.data.message); // Assuming backend sends message in response
            setEmail('');
            setPassword('');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An error occurred. Please try again later.');
            }
        }
        setLoading(false);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </div>
                {message && <p className='text-white text-center'>{message}</p>}
                <div>
                    <h2 className='text-white'>Don't have an account <Link className='text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup;