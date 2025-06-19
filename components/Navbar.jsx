import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-transparent text-white px-6 py-4 fixed w-full top-0 z-50 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <span className="text-orange-500">TRAVEL</span> PROFESSOR
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#destinations" className="hover:text-orange-500 transition-colors">Destinations</a>
                    <a href="#packages" className="hover:text-orange-500 transition-colors">Packages</a>
                    <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
                    <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-4">
                    <a href="#destinations" className="block py-2 hover:text-orange-500">Destinations</a>
                    <a href="#packages" className="block py-2 hover:text-orange-500">Packages</a>
                    <a href="#about" className="block py-2 hover:text-orange-500">About Us</a>
                    <a href="#contact" className="block py-2 hover:text-orange-500">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
