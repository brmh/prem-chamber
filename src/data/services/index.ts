import type { Lang } from '../site';
import type { Service, ServiceCopy } from './types';
import { saleDeedRegistry } from './sale-deed-registry';
import { propertyTitleCheck } from './property-title-check';
import { willRegistration } from './will-registration';
import { giftDeed } from './gift-deed';
import { powerOfAttorney } from './power-of-attorney';
import { marriageRegistration } from './marriage-registration';
import { courtMarriage } from './court-marriage';
import { affidavitOathCommissioner } from './affidavit-oath-commissioner';
import { rentAgreement } from './rent-agreement';

export type { Service, ServiceCopy, ServiceFaq } from './types';

/** Order here is the order shown on the site. Registry work first, it is most of the walk-in traffic. */
export const SERVICES: Service[] = [
  saleDeedRegistry,
  propertyTitleCheck,
  giftDeed,
  rentAgreement,
  willRegistration,
  powerOfAttorney,
  marriageRegistration,
  courtMarriage,
  affidavitOathCommissioner,
];

export const GROUPS = {
  property: { en: 'Property and registry', hi: 'संपत्ति और रजिस्ट्री' },
  family: { en: 'Family and marriage', hi: 'परिवार और विवाह' },
  documents: { en: 'Documents and attestation', hi: 'दस्तावेज़ और अटेस्टेशन' },
} as const;

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function copy(service: Service, lang: Lang): ServiceCopy {
  return service[lang];
}

export function servicesByGroup(group: keyof typeof GROUPS): Service[] {
  return SERVICES.filter((s) => s.group === group);
}

/** Subject options for the enquiry form, built from the service list so the two never drift apart. */
export function subjectOptions(lang: Lang): string[] {
  return SERVICES.map((s) => s[lang].title);
}
