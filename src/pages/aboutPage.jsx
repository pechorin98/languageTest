import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';  // useTranslation hook'unu ekliyoruz

const AboutPage = () => {
  const { t } = useTranslation();  // useTranslation hook'unu kullanıyoruz

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('aboutPageTitle')}</title>  {/* Çeviriyi kullanarak başlığı güncelliyoruz */}
        <meta name="description" content={t('aboutPageDescription')} />  {/* Çeviriyi kullanarak meta açıklamasını güncelliyoruz */}
      </Helmet>
      <div>
        <h1>{t('aboutUs')}</h1>  {/* Çeviriyi kullanarak başlığı güncelliyoruz */}
        <p>{t('aboutDescription')}</p>  {/* Çeviriyi kullanarak açıklamayı güncelliyoruz */}
      </div>
    </HelmetProvider>
  );
};

export default AboutPage;
