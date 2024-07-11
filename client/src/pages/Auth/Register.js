import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import '../../Styles/pages.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Authstyles.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Register = () => {
 
  const [username,setUserName]=useState("");
  const [emailid,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const [shippingaddress,setShippingAddress]=useState("");
  const [answer,setAnswer]=useState("");
  const navigate=useNavigate();

  // form function
    const handleSubmmit=async(e)=>{
      e.preventDefault()
      try {
        const res=await axios.post(`${API_BASE_URL}/api/v1/auth/register`,
        {username,emailid,password,shippingaddress,answer});

        if(res && res.data.success){
          toast.success(res.data && res.data.message);
          navigate('/login');
        }else{
        toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
      }
    };

  return (
    <Layout title="Register the user">
      <div className='form-container' style={{minHeight:"90vh"}} >
      <form  onSubmit={handleSubmmit}>
      <h1 className='title'>Register Page</h1>
  <div className="mb-3">
  <input type="text" className="form-control" 
     value={username}
     onChange={(e)=>setUserName(e.target.value)}
     placeholder='username'
     id="exampleInputUsername"  required/>
     </div>

    <div className="mb-3">
    <input type="email" className="form-control"
    value={emailid}
    onChange={(e)=>setEmailId(e.target.value)}
    placeholder='email-id'
     id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>

  <div className="mb-3">
    <input type="password" className="form-control"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='Password' id="exampleInputPassword1" required />
  </div>

  <div className="mb-3">
    <input type="textarea" className="form-control"
    value={shippingaddress}
    onChange={(e)=>setShippingAddress(e.target.value)}
    placeholder='Shipping address' id="exampleInputShippingAddress" required />
  </div>

  <div className="mb-3">
    <input type="text" className="form-control"
    value={answer}
    onChange={(e)=>setAnswer(e.target.value)}
    placeholder='What is your favourite sports' id="exampleInputAnswer" required/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
       
    </Layout>
  );
}

export default Register;
