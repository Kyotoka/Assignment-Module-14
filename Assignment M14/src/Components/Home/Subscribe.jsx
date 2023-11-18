import React from 'react';

const Subscribe = () => { 
    return (
        <>
            <div className="footer footer-center p-10 bg-blue-200 text-yellow-500 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <p className="text-lg uppercase font-semibold"> Subscribe</p>
                </nav>
                <aside>
                    <h1 className='text-2xl font-bold'>
                        Subscribe to get the latest <br /> news from us
                    </h1>
                    <p>Please drop your email below to get daily update</p>
                </aside>
                <nav>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-l-md p-2 border border-r-0 border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button className="bg-green-500 text-white rounded-r-md p-2">
                            Subscribe
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
    
};

export default Subscribe;