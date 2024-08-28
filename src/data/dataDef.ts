import { FC, ForwardRefExoticComponent, SVGProps } from "react";

import { IconProps } from "../components/Icon/Icon";

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: "summary" | "summary_large";
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Description section
 */
export interface Description {
  imageSrc: string;
  srcSet?: string;
  name: string;
  description: DescriptionText; // Change this line
  actions: DescriptionActionItem[];
}

export interface DescriptionText {
  greeting: string;
  hesitate: string;
  history: string;
  historyContent: string;
  community: string;
  communityContent: string;
  join: string;
  joinContent: string;
  recruiting: string;
}

interface DescriptionActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}

/**
 * Footer section
 */
export interface Footer {
  actions: FooterActionItem[];
}

interface FooterActionItem {
  href: string;
  text: string;
  primary?: boolean;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}

/**
 * Operation section
 */
export interface OperationItem {
  title: string;
  description: string;
  url?: string;
  image: string;
  srcSet?: string;
}

/**
 * Resume section
 */
export interface ActivityElement {
  title: string;
  content: string; // Change to string instead of JSX.Element
}

/**
 * Testimonial section
 */
export interface OfficerSection {
  imageSrc?: string | { src: string };
  officers: Officers[];
}

export interface Officers {
  image?: string;
  name: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: "Email",
  Phone: "Phone",
  Location: "Location",
  Github: "Github",
  LinkedIn: "LinkedIn",
  Facebook: "Facebook",
  Twitter: "Twitter",
  Instagram: "Instagram",
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon:
    | FC<IconProps>
    | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
