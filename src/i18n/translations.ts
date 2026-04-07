import { nav } from './sections/nav';
import { header } from './sections/header';
import { summary } from './sections/summary';
import { experience } from './sections/experience';
import { skills } from './sections/skills';
import { education } from './sections/education';
import { certifications } from './sections/certifications';
import { languages } from './sections/languages';
import { footer } from './sections/footer';

export const translations = {
  es: {
    nav: nav.es,
    header: header.es,
    summary: summary.es,
    experience: experience.es,
    skills: skills.es,
    education: education.es,
    certifications: certifications.es,
    languages: languages.es,
    footer: footer.es,
  },
  en: {
    nav: nav.en,
    header: header.en,
    summary: summary.en,
    experience: experience.en,
    skills: skills.en,
    education: education.en,
    certifications: certifications.en,
    languages: languages.en,
    footer: footer.en,
  },
};

export type Lang = 'es' | 'en';
