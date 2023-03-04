
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 custom-bg text-white p-5 md:p-20'>
            <div>
                <p className='text-4xl font-semibold my-5 text-green-400 border-l-8 pl-5 border-green-400 inline-block'>About Me</p>
                <p className=' text-justify text-xl mt-5'>Hi there! My name is Habib Ullah, and I am a front end developer. I work in this field from 2020. I have a Bsc. in CSE degree from Green University Of Bangladesh, and I am constantly seeking to expand my knowledge and skills through ongoing education and training.</p>
            </div>
            <div>
                <p className='text-4xl font-semibold my-5 text-green-400 border-l-8 pl-5 border-green-400 inline-block'>Skills</p>
                <div className='flex gap-16 flex-wrap mt-5'>
                    <div className=' p-4 relative custom-shadow image-container'>
                        <img width={'50px'} src={'https://i.ibb.co/qD8fkxd/html-5.png'} alt="" />
                        <p className='overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 '><span className='inner-item'>HTML5</span></p>
                    </div>
                    <div className='p-4 relative custom-shadow image-container '>
                        <img width={'50px'} src={'https://i.ibb.co/ZxtKGvJ/css-3.png'} alt="" />
                        <p className='overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 '><span className='inner-item'>CSS3</span></p>
                    </div>
                    <div className='p-4 relative custom-shadow image-container '>
                        <img width={'50px'} src={'https://i.ibb.co/FzQzg0Z/bootstrap.png'} alt="" />
                        <p className='overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 '><span className='inner-item'>Bootstrap5</span></p>
                    </div>
                    <div className='p-4 relative custom-shadow image-container '>
                        <img width={'50px'} src={'https://i.ibb.co/vZm7Scd/Tailwind-CSS-Logo-svg.png'} alt="" />
                        <p className='overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 '><span className='inner-item'>Tailwind</span></p>
                    </div>
                    <div className='p-4 relative custom-shadow image-container '>
                        <img width={'50px'} src={'https://i.ibb.co/7ynK6Gw/js.png'} alt="" />
                        <p className='overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 '><span className='inner-item'>JavaScript</span></p>
                    </div>
                    <div className='p-4 relative custom-shadow image-container '>
                        <img width={'50px'} src={'https://i.ibb.co/mNZ3ZPQ/physics.png'} alt="" />
                        <p className='overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 '><span className='inner-item'>React</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;