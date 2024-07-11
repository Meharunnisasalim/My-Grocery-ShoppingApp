import React from 'react'
import Layout from '../components/Layout/Layout'
import '../Styles/pages.css';

const About = () => {
  return (
    <Layout title="Exciting offers ,shop Now">
        <div className='about'>
        <img src='/images/about.jpeg' alt='aboutus'></img>
        <p className='mt-5'> Welcome to Fresh Cart, your go-to destination for farm-fresh goodness delivered straight to your door!

At Fresh Cart, we believe that everyone deserves access to the freshest, highest-quality produce, conveniently sourced and delivered with care. Our mission is simple: to bring the farmer's market experience directly to you, no matter where you are.

What sets Fresh Cart apart is our unwavering commitment to freshness and sustainability. We partner directly with local farmers and producers to ensure that every item in our inventory is picked at the peak of ripeness and delivered to you with minimal handling. By supporting local agriculture, we're not only delivering superior products but also contributing to the health of our communities and the planet.</p>
      </div>
    </Layout>
    
  )
}

export default About
