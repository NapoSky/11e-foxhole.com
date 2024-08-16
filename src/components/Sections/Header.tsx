import { Transition, TransitionChild } from "@headlessui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useTranslation } from 'react-i18next';
import classNames from "classnames";
import Link from "next/link";
import {
  FC,
  Fragment,
  memo,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";

import { getSectionId } from "../../data/data"; 
import { useNavObserver } from "../../hooks/useNavObserver";
import LanguageSwitcher from "../LanguageSwitcher";
export const headerID = "headerNav";

const HeaderClient: FC = () => {
  const { t, i18n } = useTranslation(); // Ajout de i18n pour forcer le re-render
  const sectionId = getSectionId(t);

  // Utiliser useEffect pour forcer le re-rendu lors du changement de langue
  useEffect(() => {
    const handleLanguageChange = () => {
      // Forcer un re-render en changeant une clé unique ou un state
    };
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
  const [currentSection, setCurrentSection] = useState<keyof typeof sectionId | null>(null);

  const navSections = useMemo(
    () => [sectionId.Description, sectionId.Activities, sectionId.Operations],
    [sectionId]
  );

  const intersectionHandler = useCallback((section: string | null) => {
    setCurrentSection(section as keyof typeof sectionId | null);
  }, [sectionId]);

  useNavObserver(
    navSections.map((section) => `#${section}`).join(","),
    intersectionHandler
  );

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
};

interface NavProps {
  navSections: string[];
  currentSection: string | null;
}

const DesktopNav: FC<NavProps> = ({ navSections, currentSection }) => {
  const baseClass =
    "-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-grey-500 sm:hover:text-grey-500 text-neutral-100";
  const activeClass = classNames(baseClass, "text-orange-500");
  const inactiveClass = classNames(baseClass, "text-neutral-100");

  return (
    <header
      className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
      id={headerID}
    >
      <nav className="relative flex justify-between items-center">
        {/* Section centrée */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center gap-x-8">
            {navSections.map((section) => (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                section={section}
              />
            ))}
          </div>
        </div>
        {/* LanguageSwitcher à droite */}
        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};


const MobileNav: FC<NavProps> = memo(({ navSections, currentSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const baseClass =
    "p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500";
  const activeClass = classNames(
    baseClass,
    "bg-neutral-900 text-white font-bold"
  );
  const inactiveClass = classNames(baseClass, "text-neutral-200 font-medium");

  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed top-2 right-2 z-40 rounded-full bg-gray-500 bg-opacity-50 p-3 ring-offset-gray-800/60 hover:bg-gray-400 hover:bg-opacity-50 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}
      >
        <Bars3BottomRightIcon className="h-8 w-8 text-white" />
        <span className="sr-only">Open sidebar</span>
      </button>
      <Transition as={Fragment} show={isOpen}>
        <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Ajout du gestionnaire de clic pour fermer le menu */}
          <div
            className="fixed inset-0 bg-stone-900 z-50 bg-opacity-40"
            onClick={closeMenu}
          />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="-translate-x-full"
        >
          <nav
            className="w-2/4 fixed z-50 flex flex-col gap-y-2 p-4 bg-stone-800 bg-opacity-90"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture du menu lors du clic à l'intérieur
          >
            {/* Mini Header au-dessus des sections */}
            <div>
              <h2 className="text-white text-l font-bold">11e-Foxhole.com</h2>
            <hr className="border-t border-white mt-2" />
            </div>
            {navSections.map((section) => (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                onClick={toggleOpen}
                section={section}
              />
            ))}
            {/* LanguageSwitcher en dessous des sections du menu */}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </TransitionChild>
      </Transition>
    </>
  );
});



const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({ section, current, inactiveClass, activeClass, onClick }) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}
    >
      {section}
    </Link>
  );
});

export default HeaderClient;