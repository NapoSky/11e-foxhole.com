// src/utils/imageData.tsx

// Import statique de toutes les images
import headerImageFr from "../images/header-background-fr.webp";
import headerImageEn from "../images/header-background-en.webp";
import headerImageCn from "../images/header-background-cn.webp";

import formationImageFr from "../images/portfolio/formation-fr.webp";
import formationImageEn from "../images/portfolio/formation-en.webp";
import formationImageCn from "../images/portfolio/formation-cn.webp";

import artilleryImageFr from "../images/portfolio/artillery-fr.webp";
import artilleryImageEn from "../images/portfolio/artillery-en.webp";
import artilleryImageCn from "../images/portfolio/artillery-cn.webp";

import infiltrationImageFr from "../images/portfolio/infiltration-fr.webp";
import infiltrationImageEn from "../images/portfolio/infiltration-en.webp";
import infiltrationImageCn from "../images/portfolio/infiltration-cn.webp";

import battleshipImageFr from "../images/portfolio/battleship-fr.webp";
import battleshipImageEn from "../images/portfolio/battleship-en.webp";
import battleshipImageCn from "../images/portfolio/battleship-cn.webp";

import infanterieImageFr from "../images/portfolio/infanterie-fr.webp";
import infanterieImageEn from "../images/portfolio/infanterie-en.webp";
import infanterieImageCn from "../images/portfolio/infanterie-cn.webp";

import tankImageFr from "../images/portfolio/tank-fr.webp";
import tankImageEn from "../images/portfolio/tank-en.webp";
import tankImageCn from "../images/portfolio/tank-cn.webp";

import nukeImageFr from "../images/portfolio/nuke-fr.webp";
import nukeImageEn from "../images/portfolio/nuke-en.webp";
import nukeImageCn from "../images/portfolio/nuke-cn.webp";

// Exporter toutes les images dans une structure bien définie
export const imageMap = {
  header: {
    fr: headerImageFr,
    en: headerImageEn,
    cn: headerImageCn,
  },
  formation: {
    fr: formationImageFr,
    en: formationImageEn,
    cn: formationImageCn,
  },
  artillery: {
    fr: artilleryImageFr,
    en: artilleryImageEn,
    cn: artilleryImageCn,
  },
  infiltration: {
    fr: infiltrationImageFr,
    en: infiltrationImageEn,
    cn: infiltrationImageCn,
  },
  battleship: {
    fr: battleshipImageFr,
    en: battleshipImageEn,
    cn: battleshipImageCn,
  },
  infanterie: {
    fr: infanterieImageFr,
    en: infanterieImageEn,
    cn: infanterieImageCn,
  },
  tank: {
    fr: tankImageFr,
    en: tankImageEn,
    cn: tankImageCn,
  },
  nuke: {
    fr: nukeImageFr,
    en: nukeImageEn,
    cn: nukeImageCn,
  },
};
