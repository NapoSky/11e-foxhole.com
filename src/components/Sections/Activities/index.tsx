import { FC, memo } from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { activites, SectionId } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import ActivityItem from "./ActivityItem";
import backgroundImage from "../../../images/activities-background.webp";

const Activities: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Activities}>
      <div className="relative flex flex-col">
        <div className="absolute h-full w-full flex items-center">
          <ResponsiveImage
            alt={`activities-background-image`}
            className="object-contain opacity-20"
            src={backgroundImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1920px) 75vw, 100vw"
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
