import React from 'react';
import Subscribe from '../Components/Home/Subscribe';
import NavBar from './NavBar';
import Testimonial from '../Components/Testimonials/Testimonial';

const TestimonialsPage = () => {
    return (
        <NavBar>
            <div className='p-16 bg-blue-200'>
                <h1 className='text-xl font-bold text-yellow-500'>Testimonial List</h1>
                <p className='font-semibold my-4 text-yellow-500'>{'Home  > '} <span className='text-green-400'>TestimonialList</span> </p>
            </div>
            <Testimonial/>
            <Subscribe/>
        </NavBar>
    );    
};

export default TestimonialsPage;