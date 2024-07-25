import { FC, memo } from "react";
import Image from "next/image";
import { activites, SectionId } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import ActivityItem from "./ActivityItem";
import backgroundImage from "../../../images/activities-background.webp";

const Activities: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Activities}>
      <div className="relative flex flex-col">
        <div className="absolute z-0 h-full w-full flex justify-center items-center">
          <Image
            alt={`activities-background-image`}
            className="object-contain opacity-20 fill"
            placeholder="blur"
            priority
            src={backgroundImage}
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
