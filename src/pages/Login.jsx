import React from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
     const { loginWithGoogle } = useAuth();
    



  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gray-900 text-white'>
      <h1 className='text-lg font-bold font-Lato tracking-wide text-green-600'>AI-DASHBOARD</h1>
        <button onClick={loginWithGoogle}
          className='px-6 py-3 text-lg bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600'
        >
            Sign in with Google
        </button>
      
    </div>
  )
}

export default Login
