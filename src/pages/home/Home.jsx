import React from 'react';
import '../home/Home'
import Navbar from '../../components/navbar/Navbar'
import Intro from '../../components/intro/Intro';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Intro/>
    </div>
  )
}

export default Home