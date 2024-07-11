import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useAuth } from '../../context/auth';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
  const [emailid, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const authData = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!authData) {
    // Handle case where authData is undefined
    console.error('Auth data is undefined');
    return null; // Render nothing or handle fallback UI
  }
  //eslint-disable-next-line
  const [auth, setAuth] = authData; // Destructure auth and setAuth from authData
  const handleSubmmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, {
        emailid,
        password,
      });

      if (res && res.data.success) {
        // Update authentication state and localStorage on successful login
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || '/');
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Login Error:', error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title="Login Page">
      <div className="form-container" style={{ minHeight: '90vh' }}>
        <form onSubmit={handleSubmmit}>
          <h1 className="title">Login</h1>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={emailid}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className='d-flex flex-column'>
          <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
            Forgot password
          </button>
          <br/>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
