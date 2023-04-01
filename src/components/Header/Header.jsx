import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                <div className="header flex justify-between p-4 lg:px-12 lg:py-5 bg-slate-200">
                    <div className="navbar-brand">
                        <h1 className='text-3xl font-semibold'>Knowledge-Cafe</h1>
                    </div>
                    <div className="user-profile w-10">
                        <img className='rounded-full' src="https://www.linkpicture.com/q/20221230_222604.jpg" alt="Shahriar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;