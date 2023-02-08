import React from 'react';
import {Link} from "react-router-dom";
import car from '../../assets/image/8972b4027a714c091719a3b878079e46.jpg';

const Header = () => {
    return (
        <div className="h-[50px] bg-red-600 text-white container mx-auto py-[12px] px-4">
            <div className="w-[80%] mx-auto flex justify-between items-center">
                <div className="font-bold">
                    <img className="w-[30px] h-[20px]" src={car} alt="logo"/>
                </div>
                <nav>
                    <Link className="no-underline hover:underline mr-2" to="/">Home</Link>
                    <Link className="no-underline hover:underline" to="/generate-image">Generate Image</Link>
                </nav>
                <div>
                    <p className="hidden">Lorem ipsum dolor.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;