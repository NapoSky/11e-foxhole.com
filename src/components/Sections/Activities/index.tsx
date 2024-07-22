import {FC, memo} from 'react';

import {front, construction, logistique, farming, qrf, partisan, facility, patrouille, naval, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import ActivityItem from './ActivityItem';

const Activities: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Activities}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Front">
          {front.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Construction">
          {construction.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Logistique">
          {logistique.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Farming">
          {farming.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="QRF">
          {qrf.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Partisan">
          {partisan.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Complexes Industriels">
          {facility.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Patrouille">
          {patrouille.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Naval">
          {naval.map((item) => (
            <ActivityItem item={item}/>
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Activities.displayName = 'Resume';
export default Activities;
