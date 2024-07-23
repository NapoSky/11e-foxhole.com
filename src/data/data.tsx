
import descriptionImage from '../images/header-background.webp';
import operationImage1 from '../images/portfolio/portfolio-1.jpg';
import operationImage2 from '../images/portfolio/portfolio-2.jpg';
import operationImage3 from '../images/portfolio/portfolio-3.jpg';
import operationImage4 from '../images/portfolio/portfolio-4.jpg';
import operationImage5 from '../images/portfolio/portfolio-5.jpg';
import operationImage6 from '../images/portfolio/portfolio-6.jpg';
import operationImage7 from '../images/portfolio/portfolio-7.jpg';
import operationImage8 from '../images/portfolio/portfolio-8.jpg';
import operationImage9 from '../images/portfolio/portfolio-9.jpg';
import operationImage10 from '../images/portfolio/portfolio-10.jpg';
import operationImage11 from '../images/portfolio/portfolio-11.jpg';
import officerBackgroundImage from '../images/officer_background.webp';
import DiscordIcon from '../components/Icon/DiscordIcon';
import YoutubeIcon from '../components/Icon/YoutubeIcon';
import {
  Description,
  HomepageMeta,
  OperationItem,
  OfficerSection,
  Footer,
  ActivityElement,
  Social
} from './dataDef';



/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: '11e Foxhole - A Foxhole Brigade Community',
  description: "11e Foxhole is a Foxhole brigade community. We are a group of players who enjoy playing Foxhole together.",
};

/**
 * Section definition
 */
export const SectionId = {
  Description: 'Le Régiment',
  Opérations: 'Les Opérations',
  Activities: 'Les Activités',
  Skills: 'skills',
  Stats: 'stats',
  Officers: 'Les Officiers',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Description section
 */
export const descriptionData: Description = {
  imageSrc: descriptionImage,
  name: `11ème Régiment de Bozos`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://www.youtube.com/@11emeregimentdecallahan16',
      text: 'Chaîne Youtube',
      primary: true
    },
    {
      href: 'https://discord.gg/11e',
      text: 'Rejoindre le discord',
      primary: true
    }
  ],

};

/**
 * Footer section
 */

export const footerData: Footer = {
  actions: [
    {
      href: 'https://www.youtube.com/@11emeregimentdecallahan16',
      text: 'Chaîne Youtube',
      primary: true
    },
    {
      href: 'https://discord.gg/11e',
      text: 'Rejoindre le discord',
      primary: true
    }
  ],

};

/**
 * Operations section
 */
export const operationItems: OperationItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage11,
  },
];

/**
 * Activities section -- TODO: Standardize resume contact format or offer MDX
 */
export const activites : ActivityElement[] = [
  {
    title : "Front",
    content : <p>Des membres peuvent s’organiser pour agir efficacement sur un front. C’est un rôle souvent notifié lors d'invasions de secteurs alliés ou ennemis.</p>
  },
  {
    title : "Construction",
    content : <p>Les actions de construction ont pour but de renforcer une position, qu’elle appartienne au 11eRC-FL, à un autre régiment ou à la faction entière.</p>
  },
  {
    title : "Logistique",
    content : <p>La logistique est largement sollicitée lors de la planification d’opérations ou pour déplacer du matériel en fonction des besoins du régiment.</p>
  },
  {
    title : "Farming",
    content : <p>Organisées en arrière-ligne, les actions de « farm » répondent souvent à un besoin du régiment de refaire ses stocks ou de bétonner une base par exemple.</p>
  },
  {
    title : "QRF",
    content : <p>Le rôle QRF (Quick Response Force) est utilisé pour former une escouade en urgence afin de répondre à une attaque ou une action de sabotage ennemie.</p>
  },
  {
    title : "Partisanat",
    content : <p>Le partisanat correspond aux actions de sabotage derrière les lignes ennemies, pour détruire des infrastructures vitales ou couper des lignes de logistique.</p>
  },
  {
    title : "Complexes Industriels",
    content : <p>Je suis le texte pour les complexes industriels</p>
  },
  {
    title : "Patrouille",
    content : <p>Ce rôle permet d'effectuer des actions de maintien de l’ordre, de surveillance ou de garde d’atouts pour la faction (complexes, pas de tir de fusée...).</p>
  },
  {
    title : "Naval",
    content : <p>Je suis le texte pour le naval</p>
  },
];

/**
 * Officer section
 */
export const officer: OfficerSection = {
  imageSrc: officerBackgroundImage,
  officers: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Discord', Icon: DiscordIcon, href: 'https://discord.gg/11e'},
  {label: 'Youtube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@11emeregimentdecallahan16'},
];