import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lng } = useParams(); // URL'deki dil parametresini alıyoruz

  const goToAboutPage = () => {
    navigate(`/${lng}/about`); // Dil parametresi ile yönlendirme yapıyoruz
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={goToAboutPage}>
        {t('aboutUs')}
      </button>
    </div>
  );
};

export default HomePage;
