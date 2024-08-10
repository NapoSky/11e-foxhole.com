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
    "-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100";
  const activeClass = classNames(baseClass, "text-orange-500");
  const inactiveClass = classNames(baseClass, "text-neutral-100");
  return (
    <header
      className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
      id={headerID}
    >
      <nav className="flex justify-center gap-x-8">
        {navSections.map((section) => (
          <NavItem
            activeClass={activeClass}
            current={section === currentSection}
            inactiveClass={inactiveClass}
            key={section}
            section={section}
          />
        ))}
      </nav>
    </header>
  );
};

const MobileNav: FC<NavProps> = memo(({ navSections, currentSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    "p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
  const activeClass = classNames(
    baseClass,
    "bg-neutral-900 text-white font-bold"
  );
  const inactiveClass = classNames(baseClass, "text-neutral-200 font-medium");
  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
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
          <div className="fixed inset-0 bg-stone-900 z-50 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <nav className="w-2/4 fixed inset-y-0 left-0 z-50 flex flex-col gap-y-2 p-4 bg-stone-800">
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