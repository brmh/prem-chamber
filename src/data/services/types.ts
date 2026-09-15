
export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceCopy {
  title: string;
  /** Plain-language name people actually use at the tehsil. */
  alsoCalled: string;
  metaTitle: string;
  metaDesc: string;
  /** The situation the client is actually in when they call. */
  problem: string;
  summary: string;
  handles: string[];
  documents: string[];
  steps: { h: string; p: string }[];
  timeline: string;
  faqs: ServiceFaq[];
}

export interface Service {
  slug: string;
  /** Used to group the service in navigation and on the home page. */
  group: 'property' | 'family' | 'documents';
  guides: string[];
  en: ServiceCopy;
  hi: ServiceCopy;
}
