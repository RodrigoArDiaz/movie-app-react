// LanguageSelector.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect } from 'react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleLanguageChange('en-US')}>English</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleLanguageChange('es-AR')}>Español</button>
    </div>
  );
};

export default LanguageSelector;
