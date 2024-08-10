import { FC, memo } from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { getActivities, getSectionId } from "../../../data/data"; // Importez les fonctions au lieu des objets
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import ActivityItem from "./ActivityItem";
import backgroundImage from "../../../images/activities-background.webp";
import { useTranslation } from 'react-i18next';

/**
 * Code required to factorize srcSet
 */
export const getBaseNameFromImport = (imagePath: string): string => {
  if (!imagePath || typeof imagePath !== 'string') {
    return '';
  }
  const filename = imagePath.split('/').pop();
  return filename ? filename.replace(/-\d+\.webp$/, '') : '';
};

export const sizes = [320, 640, 1280, 1920, 2560];

const generateSrcSet = (baseName: string, sizes: number[]): string => {
  return sizes.map(size => `/images/${baseName}-${size}.webp ${size}w`).join(", ");
};

const getSrcSetFromImage = (image: string): string => {
  const baseName = getBaseNameFromImport(image);
  return generateSrcSet(baseName, sizes);
};

const Activities: FC = memo(() => {
  const { t } = useTranslation();
  const activites = getActivities(t);
  const SectionId = getSectionId(t);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Activities}>
      <div className="relative flex flex-col">
        <div className="absolute h-full w-full flex items-center justify-center overflow-hidden">
          <ResponsiveImage
            alt={`activities-background-image`}
            className="object-contain max-w-full max-h-full opacity-20"
            src={backgroundImage}
            srcSet={getSrcSetFromImage(backgroundImage)}
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
