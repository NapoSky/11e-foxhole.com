import { FC } from 'react';
import { useRouter } from 'next/router';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher: FC = () => {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(`/${lng}`);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('fr')} aria-label="Français">
        <ReactCountryFlag
          alt="Français"
          countryCode="FR"
          svg
          className="w-8 h-8"
        />
      </button>
      <button onClick={() => changeLanguage('en')} aria-label="English">
        <ReactCountryFlag
          alt="English"
          countryCode="GB"
          svg
          className="w-8 h-8"
        />
      </button>
      <button onClick={() => changeLanguage('cn')} aria-label="中文">
        <ReactCountryFlag
          alt="中文"
          countryCode="CN"
          svg
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
