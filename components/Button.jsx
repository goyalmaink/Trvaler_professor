import React from 'react';


const Button = ({ size = 'md', onClick, children, className = '', variant = 'primary', ...props }) => {
    const baseClasses = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2';
    
    const variants = {
        primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl',
        secondary: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
        outline: 'border border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };
    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );

}
export default Button;