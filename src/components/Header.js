// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight hover:text-blue-200 transition duration-300">
          My Portfolio
        </h1>
      
      </div>
    </header>
  );
};

export default Header;