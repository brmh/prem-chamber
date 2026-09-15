/** Page-level copy, kept out of the .astro files so it can be edited without touching markup. */

export const HOME = {
  en: {
    eyebrow: 'Tehsil Compound, Ghaziabad',
    h1: 'Registry, deeds and documentation, done properly the first time',
    lede:
      'A chamber at the Ghaziabad tehsil handling sale deeds and registry, wills and gift deeds, power of attorney, marriage registration and court marriage, and affidavit work as Oath Commissioner.',
    trust: [
      { k: 'At the tehsil', v: 'Chamber No. 15, inside the Tehsil Compound' },
      { k: 'Oath Commissioner', v: 'Affidavits drafted and attested on the spot' },
      { k: 'Both languages', v: 'Documents and advice in Hindi or English' },
    ],
    routerEyebrow: 'Start here',
    routerH2: 'What is the situation?',
    routerSub:
      'Most people arrive at the chamber with one of these. Pick the one closest to yours and read what is actually involved before you decide anything.',
    router: [
      {
        q: 'I am buying a plot and I do not know if the papers are clean',
        a: 'Get the chain of title read before you pay the token amount.',
        href: '/services/property-title-verification',
      },
      {
        q: 'I need to know what the registry will cost me',
        a: 'Work out stamp duty on the circle rate and on your price, and see which one governs.',
        href: '/stamp-duty-calculator',
      },
      {
        q: 'We are married and an office is asking for a marriage certificate',
        a: 'Registration of a marriage that has already taken place, including older marriages.',
        href: '/services/marriage-registration',
      },
      {
        q: 'Our families do not agree and we want to marry',
        a: 'Court marriage under the Special Marriage Act, and what the thirty-day notice means.',
        href: '/services/court-marriage',
      },
      {
        q: 'Some office has asked for an affidavit on stamp paper',
        a: 'Drafted in the wording the office will accept, and attested as Oath Commissioner.',
        href: '/services/affidavit-oath-commissioner',
      },
      {
        q: 'I want to put the house in my child’s name while I am alive',
        a: 'Gift deed, will or relinquishment — they are not the same, and the difference matters.',
        href: '/services/gift-deed',
      },
      {
        q: 'My tenant has stopped paying and will not leave',
        a: 'What the agreement should have said, and what can be done from here.',
        href: '/services/rent-agreement',
      },
      {
        q: 'I live outside the city and cannot attend the registry',
        a: 'Power of attorney that is narrow enough to be safe, including one executed abroad.',
        href: '/services/power-of-attorney',
      },
    ],
    servicesEyebrow: 'Practice',
    servicesH2: 'What the chamber handles',
    guidesEyebrow: 'Written for clients',
    guidesH2: 'Read before you sign anything',
    guidesSub:
      'Plain explanations of the procedures people come to the chamber for. Written so that you can check what you are being told, by anyone.',
    calcH2: 'Work out the registry cost yourself',
    calcSub:
      'Enter the area and the circle rate, and see the duty on both the circle rate value and your agreed price. The higher one is what the office will charge.',
    calcCta: 'Open the calculator',
    processEyebrow: 'How it goes',
    processH2: 'What working with the chamber looks like',
    process: [
      { h: 'Tell us the matter', p: 'A call or a message on WhatsApp. One or two lines is enough to know whether it is a half-hour job or a longer one.' },
      { h: 'Bring what you have', p: 'Even photographs of the papers help. Most questions about property are answered by the last two documents in the chain.' },
      { h: 'You are told the position plainly', p: 'What can be done, what it will cost including the government charges, and how long it should take.' },
      { h: 'The work is done and handed over', p: 'Drafting, the office work, and appearance where it is needed, ending with the registered document in your hand.' },
    ],
    chamberH2: 'The chamber',
    faq: [
      {
        q: 'Do I need an appointment, or can I just come to the chamber?',
        a: 'For an affidavit or a simple attestation you can come during working hours. For property matters it is better to call first, both so that the right papers are brought and so that time is set aside for reading them.',
      },
      {
        q: 'Can the whole thing be done over WhatsApp?',
        a: 'Much of it can. Papers can be read from photographs and drafts can be sent for approval. Registration itself requires physical attendance at the Sub-Registrar office, and an affidavit requires the deponent to appear in person.',
      },
      {
        q: 'What will it cost?',
        a: 'Government charges such as stamp duty and registration fee are fixed by the state and are the larger part of what you pay. The professional fee depends on the work involved and is told to you before the work starts, not after.',
      },
      {
        q: 'Do you work in Hindi or English?',
        a: 'Both. Documents are drafted in whichever language the office requires, and explained to you in whichever you prefer.',
      },
    ],
  },

  hi: {
    eyebrow: 'तहसील कम्पाउंड, गाज़ियाबाद',
    h1: 'रजिस्ट्री, बैनामा और दस्तावेज़ — पहली ही बार ठीक से',
    lede:
      'गाज़ियाबाद तहसील में स्थित चैम्बर, जहाँ बैनामा और रजिस्ट्री, वसीयत और दान पत्र, मुख्तारनामा, विवाह पंजीकरण और कोर्ट मैरिज, तथा ओथ कमिश्नर के रूप में शपथ पत्र का काम होता है।',
    trust: [
      { k: 'तहसील में ही', v: 'चैम्बर नं. 15, तहसील कम्पाउंड के अंदर' },
      { k: 'ओथ कमिश्नर', v: 'शपथ पत्र मौके पर ही तैयार और अटेस्ट' },
      { k: 'दोनों भाषाओं में', v: 'दस्तावेज़ और सलाह हिंदी या अंग्रेज़ी में' },
    ],
    routerEyebrow: 'यहाँ से शुरू कीजिए',
    routerH2: 'मामला क्या है?',
    routerSub:
      'चैम्बर आने वाले ज़्यादातर लोग इन्हीं में से किसी एक स्थिति में होते हैं। जो आपके सबसे क़रीब है उसे चुनिए और कुछ भी तय करने से पहले पढ़ लीजिए कि उसमें होता क्या है।',
    router: [
      {
        q: 'प्लॉट ख़रीद रहा हूँ, पता नहीं कागज़ साफ़ हैं या नहीं',
        a: 'बयाना देने से पहले कागज़ों की पूरी कड़ी पढ़वा लीजिए।',
        href: '/services/property-title-verification',
      },
      {
        q: 'जानना है कि रजिस्ट्री में कितना खर्च आएगा',
        a: 'सर्किल रेट और अपनी कीमत, दोनों पर स्टाम्प ड्यूटी निकालिए और देखिए कौन-सी लागू होगी।',
        href: '/stamp-duty-calculator',
      },
      {
        q: 'शादी हो चुकी है और दफ़्तर मैरिज सर्टिफ़िकेट माँग रहा है',
        a: 'पहले हो चुके विवाह का पंजीकरण, पुरानी शादियों सहित।',
        href: '/services/marriage-registration',
      },
      {
        q: 'घरवाले राज़ी नहीं हैं और हम विवाह करना चाहते हैं',
        a: 'विशेष विवाह अधिनियम के तहत कोर्ट मैरिज, और तीस दिन के नोटिस का मतलब।',
        href: '/services/court-marriage',
      },
      {
        q: 'किसी दफ़्तर ने स्टाम्प पेपर पर शपथ पत्र माँगा है',
        a: 'उन्हीं शब्दों में तैयार जो दफ़्तर स्वीकार करेगा, और ओथ कमिश्नर द्वारा अटेस्ट।',
        href: '/services/affidavit-oath-commissioner',
      },
      {
        q: 'जीते-जी मकान बच्चे के नाम करना है',
        a: 'दान पत्र, वसीयत और हक त्याग — तीनों एक नहीं हैं, और फ़र्क़ मायने रखता है।',
        href: '/services/gift-deed',
      },
      {
        q: 'किरायेदार पैसा नहीं दे रहा और मकान भी नहीं छोड़ रहा',
        a: 'एग्रीमेंट में क्या लिखा होना चाहिए था, और अब यहाँ से क्या हो सकता है।',
        href: '/services/rent-agreement',
      },
      {
        q: 'शहर से बाहर रहता हूँ, रजिस्ट्री में आ नहीं सकता',
        a: 'ऐसा मुख्तारनामा जो सुरक्षित रहने लायक सीमित हो, विदेश में निष्पादित सहित।',
        href: '/services/power-of-attorney',
      },
    ],
    servicesEyebrow: 'कार्यक्षेत्र',
    servicesH2: 'चैम्बर में क्या-क्या काम होता है',
    guidesEyebrow: 'मुवक्किलों के लिए लिखा गया',
    guidesH2: 'कुछ भी हस्ताक्षर करने से पहले पढ़िए',
    guidesSub:
      'जिन प्रक्रियाओं के लिए लोग चैम्बर आते हैं, उन्हीं की सीधी-सादी व्याख्या। इस तरह लिखी गई कि आपको जो बताया जा रहा है, आप उसे ख़ुद जाँच सकें — चाहे बताने वाला कोई भी हो।',
    calcH2: 'रजिस्ट्री का खर्च ख़ुद निकालिए',
    calcSub:
      'क्षेत्रफल और सर्किल रेट डालिए, और सर्किल रेट वाले मूल्य तथा अपनी तय कीमत — दोनों पर ड्यूटी देखिए। जो ज़्यादा होगी, कार्यालय वही लेगा।',
    calcCta: 'कैलकुलेटर खोलिए',
    processEyebrow: 'तरीक़ा',
    processH2: 'चैम्बर में काम कैसे चलता है',
    process: [
      { h: 'मामला बताइए', p: 'एक कॉल या व्हाट्सएप संदेश। एक-दो लाइन से ही पता चल जाता है कि यह आधे घंटे का काम है या लंबा।' },
      { h: 'जो कागज़ हैं, ले आइए', p: 'फ़ोटो से भी काम चल जाता है। संपत्ति के ज़्यादातर सवालों का जवाब कड़ी के आख़िरी दो दस्तावेज़ों में ही मिल जाता है।' },
      { h: 'स्थिति साफ़-साफ़ बताई जाती है', p: 'क्या हो सकता है, सरकारी शुल्क सहित कितना खर्च आएगा, और कितना समय लगना चाहिए।' },
      { h: 'काम पूरा करके सौंपा जाता है', p: 'दस्तावेज़ तैयार करना, दफ़्तर का काम, और जहाँ ज़रूरी हो वहाँ उपस्थिति — और अंत में रजिस्टर्ड दस्तावेज़ आपके हाथ में।' },
    ],
    chamberH2: 'चैम्बर',
    faq: [
      {
        q: 'क्या समय लेकर आना पड़ता है या सीधे चैम्बर आ सकते हैं?',
        a: 'शपथ पत्र या साधारण अटेस्टेशन के लिए कार्य समय में सीधे आ सकते हैं। संपत्ति के मामलों में पहले फ़ोन कर लेना बेहतर है — ताकि सही कागज़ साथ आएँ और उन्हें पढ़ने का समय भी निकाला जा सके।',
      },
      {
        q: 'क्या पूरा काम व्हाट्सएप पर हो सकता है?',
        a: 'काफ़ी हद तक हो सकता है। कागज़ फ़ोटो से पढ़े जा सकते हैं और मसौदा मंज़ूरी के लिए भेजा जा सकता है। रजिस्ट्री के लिए सब-रजिस्ट्रार कार्यालय में स्वयं जाना ज़रूरी है, और शपथ पत्र में शपथकर्ता का व्यक्तिगत रूप से उपस्थित होना।',
      },
      {
        q: 'खर्च कितना आएगा?',
        a: 'स्टाम्प ड्यूटी और रजिस्ट्रेशन फ़ीस जैसे सरकारी शुल्क राज्य से तय होते हैं और आपके कुल खर्च का बड़ा हिस्सा वही होते हैं। पेशेवर फ़ीस काम के अनुसार होती है और काम शुरू होने से पहले बता दी जाती है, बाद में नहीं।',
      },
      {
        q: 'काम हिंदी में होता है या अंग्रेज़ी में?',
        a: 'दोनों में। दस्तावेज़ उसी भाषा में तैयार होते हैं जो दफ़्तर माँगता है, और आपको समझाया उसी भाषा में जाता है जो आप चाहें।',
      },
    ],
  },
} as const;
