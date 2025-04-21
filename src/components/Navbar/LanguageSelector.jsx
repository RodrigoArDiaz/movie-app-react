// LanguageSelector.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <div className="relative inline-block w-40">
            <select 
                onChange={(e) => handleLanguageChange(e.target.value)}
        
                defaultValue="en-US"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none w-full">
                <option value="en-US">English</option>
                <option value="es-AR">Español</option>
                {/* <option value="pt-BR">Português</option>
                <option value="it-ITA">Italiano</option>
                <option value="fr-FRA">Français</option>
                <option value="de-DEU">Deutsch</option> */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
            </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
