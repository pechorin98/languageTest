import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import HomePage from '/src/pages/HomePage';
import AboutPage from '/src/pages/AboutPage';
import i18n from './i18n';

const App = () => {

  useEffect(() => {
    console.log(i18n.language);
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/:lng/*" element={<LanguageRoutes />} />
        <Route
          path="/"
          element={<Navigate to={`/${i18n.language}/`} replace />} // Tarayıcı diline göre yönlendirme yapıyoruz
        />
        <Route path="*" element={<Navigate to={`/${i18n.language}/`} replace />} />
      </Routes>
    </Router>
  );
};

const LanguageRoutes = () => {
  const { lng } = useParams();

  React.useEffect(() => {
    const preferredLanguage = lng || navigator.language.split('-')[0];
    if (['en', 'tr', 'de'].includes(preferredLanguage)) {
      i18n.changeLanguage(preferredLanguage); // Tarayıcı diline veya URL parametresine göre dil değiştir
    } else {
      i18n.changeLanguage('en');
    }
  }, [lng]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
    </Routes>
  );
};


export default App;
