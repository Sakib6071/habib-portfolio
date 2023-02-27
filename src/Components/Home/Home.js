import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Home.css'

const Home = () => {
  return (
    <>
    {/* <div className="flex flex-col md:flex-row p-20">
      
      <div className="md:w-1/2 ">
      <div className='text-5xl font-bold flex justify-start items-center'>
      <p>I am</p>
      </div>
        <div className="text-5xl font-bold flex justify-start items-center">
          
        <TypeWriterEffect
        textStyle={{
          color: 'green',
          
        }}
        startDelay={2000}
        cursorColor="green"
        multiText={[
          'Habib Ullah',
          'Front End Developer',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={70}
      />
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={`https://i.ibb.co/bK0r7Kw/profile.jpg`}  alt="Profile" className="rounded-full border-2 p-4 border-green-500 w-1/2 flex items-center justify-center" />
      </div>
    </div> */}</>
    
  );
};

export default Home;
