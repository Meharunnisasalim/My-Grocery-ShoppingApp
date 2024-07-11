import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Profile = () => {
  
  //context
  const [auth,setAuth]=useAuth()

  //state
  const [username,setUserName]=useState("");
  const [emailid,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const [shippingaddress,setShippingAddress]=useState("");

  //get user data
  useEffect(()=>{
    const {emailid,username,shippingaddress}=auth?.user
    setUserName(username)
    setEmailId(emailid)
    setShippingAddress(shippingaddress)
  },[auth?.user])

// form function
const handleSubmmit=async(e)=>{
  e.preventDefault()
  try {
    const {data}=await axios.put(`${API_BASE_URL}/api/v1/auth/profile`,
    {username,emailid,password,shippingaddress});
  if(data?.error){
    toast.error(data?.error)
  }else{
    setAuth({...auth,user:data?.updatedUser})
    let ls=localStorage.getItem("auth")
    ls=JSON.parse(ls)
    ls.user=data.updatedUser;
    localStorage.setItem("auth",JSON.stringify(ls));
    toast.success("Profile updates successfully");
  }
  } catch (error) {
    console.log(error)
    toast.error('Something went wrong')
  }
};

  return (
    <Layout title='Your Profile'>
    <div className='container-fluid m-5 p-3 dashboard'>
  <div className='row'>
    <div className='col-md-3'> 
    <UserMenu/>
     </div>
    <div className='col-md-8'> 
    <div className='form-container' style={{marginTop:"-40px"}} >
      <form  onSubmit={handleSubmmit}>
      <h4 className='title'>USER PROFILE</h4>
  <div className="mb-3">
  <input type="text" className="form-control" 
     value={username}
     onChange={(e)=>setUserName(e.target.value)}
     placeholder='Enter your name'
     id="exampleInputUsername"  autoFocus/>
     </div>

    <div className="mb-3">
    <input type="email" className="form-control"
    value={emailid}
    onChange={(e)=>setEmailId(e.target.value)}
    placeholder='Enter your email-id'
     id="exampleInputEmail1" 
      disabled/>
  </div>

  <div className="mb-3">
    <input type="password" className="form-control"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='Enter your  Password' id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <input type="text" className="form-control"
    value={shippingaddress}
    onChange={(e)=>setShippingAddress(e.target.value)}
    placeholder='Enter your Shipping address' 
    id="exampleInputShippingAddress" />
  </div>

  <button type="submit" className="btn btn-primary">UPDATE</button>
</form>

      </div>
     </div>
  </div>
  </div>
  </Layout>
  )
};

export default Profile;
