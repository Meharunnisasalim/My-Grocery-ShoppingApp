import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout title='Dashboard - Ecommerce App'>
        <div className='container-fluid m-5 p-3 dashboard'>
      <div className='row'>
        <div className='col-md-3'> 
        <UserMenu/>
         </div>
        <div className='col-md-9'> 
        <div className='card w-75 p-3'>
        <h3>{auth?.user?.username}</h3>
        <h3>{auth?.user?.emailid}</h3>
        <h3>{auth?.user?.shippingaddress}</h3>
         </div>
      </div>
      </div>
      </div>
      </Layout>
  )
}

export default Dashboard
