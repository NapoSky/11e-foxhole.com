import { FC } from 'react';
import { useRouter } from 'next/router';
import { FR, GB, CN } from 'country-flag-icons/react/3x2'

const LanguageSwitcher: FC = () => {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(`/${lng}`);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('fr')} aria-label="Français" className="flex flex-col border-r border-white pr-2 items-center">
        <FR
          title="Français"
          className="w-5 h-5"
        />
        <span className="text-sm text-white">11eRC</span>
      </button>
      <button onClick={() => changeLanguage('en')} aria-label="English" className="flex flex-col border-r border-white pr-2 items-center">
        <GB
          title="English"
          className="w-5 h-5"
        />
        <span className="text-sm text-white">11eFL</span>
      </button>
      <button onClick={() => changeLanguage('cn')} aria-label="中文" className="flex flex-col items-center">
        <CN
          title="中文"
          className="w-5 h-5"
        />
        <span className="text-sm text-white">11eCN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
