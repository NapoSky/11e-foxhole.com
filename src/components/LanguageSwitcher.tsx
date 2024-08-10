import { FC } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';

const LanguageSwitcher: FC = () => {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng); // Change la langue via i18next
    const path = router.asPath.split('?')[0]; // Récupère l'URL actuelle

    // Met à jour l'URL pour inclure le paramètre de langue
    router.push(`${path}?lng=${lng}`, undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('cn')}>中文</button>
    </div>
  );
};

export default LanguageSwitcher;
