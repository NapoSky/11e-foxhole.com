import {FC, memo} from 'react';

import {activites, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import ActivityItem from './ActivityItem';

const Activities: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Activities}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        {activites.map((activite) => (
          <ResumeSection title={activite.title}>
            <ActivityItem item={activite} key={activite.title}/>
          </ResumeSection>
        ))}
      </div>
    </Section>
  );
});

Activities.displayName = 'Resume';
export default Activities;
