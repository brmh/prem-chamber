import type { Service } from './types';

export const rentAgreement: Service = {
  slug: 'rent-agreement',
  group: 'property',
  guides: ['rent-agreement-guide', 'stamp-duty-ghaziabad'],
  en: {
    title: 'Rent agreement and lease deed',
    alsoCalled: 'Kirayanama, lease',
    metaTitle: 'Rent Agreement & Lease Deed in Ghaziabad | Prem Chamber',
    metaDesc:
      'Rent agreements and lease deeds drafted and registered in Ghaziabad. Eleven-month agreements, registration for longer terms, security deposit, lock-in and eviction clauses that hold.',
    problem:
      'The tenant wants to move in on the first of the month, the broker has handed you a two-page format he uses for everyone, and nobody has read the clause about who pays for repairs or what happens if the rent stops coming.',
    summary:
      'A rent agreement written for your property rather than copied from a format, on the correct stamp, and registered where the term makes registration compulsory.',
    handles: [
      'Residential and commercial rent agreements',
      'Eleven-month agreements and longer leases that require registration',
      'Security deposit, escalation, lock-in and notice clauses',
      'Clear allocation of maintenance, repairs and utility bills',
      'Registration at the Sub-Registrar office where the term exceeds twelve months',
      'Notice to vacate and recovery of arrears where a tenancy has gone wrong',
    ],
    documents: [
      'Ownership proof of the landlord, such as the sale deed or allotment letter',
      'Identity and address proof of landlord and tenant',
      'Photographs of both parties',
      'Two witnesses with identity proof',
      'Electricity bill or house tax receipt for the property',
    ],
    steps: [
      {
        h: 'The terms are settled before drafting',
        p: 'Rent, deposit, escalation, who repairs what, whether subletting is allowed, and how either side can end the tenancy.',
      },
      {
        h: 'Drafting on the correct stamp',
        p: 'Stamp duty on a lease depends on the rent and the term. A short agreement on a low-value stamp is a common false economy.',
      },
      {
        h: 'Signing, and registration where required',
        p: 'A lease for a term of more than twelve months must be registered. Below that, registration is optional but still useful as evidence.',
      },
    ],
    timeline:
      'An unregistered eleven-month agreement is usually ready within a day. A registered lease takes two to four working days including the appointment.',
    faqs: [
      {
        q: 'Why is every rent agreement eleven months?',
        a: 'Because a lease of twelve months or more must be registered, which costs more and takes longer. Eleven months keeps it outside that requirement. It is a convenience, not a rule, and for a valuable commercial property a registered lease is often worth the extra cost.',
      },
      {
        q: 'Is a notarised rent agreement enough?',
        a: 'For an eleven-month residential tenancy it is common and usually workable. But an unregistered agreement has limited evidentiary value if the tenancy is later disputed, and a notary stamp does not change that.',
      },
      {
        q: 'The tenant has stopped paying and will not leave. What now?',
        a: 'Do not cut the electricity or change the locks, however tempting. That weakens your own position. The route is a proper notice followed by proceedings for eviction and arrears, and what the agreement says about notice and default matters a great deal at that stage.',
      },
    ],
  },
  hi: {
    title: 'किरायानामा और लीज़ डीड',
    alsoCalled: 'रेंट एग्रीमेंट',
    metaTitle: 'गाज़ियाबाद में किरायानामा और लीज़ डीड | प्रेम चैम्बर',
    metaDesc:
      'गाज़ियाबाद में किरायानामा और लीज़ डीड तैयार कराना और पंजीकरण। ग्यारह महीने का एग्रीमेंट, लंबी अवधि पर पंजीकरण, सिक्योरिटी डिपॉज़िट, लॉक-इन और खाली कराने की शर्तें।',
    problem:
      'किरायेदार पहली तारीख़ को आना चाहता है, दलाल ने वही दो पन्ने का फ़ॉर्मेट थमा दिया है जो वह सबको देता है, और किसी ने वह शर्त पढ़ी ही नहीं कि मरम्मत का खर्च कौन देगा या किराया आना बंद हो गया तो क्या होगा।',
    summary:
      'ऐसा किरायानामा जो फ़ॉर्मेट से नकल करके नहीं, आपकी संपत्ति के लिए लिखा गया हो, सही स्टाम्प पर, और जहाँ अवधि के कारण पंजीकरण अनिवार्य हो वहाँ पंजीकृत।',
    handles: [
      'आवासीय और व्यावसायिक किरायानामा',
      'ग्यारह महीने के एग्रीमेंट और वे लंबी लीज़ जिनका पंजीकरण अनिवार्य है',
      'सिक्योरिटी डिपॉज़िट, किराया वृद्धि, लॉक-इन और नोटिस की शर्तें',
      'रखरखाव, मरम्मत और बिलों की ज़िम्मेदारी साफ़-साफ़ तय करना',
      'बारह महीने से अधिक अवधि पर सब-रजिस्ट्रार कार्यालय में पंजीकरण',
      'किरायेदारी बिगड़ने पर खाली कराने का नोटिस और बकाया वसूली',
    ],
    documents: [
      'मकान मालिक के स्वामित्व का प्रमाण, जैसे बैनामा या आवंटन पत्र',
      'मकान मालिक और किरायेदार का पहचान व पते का प्रमाण',
      'दोनों पक्षों की फ़ोटो',
      'पहचान पत्र सहित दो गवाह',
      'संपत्ति का बिजली बिल या हाउस टैक्स की रसीद',
    ],
    steps: [
      {
        h: 'पहले शर्तें तय होती हैं',
        p: 'किराया, डिपॉज़िट, बढ़ोतरी, कौन-सी मरम्मत किसकी, आगे किराये पर देना चलेगा या नहीं, और कोई भी पक्ष किरायेदारी कैसे ख़त्म कर सकता है।',
      },
      {
        h: 'सही स्टाम्प पर तैयारी',
        p: 'लीज़ पर स्टाम्प ड्यूटी किराये और अवधि पर निर्भर करती है। कम मूल्य के स्टाम्प पर छोटा एग्रीमेंट बनवाना आम तौर पर सस्ता नहीं, महँगा पड़ता है।',
      },
      {
        h: 'हस्ताक्षर, और ज़रूरत हो तो पंजीकरण',
        p: 'बारह महीने से अधिक अवधि की लीज़ का पंजीकरण अनिवार्य है। उससे कम में पंजीकरण वैकल्पिक है, पर सबूत के तौर पर तब भी उपयोगी रहता है।',
      },
    ],
    timeline:
      'बिना पंजीकरण वाला ग्यारह महीने का एग्रीमेंट आमतौर पर एक दिन में तैयार हो जाता है। पंजीकृत लीज़ में समय सहित दो से चार कार्यदिवस लगते हैं।',
    faqs: [
      {
        q: 'हर किरायानामा ग्यारह महीने का ही क्यों होता है?',
        a: 'क्योंकि बारह महीने या उससे अधिक की लीज़ का पंजीकरण अनिवार्य है, जिसमें खर्च और समय दोनों ज़्यादा लगते हैं। ग्यारह महीने उसे इस ज़रूरत से बाहर रखते हैं। यह सुविधा है, नियम नहीं — और क़ीमती व्यावसायिक संपत्ति के लिए पंजीकृत लीज़ अक्सर अतिरिक्त खर्च के लायक होती है।',
      },
      {
        q: 'क्या नोटरी वाला किरायानामा काफ़ी है?',
        a: 'ग्यारह महीने की आवासीय किरायेदारी के लिए यह आम है और आमतौर पर काम चल जाता है। पर विवाद होने पर बिना पंजीकरण वाले एग्रीमेंट का साक्ष्य मूल्य सीमित रहता है, और नोटरी की मुहर से यह नहीं बदलता।',
      },
      {
        q: 'किरायेदार ने पैसा देना बंद कर दिया है और मकान भी नहीं छोड़ रहा। अब क्या?',
        a: 'बिजली मत कटवाइए और ताला मत बदलिए, चाहे मन कितना भी करे — इससे आपकी अपनी स्थिति कमज़ोर होती है। रास्ता है विधिवत नोटिस और उसके बाद बेदख़ली व बकाया की कार्रवाई। उस मोड़ पर एग्रीमेंट में नोटिस और चूक के बारे में क्या लिखा है, यह बहुत मायने रखता है।',
      },
    ],
  },
};
