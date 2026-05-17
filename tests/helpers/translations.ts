import frCommon from '../../src/locales/fr/common.json';
import enCommon from '../../src/locales/en/common.json';
import cnCommon from '../../src/locales/cn/common.json';

export const sectionIds = {
  fr: frCommon.homepage.sections,
  en: enCommon.homepage.sections,
  cn: cnCommon.homepage.sections,
} as const;

export const descriptionNames = {
  fr: frCommon.homepage.descriptionData.name,
  en: enCommon.homepage.descriptionData.name,
  cn: cnCommon.homepage.descriptionData.name,
} as const;

export const pageTitles = {
  fr: frCommon.homepage.meta.title,
  en: enCommon.homepage.meta.title,
  cn: cnCommon.homepage.meta.title,
} as const;
