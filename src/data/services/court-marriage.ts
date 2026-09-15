import type { Service } from './types';

export const courtMarriage: Service = {
  slug: 'court-marriage',
  group: 'family',
  guides: ['court-marriage-ghaziabad', 'marriage-registration-up'],
  en: {
    title: 'Court marriage',
    alsoCalled: 'Special Marriage Act marriage',
    metaTitle: 'Court Marriage in Ghaziabad — Procedure & Documents | Prem Chamber',
    metaDesc:
      'Court marriage in Ghaziabad under the Special Marriage Act. The thirty-day notice, documents for both parties, three witnesses, objections, and what changes for an inter-faith couple.',
    problem:
      'You have decided to marry, one or both families are not in agreement, and you want a marriage that is legally complete on its own terms. Everyone tells you a different version of how long the notice takes and what can go wrong during it.',
    summary:
      'The full procedure under the Special Marriage Act at the Marriage Officer’s office in Ghaziabad, from filing the notice to solemnisation and the certificate, including what happens if an objection is filed.',
    handles: [
      'Filing the notice of intended marriage with the Marriage Officer',
      'Preparing declarations and affidavits for both parties',
      'Arranging the requirements of the thirty-day notice period',
      'Dealing with an objection if one is filed during the notice period',
      'Solemnisation before the Marriage Officer with three witnesses, and the certificate',
    ],
    documents: [
      'Proof of date of birth of both parties',
      'Proof of residence of both parties, one of whom must have resided in the district for at least thirty days',
      'Passport-size photographs of both',
      'Identity proof and photographs of three witnesses',
      'Affidavits regarding marital status and that the parties are not within prohibited relationship',
      'Divorce decree or death certificate of a former spouse, where applicable',
    ],
    steps: [
      {
        h: 'Notice of intended marriage',
        p: 'Both parties sign the notice before the Marriage Officer of the district where at least one of them has lived for thirty days or more.',
      },
      {
        h: 'Thirty-day publication',
        p: 'The notice is published at the office. During this period any person may object on the limited grounds set out in the Act.',
      },
      {
        h: 'Objection, if any',
        p: 'An objection must be on a ground the Act recognises, not simply family disapproval. The Marriage Officer inquires into it and decides.',
      },
      {
        h: 'Solemnisation and certificate',
        p: 'After thirty days, the marriage is solemnised before the Marriage Officer with three witnesses present, and the certificate is signed by all of them.',
      },
    ],
    timeline:
      'The thirty-day notice period is fixed by statute and cannot be shortened. Counting the preparation before and the certificate after, most couples should plan for about five to six weeks.',
    faqs: [
      {
        q: 'Can the thirty-day notice be waived?',
        a: 'Not under the Special Marriage Act. Anyone promising a same-day court marriage under this Act is describing something else, usually a notarised affidavit, which is not a marriage at all. A couple of the same faith who want to marry sooner can marry under their personal law and register that marriage instead.',
      },
      {
        q: 'Our families object. Can they stop the marriage?',
        a: 'Family disapproval is not a ground of objection under the Act. Objections are limited to conditions such as age, subsisting marriage, unsoundness of mind or prohibited relationship. Where there is a genuine safety concern, that is a separate matter and should be raised early.',
      },
      {
        q: 'Do we both need to be residents of Ghaziabad?',
        a: 'Only one of you needs to have resided in the district for at least thirty days before the notice is filed. Proof of that residence is what the office will look at.',
      },
    ],
  },
  hi: {
    title: 'कोर्ट मैरिज',
    alsoCalled: 'विशेष विवाह अधिनियम के तहत विवाह',
    metaTitle: 'गाज़ियाबाद में कोर्ट मैरिज — प्रक्रिया और कागज़ | प्रेम चैम्बर',
    metaDesc:
      'गाज़ियाबाद में विशेष विवाह अधिनियम के तहत कोर्ट मैरिज। तीस दिन का नोटिस, दोनों पक्षों के कागज़, तीन गवाह, आपत्ति, और अंतर-धार्मिक दंपत्ति के लिए क्या अलग होता है।',
    problem:
      'आपने विवाह का निर्णय ले लिया है, एक या दोनों परिवार सहमत नहीं हैं, और आप चाहते हैं कि विवाह अपने आप में कानूनी रूप से पूरा हो। नोटिस में कितना समय लगता है और उस दौरान क्या गड़बड़ हो सकती है — हर कोई अलग बात बताता है।',
    summary:
      'गाज़ियाबाद में विवाह अधिकारी के कार्यालय में विशेष विवाह अधिनियम की पूरी प्रक्रिया — नोटिस दाख़िल करने से लेकर विवाह संपन्न होने और प्रमाण पत्र तक, और आपत्ति पड़ने पर क्या होता है।',
    handles: [
      'विवाह अधिकारी के समक्ष प्रस्तावित विवाह की सूचना दाख़िल करना',
      'दोनों पक्षों के घोषणा पत्र और शपथ पत्र तैयार करना',
      'तीस दिन की नोटिस अवधि की ज़रूरतें पूरी कराना',
      'नोटिस अवधि में आपत्ति पड़ने पर उसका निपटारा',
      'तीन गवाहों के साथ विवाह अधिकारी के समक्ष विवाह संपन्न कराना और प्रमाण पत्र',
    ],
    documents: [
      'दोनों पक्षों की जन्मतिथि का प्रमाण',
      'दोनों के निवास का प्रमाण, जिनमें से एक का कम से कम तीस दिन उस ज़िले में रहना ज़रूरी है',
      'दोनों की पासपोर्ट साइज़ फ़ोटो',
      'तीन गवाहों का पहचान पत्र और फ़ोटो',
      'वैवाहिक स्थिति और निषिद्ध संबंध में न होने के शपथ पत्र',
      'लागू होने पर पूर्व जीवनसाथी की तलाक़ डिक्री या मृत्यु प्रमाण पत्र',
    ],
    steps: [
      {
        h: 'प्रस्तावित विवाह की सूचना',
        p: 'दोनों पक्ष उस ज़िले के विवाह अधिकारी के समक्ष सूचना पर हस्ताक्षर करते हैं जहाँ कम से कम एक पक्ष तीस दिन या उससे अधिक रह चुका हो।',
      },
      {
        h: 'तीस दिन का प्रकाशन',
        p: 'सूचना कार्यालय में प्रकाशित होती है। इस अवधि में कोई भी व्यक्ति अधिनियम में दिए सीमित आधारों पर आपत्ति कर सकता है।',
      },
      {
        h: 'आपत्ति, यदि हो',
        p: 'आपत्ति उसी आधार पर हो सकती है जिसे अधिनियम मान्यता देता है, केवल पारिवारिक असहमति पर नहीं। विवाह अधिकारी जाँच करके निर्णय लेता है।',
      },
      {
        h: 'विवाह और प्रमाण पत्र',
        p: 'तीस दिन बाद तीन गवाहों की उपस्थिति में विवाह अधिकारी के समक्ष विवाह संपन्न होता है, और प्रमाण पत्र पर सभी हस्ताक्षर करते हैं।',
      },
    ],
    timeline:
      'तीस दिन की नोटिस अवधि कानून से तय है, इसे घटाया नहीं जा सकता। पहले की तैयारी और बाद का प्रमाण पत्र जोड़कर ज़्यादातर दंपत्तियों को लगभग पाँच से छह सप्ताह मानकर चलना चाहिए।',
    faqs: [
      {
        q: 'क्या तीस दिन का नोटिस माफ़ हो सकता है?',
        a: 'विशेष विवाह अधिनियम में नहीं। जो कोई इस अधिनियम के तहत उसी दिन कोर्ट मैरिज का वादा करे, वह किसी और चीज़ की बात कर रहा है — आमतौर पर नोटरी वाले शपथ पत्र की, जो विवाह होता ही नहीं। एक ही धर्म के दंपत्ति जो जल्दी विवाह करना चाहें, वे अपने पर्सनल लॉ के तहत विवाह करके उसका पंजीकरण करा सकते हैं।',
      },
      {
        q: 'हमारे परिवार आपत्ति कर रहे हैं। क्या वे विवाह रुकवा सकते हैं?',
        a: 'पारिवारिक असहमति अधिनियम के तहत आपत्ति का आधार नहीं है। आपत्तियाँ उम्र, पहले से चल रहे विवाह, विकृत चित्त या निषिद्ध संबंध जैसी शर्तों तक सीमित हैं। जहाँ सुरक्षा की वास्तविक चिंता हो, वह अलग मामला है और उसे शुरू में ही उठाना चाहिए।',
      },
      {
        q: 'क्या हम दोनों का गाज़ियाबाद का निवासी होना ज़रूरी है?',
        a: 'नोटिस दाख़िल होने से पहले आप में से केवल एक का उस ज़िले में कम से कम तीस दिन रहना ज़रूरी है। कार्यालय उसी निवास का प्रमाण देखेगा।',
      },
    ],
  },
};
