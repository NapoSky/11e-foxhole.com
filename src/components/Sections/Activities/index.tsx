import { FC, memo } from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { getActivities, getSectionId } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import ActivityItem from "./ActivityItem";
import activitiesImageFr from "../../../images/activities-background-fr.webp";
import activitiesImageEn from "../../../images/activities-background-en.webp";
import activitiesImageCn from "../../../images/activities-background-cn.webp";

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
      return activitiesImageFr;
  }
};

// Définition des props pour le composant Activities
type ActivitiesProps = {
  activities: ReturnType<typeof getActivities>; // Activités pré-générées
  sectionId: ReturnType<typeof getSectionId>; // Identifiant de la section pré-généré
  locale: string; // Locale courante
};

const Activities: FC<ActivitiesProps> = memo(
  ({ activities, sectionId, locale }) => {
    const selectedImage = selectImageByLocale(locale);

    return (
      <Section className="bg-neutral-100" sectionId={sectionId.Activities}>
        <div className="relative flex flex-col">
          <div className="absolute h-full w-full flex items-center justify-center overflow-hidden">
            <ResponsiveImage
              alt={`activities-background-image`}
              className="object-contain max-w-full max-h-full opacity-20"
              src={selectedImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1440px) 50vw, (max-width: 1920px) 50vw, 100vw"
            />
          </div>
          <div className="z-10 flex flex-col divide-y-2 divide-neutral-300">
            {activities.map((activity) => (
              <ResumeSection title={activity.title} key={activity.title}>
                <ActivityItem item={activity} />
              </ResumeSection>
            ))}
          </div>
        </div>
      </Section>
    );
  },
);

Activities.displayName = "Activities";
export default Activities;
