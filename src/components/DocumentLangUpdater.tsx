import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const DocumentLangUpdater = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Mapping exclusif pour l'attribut documentElement.lang
    const langMapping: { [key: string]: string } = {
      fr: "fr",
      en: "en",
      cn: "zh-Hans",
    };

    // Récupère la valeur BCP 47 correspondante
    const htmlLang = langMapping[i18n.language] || "en";

    // Met à jour l'attribut lang du document HTML
    document.documentElement.lang = htmlLang;
  }, [i18n.language]);

  return null; // Le composant ne rend rien
};

export default DocumentLangUpdater;
