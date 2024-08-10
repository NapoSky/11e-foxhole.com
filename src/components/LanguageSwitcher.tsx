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
          countryCode="FR"
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
        />
      </button>
      <button onClick={() => changeLanguage('en')} aria-label="English">
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
        />
      </button>
      <button onClick={() => changeLanguage('cn')} aria-label="中文">
        <ReactCountryFlag
          countryCode="CN"
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
