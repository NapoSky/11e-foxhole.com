import classNames from "classnames";
import { FC, memo, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  sectionId: string; // Nous changeons le type ici pour string afin de prendre en charge les sections traduites
  sectionTitle?: string;
  noPadding?: boolean;
  className?: string;
}

const Section: FC<SectionProps> = memo(
  ({ children, sectionId, noPadding = false, className }) => {
    return (
      <section
        className={classNames(className, {
          "px-4 py-16 md:py-24 lg:px-8": !noPadding,
        })}
        id={sectionId}
      >
        <div className={classNames({ "mx-auto max-w-screen-lg": !noPadding })}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
