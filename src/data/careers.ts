import type { Lang } from './site';

export interface RoleCopy {
  title: string;
  /** What the day actually looks like, not a job-spec abstraction. */
  work: string[];
  looking: string[];
  learn: string;
}

export interface Role {
  id: string;
  en: RoleCopy;
  hi: RoleCopy;
}

/**
 * Current vacancies. Empty by default — the page then says plainly that there is
 * no specific opening and that applications are still read, which is honest.
 * Add an entry when the chamber is actually hiring, and remove it when filled.
 */
export interface Opening {
  roleId: string;
  /** Free text, e.g. "One position, from January" / "एक पद, जनवरी से". */
  note: string;
  noteHi: string;
  postedOn: string;
}

export const OPENINGS: Opening[] = [];

export const ROLES: Role[] = [
  {
    id: 'junior-advocate',
    en: {
      title: 'Junior advocate',
      work: [
        'Drafting sale deeds, gift deeds, wills, rent agreements and affidavits, and being told why each clause is there',
        'Reading a seller’s chain of title and writing up what is missing',
        'Attending the Sub-Registrar office for registrations, and the tehsil for revenue matters',
        'Sitting with clients while their position is explained, then handling the follow-up yourself',
        'Keeping the file in order, which matters more than it sounds',
      ],
      looking: [
        'Enrolment with a State Bar Council, or enrolment in progress',
        'Drafting in both Hindi and English — most documents here are in Hindi',
        'Willingness to spend time at the tehsil rather than only at a desk',
        'Care with dates, names and figures; this work punishes carelessness',
      ],
      learn:
        'Registry and documentation practice is learned by doing it, not by reading about it. In a year here you will have drafted and registered enough documents to know where transactions go wrong, which is knowledge that transfers to any property practice.',
    },
    hi: {
      title: 'जूनियर अधिवक्ता',
      work: [
        'बैनामा, दान पत्र, वसीयत, किरायानामा और शपथ पत्र तैयार करना — और यह समझना कि हर शर्त वहाँ क्यों है',
        'विक्रेता के कागज़ों की कड़ी पढ़ना और लिखकर बताना कि क्या कमी है',
        'रजिस्ट्री के लिए सब-रजिस्ट्रार कार्यालय, और राजस्व मामलों के लिए तहसील जाना',
        'मुवक्किल को स्थिति समझाते समय साथ बैठना, फिर आगे की कार्रवाई ख़ुद सँभालना',
        'फ़ाइल व्यवस्थित रखना — यह सुनने में जितना छोटा लगता है, उससे कहीं ज़्यादा मायने रखता है',
      ],
      looking: [
        'किसी राज्य बार काउंसिल में नामांकन, या नामांकन की प्रक्रिया जारी',
        'हिंदी और अंग्रेज़ी दोनों में दस्तावेज़ तैयार करने की क्षमता — यहाँ ज़्यादातर दस्तावेज़ हिंदी में बनते हैं',
        'मेज़ पर बैठने के साथ-साथ तहसील में समय देने की तैयारी',
        'तारीख़, नाम और आँकड़ों में सावधानी; इस काम में लापरवाही महँगी पड़ती है',
      ],
      learn:
        'रजिस्ट्री और दस्तावेज़ की प्रैक्टिस पढ़कर नहीं, करके आती है। यहाँ एक साल में आप इतने दस्तावेज़ तैयार और पंजीकृत कर चुके होंगे कि आपको पता चल जाएगा कि सौदे कहाँ बिगड़ते हैं — और यह समझ किसी भी प्रॉपर्टी प्रैक्टिस में काम आती है।',
    },
  },
  {
    id: 'intern',
    en: {
      title: 'Intern (law student)',
      work: [
        'Reading actual files, not sample drafts',
        'Sitting in on client meetings where the position is explained',
        'Watching a registration from start to finish at the Sub-Registrar office',
        'Preparing first drafts that someone will then mark up in front of you',
        'Working out stamp duty on real transactions and checking it against the office figure',
      ],
      looking: [
        'Any year of a three or five year law course',
        'Four weeks minimum — shorter than that and you only see the paperwork, not the reasoning',
        'Reasonable Hindi reading; the documents and the records are in it',
      ],
      learn:
        'Most internships end with a certificate and little else. The point of this one is that you leave able to read a chain of title, work out stamp duty correctly, and say what is wrong with a badly drafted agreement.',
    },
    hi: {
      title: 'इंटर्न (विधि छात्र)',
      work: [
        'असली फ़ाइलें पढ़ना, नमूने के मसौदे नहीं',
        'मुवक्किल के साथ होने वाली उन बैठकों में बैठना जहाँ स्थिति समझाई जाती है',
        'सब-रजिस्ट्रार कार्यालय में एक रजिस्ट्री शुरू से अंत तक देखना',
        'पहला मसौदा तैयार करना, जिस पर कोई आपके सामने ही सुधार करेगा',
        'असली सौदों पर स्टाम्प ड्यूटी निकालना और उसे कार्यालय के आँकड़े से मिलाना',
      ],
      looking: [
        'तीन या पाँच वर्षीय विधि पाठ्यक्रम का कोई भी वर्ष',
        'कम से कम चार सप्ताह — इससे कम में सिर्फ़ कागज़ी काम दिखता है, उसके पीछे की सोच नहीं',
        'ठीक-ठाक हिंदी पढ़ना आना; दस्तावेज़ और रिकॉर्ड उसी में हैं',
      ],
      learn:
        'ज़्यादातर इंटर्नशिप एक प्रमाण पत्र देकर ख़त्म हो जाती हैं। इसका मक़सद यह है कि जाते समय आप कागज़ों की कड़ी पढ़ सकें, स्टाम्प ड्यूटी सही निकाल सकें, और ख़राब बने एग्रीमेंट में खोट बता सकें।',
    },
  },
  {
    id: 'clerk',
    en: {
      title: 'Clerk / typist',
      work: [
        'Typing documents in Hindi and English from drafts and dictation',
        'Filing applications on the IGRSUP portal and booking registration slots',
        'Generating e-stamp certificates and keeping the receipts in order',
        'Maintaining the file register and tracking which matter is waiting on what',
        'Handling calls and appointments when the chamber is at the office',
      ],
      looking: [
        'Hindi typing at a working speed, Devanagari and Roman both',
        'Comfort with government portals, or willingness to learn them properly',
        'Accuracy with names, numbers and dates — a mistyped name costs a client a day at the office',
        'Discretion; everything passing through this desk is confidential',
      ],
      learn:
        'A clerk who knows the registry process well is worth more than one who types fast. Both sides of the job are taught here.',
    },
    hi: {
      title: 'क्लर्क / टाइपिस्ट',
      work: [
        'मसौदे और बोलकर लिखाए गए पाठ से हिंदी और अंग्रेज़ी में दस्तावेज़ टाइप करना',
        'IGRSUP पोर्टल पर आवेदन करना और रजिस्ट्री का समय बुक करना',
        'ई-स्टाम्प प्रमाण पत्र बनवाना और रसीदें व्यवस्थित रखना',
        'फ़ाइल रजिस्टर सँभालना और यह देखना कि कौन-सा मामला किस चीज़ का इंतज़ार कर रहा है',
        'चैम्बर के कार्यालय में होने पर फ़ोन और मुलाक़ात का समय सँभालना',
      ],
      looking: [
        'काम चलाने लायक हिंदी टाइपिंग गति, देवनागरी और रोमन दोनों',
        'सरकारी पोर्टल चलाने की आदत, या उन्हें ठीक से सीखने की तैयारी',
        'नाम, संख्या और तारीख़ में सटीकता — एक ग़लत टाइप हुआ नाम मुवक्किल का पूरा दिन ख़राब कर देता है',
        'गोपनीयता; इस मेज़ से गुज़रने वाली हर बात निजी है',
      ],
      learn:
        'जिस क्लर्क को रजिस्ट्री की प्रक्रिया अच्छी तरह आती है, उसकी क़ीमत तेज़ टाइप करने वाले से ज़्यादा है। यहाँ दोनों चीज़ें सिखाई जाती हैं।',
    },
  },
];

export function role(id: string): Role | undefined {
  return ROLES.find((r) => r.id === id);
}

export function roleCopy(r: Role, lang: Lang): RoleCopy {
  return r[lang];
}
