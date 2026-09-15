import type { Service } from './types';

export const marriageRegistration: Service = {
  slug: 'marriage-registration',
  group: 'family',
  guides: ['marriage-registration-up', 'court-marriage-ghaziabad'],
  en: {
    title: 'Marriage registration certificate',
    alsoCalled: 'Marriage certificate, vivah panjikaran',
    metaTitle: 'Marriage Registration Certificate in Ghaziabad | Prem Chamber',
    metaDesc:
      'Marriage registration certificate in Ghaziabad for couples already married. Online application on the UP portal, documents, witnesses, appointment at the Sub-Registrar office and common rejection reasons.',
    problem:
      'The wedding happened, sometimes years ago. Now a passport office, a bank, a visa application or a spouse-name change needs a marriage certificate, and the online form is asking for details that nobody kept a record of.',
    summary:
      'Getting the marriage registration certificate for a marriage that has already taken place, including the online application, the affidavits, and the appearance at the Sub-Registrar office.',
    handles: [
      'Filling the application on the Uttar Pradesh marriage registration portal',
      'Preparing the joint affidavit of the couple and the witness statements',
      'Working out which proof of marriage will be accepted when the wedding was long ago',
      'Fixing the appointment and attending the Sub-Registrar office with the couple',
      'Following up where an application has been objected to or kept pending',
    ],
    documents: [
      'Proof of date of birth of both spouses, such as a school certificate, Aadhaar or passport',
      'Proof of address of both',
      'Wedding photograph, and the invitation card where it exists',
      'Proof of the marriage having taken place, such as a temple or gurudwara certificate',
      'Aadhaar and photographs of two witnesses who attended the wedding',
      'Joint photograph of the couple',
      'Death certificate or decree of divorce, where either spouse was married before',
    ],
    steps: [
      {
        h: 'Checking what proof exists',
        p: 'For a recent wedding this is simple. For a marriage from fifteen years ago with no invitation card and no photographs, the route is different and takes longer.',
      },
      {
        h: 'Online application',
        p: 'The details of both spouses and the witnesses are filled on the state portal, the documents are uploaded and the fee is paid.',
      },
      {
        h: 'Affidavits',
        p: 'A joint affidavit of the couple and declarations by the witnesses are prepared and attested.',
      },
      {
        h: 'Appearance and issue of the certificate',
        p: 'The couple and both witnesses attend on the appointed date. Where the papers are in order the certificate is normally issued the same day.',
      },
    ],
    timeline:
      'For a recent marriage with complete papers, usually one to two weeks from application to certificate. Older marriages with weak proof take longer and sometimes need additional evidence.',
    faqs: [
      {
        q: 'We got married eight years ago. Is it too late to register?',
        a: 'No. There is no cut-off after which registration becomes impossible. What changes is the proof. Without photographs or an invitation card, more weight falls on the witness statements and on any document from that period showing you living as husband and wife.',
      },
      {
        q: 'Do the witnesses have to be the same people who attended the wedding?',
        a: 'They should be people who can say on oath that they were present at the marriage. Parents, siblings or close relatives are usual. A witness who was not there and says so later creates a problem you do not want in a document this important.',
      },
      {
        q: 'Is this the same thing as court marriage?',
        a: 'No, and the two get confused constantly. Registration records a marriage that has already taken place. Court marriage under the Special Marriage Act is the marriage itself, solemnised before the Marriage Officer with a thirty-day notice period.',
      },
    ],
  },
  hi: {
    title: 'विवाह पंजीकरण प्रमाण पत्र',
    alsoCalled: 'मैरिज सर्टिफ़िकेट',
    metaTitle: 'गाज़ियाबाद में विवाह पंजीकरण प्रमाण पत्र | प्रेम चैम्बर',
    metaDesc:
      'पहले से विवाहित दंपत्तियों के लिए गाज़ियाबाद में विवाह पंजीकरण प्रमाण पत्र। उत्तर प्रदेश पोर्टल पर ऑनलाइन आवेदन, कागज़, गवाह, सब-रजिस्ट्रार कार्यालय में समय और आवेदन रद्द होने के आम कारण।',
    problem:
      'शादी हो चुकी है, कई बार सालों पहले। अब पासपोर्ट कार्यालय, बैंक, वीज़ा आवेदन या पत्नी का नाम बदलवाने के लिए मैरिज सर्टिफ़िकेट माँगा जा रहा है, और ऑनलाइन फ़ॉर्म ऐसी जानकारी माँग रहा है जिसका किसी ने रिकॉर्ड ही नहीं रखा।',
    summary:
      'पहले हो चुके विवाह का पंजीकरण प्रमाण पत्र बनवाना — ऑनलाइन आवेदन, शपथ पत्र और सब-रजिस्ट्रार कार्यालय में उपस्थिति सहित।',
    handles: [
      'उत्तर प्रदेश विवाह पंजीकरण पोर्टल पर आवेदन भरना',
      'दंपत्ति का संयुक्त शपथ पत्र और गवाहों के बयान तैयार करना',
      'पुरानी शादी में कौन-सा प्रमाण स्वीकार होगा, यह तय करना',
      'समय तय कराना और दंपत्ति के साथ सब-रजिस्ट्रार कार्यालय जाना',
      'आवेदन पर आपत्ति लगने या लंबित रहने पर आगे की कार्रवाई',
    ],
    documents: [
      'दोनों की जन्मतिथि का प्रमाण — जैसे स्कूल प्रमाण पत्र, आधार या पासपोर्ट',
      'दोनों के पते का प्रमाण',
      'शादी की फ़ोटो, और जहाँ हो वहाँ निमंत्रण पत्र',
      'विवाह होने का प्रमाण, जैसे मंदिर या गुरुद्वारे का प्रमाण पत्र',
      'शादी में शामिल दो गवाहों का आधार और फ़ोटो',
      'दंपत्ति की संयुक्त फ़ोटो',
      'पहले विवाह हुआ हो तो मृत्यु प्रमाण पत्र या तलाक़ की डिक्री',
    ],
    steps: [
      {
        h: 'पहले देखते हैं कि प्रमाण क्या है',
        p: 'हाल की शादी में यह आसान है। पंद्रह साल पुरानी शादी, न निमंत्रण पत्र, न फ़ोटो — वहाँ रास्ता अलग होता है और समय ज़्यादा लगता है।',
      },
      {
        h: 'ऑनलाइन आवेदन',
        p: 'दोनों पक्षों और गवाहों का विवरण राज्य पोर्टल पर भरा जाता है, कागज़ अपलोड होते हैं और शुल्क जमा होता है।',
      },
      {
        h: 'शपथ पत्र',
        p: 'दंपत्ति का संयुक्त शपथ पत्र और गवाहों के घोषणा पत्र तैयार होकर सत्यापित होते हैं।',
      },
      {
        h: 'उपस्थिति और प्रमाण पत्र',
        p: 'तय तारीख़ पर दंपत्ति और दोनों गवाह उपस्थित होते हैं। कागज़ पूरे हों तो प्रमाण पत्र आमतौर पर उसी दिन मिल जाता है।',
      },
    ],
    timeline:
      'हाल की शादी और पूरे कागज़ हों तो आवेदन से प्रमाण पत्र तक आमतौर पर एक से दो सप्ताह। पुरानी शादी और कमज़ोर प्रमाण में ज़्यादा समय लगता है और कभी-कभी अतिरिक्त सबूत भी देने पड़ते हैं।',
    faqs: [
      {
        q: 'हमारी शादी आठ साल पहले हुई थी। क्या अब पंजीकरण में देर हो चुकी है?',
        a: 'नहीं। ऐसी कोई समय-सीमा नहीं है जिसके बाद पंजीकरण असंभव हो जाए। बदलता सिर्फ़ प्रमाण है। फ़ोटो या निमंत्रण पत्र न हो तो भार गवाहों के बयानों पर और उस दौर के ऐसे कागज़ों पर आ जाता है जो दिखाएँ कि आप पति-पत्नी के रूप में रह रहे थे।',
      },
      {
        q: 'क्या गवाह वही लोग होने चाहिए जो शादी में शामिल थे?',
        a: 'गवाह ऐसे होने चाहिए जो शपथ पर कह सकें कि वे विवाह में उपस्थित थे। माता-पिता, भाई-बहन या नज़दीकी रिश्तेदार आम तौर पर होते हैं। जो गवाह वहाँ था ही नहीं और बाद में यह कह दे, वह इतने अहम दस्तावेज़ में ऐसी दिक़्क़त खड़ी कर देता है जो आप नहीं चाहेंगे।',
      },
      {
        q: 'क्या यह कोर्ट मैरिज ही है?',
        a: 'नहीं, और इन दोनों में लगातार भ्रम होता है। पंजीकरण पहले हो चुके विवाह को दर्ज करता है। विशेष विवाह अधिनियम के तहत कोर्ट मैरिज स्वयं विवाह है, जो तीस दिन की सूचना अवधि के बाद विवाह अधिकारी के सामने संपन्न होता है।',
      },
    ],
  },
};
