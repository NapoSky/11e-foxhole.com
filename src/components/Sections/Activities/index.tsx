import { FC, memo } from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { getActivities, getSectionId } from "../../../data/data"; // Importez les fonctions au lieu des objets
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import ActivityItem from "./ActivityItem";
import activitiesImageFr from "../../../images/activities-background-fr.webp";
import activitiesImageEn from "../../../images/activities-background-en.webp";
import activitiesImageCn from "../../../images/activities-background-cn.webp";
import { useTranslation } from "react-i18next";

/**
 * Code required to factorize srcSet
 */
export const getBaseNameFromImport = (imagePath: string): string => {
  if (!imagePath || typeof imagePath !== "string") {
    return "";
  }
  const filename = imagePath.split("/").pop();
  return filename
    ? filename.replace(/-\d+\.webp$/, "").replace(/-(fr|en|cn)$/, "")
    : "";
};

export const sizes = [320, 640, 1280, 1920, 2560];

// Fonction pour extraire la locale du nom de fichier
const extractLocaleFromImagePath = (imagePath: string): string | null => {
  const match = imagePath.match(/-(fr|en|cn)(-\d+)?\.webp$/);
  return match ? match[1] : null; // Retourne la locale si trouvée, sinon null
};

// Fonction pour générer le srcSet en fonction du nom de base et de la locale
const generateSrcSet = (
  cleanBaseName: string,
  sizes: number[],
  locale: string | null,
): string => {
  if (locale) {
    return sizes
      .map((size) => `/images/${cleanBaseName}-${locale}-${size}.webp ${size}w`)
      .join(", ");
  }
  return sizes
    .map((size) => `/images/${cleanBaseName}-${size}.webp ${size}w`)
    .join(", ");
};

// Fonction pour obtenir le srcSet à partir d'une image
export const getSrcSetFromImage = (image: string): string => {
  const baseName = getBaseNameFromImport(image);
  const locale = extractLocaleFromImagePath(image);
  return generateSrcSet(baseName, sizes, locale);
};

// Fonction pour sélectionner l'image en fonction de la locale courante
export const selectImageByLocale = (locale: string): string => {
  switch (locale) {
    case "fr":
      return activitiesImageFr;
    case "en":
      return activitiesImageEn;
    case "cn":
      return activitiesImageCn;
    default:
      return activitiesImageFr; // Par défaut, retourner l'image en francais si la locale n'est pas supportée
  }
};

const Activities: FC = memo(() => {
  const { t, i18n } = useTranslation();
  const activites = getActivities(t);
  const SectionId = getSectionId(t);
  const locale = i18n.language; // Récupère la locale actuelle
  const selectedImage = selectImageByLocale(locale);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Activities}>
      <div className="relative flex flex-col">
        <div className="absolute h-full w-full flex items-center justify-center overflow-hidden">
          <ResponsiveImage
            alt={`activities-background-image`}
            className="object-contain max-w-full max-h-full opacity-20"
            src={selectedImage}
            srcSet={getSrcSetFromImage(selectedImage)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1440px) 50vw, (max-width: 1920px) 50vw, 100vw"
          />
        </div>
        <div className="z-10 flex flex-col divide-y-2 divide-neutral-300">
          {activites.map((activite) => (
            <ResumeSection title={activite.title} key={activite.title}>
              <ActivityItem item={activite} />
            </ResumeSection>
          ))}
        </div>
      </div>
    </Section>
  );
});

Activities.displayName = "Resume";
export default Activities;
