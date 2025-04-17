import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto para el idioma
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en-US'); // 'en' es el idioma por defecto

  useEffect(() => {
    // Cuando el idioma cambie, lo guardamos en localStorage
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useLanguage = () => useContext(LanguageContext);
