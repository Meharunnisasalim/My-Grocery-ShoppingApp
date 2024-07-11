import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ForgotPassword = () => {
    const [emailid, setEmailId] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleSubmmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${API_BASE_URL}/api/v1/auth/forgot-password`, {
            emailid,
            newpassword,
            answer
          });
    
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            
            navigate('/login');
            
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.error('Login Error:', error);
          toast.error('Something went wrong');
        }
      };

  return (
    
      <Layout title="Forgot-password Ecommerce App">
      <div className="form-container" style={{ minHeight: '90vh' }}>
        <form onSubmit={handleSubmmit}>
          <h1 className="title">Reset Password</h1>
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
              type="answer"
              className="form-control"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your Favourite Sports Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="newpassword"
              className="form-control"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
          
        </form>
      </div>
    </Layout>
  )
}
  

export default ForgotPassword
