import type { Service } from './types';

export const willRegistration: Service = {
  slug: 'will-registration',
  group: 'family',
  guides: ['will-vasiyat-guide', 'property-registration-process'],
  en: {
    title: 'Will drafting and registration',
    alsoCalled: 'Vasiyat',
    metaTitle: 'Will (Vasiyat) Drafting & Registration, Ghaziabad | Prem Chamber',
    metaDesc:
      'Drafting a will that holds up, and registering it at the Ghaziabad Sub-Registrar office. Witnesses, medical fitness certificate, safe custody and later changes explained.',
    problem:
      'You want the house to go to one child, or you want to make sure a dependent is looked after, and you keep being told that a plain paper will written at home is enough. It sometimes is. It is also the version that gets challenged after you are no longer there to explain it.',
    summary:
      'Drafting a will in language that cannot be twisted later, arranging proper witnesses, and registering it so that its existence and date are on official record.',
    handles: [
      'Understanding the family position before anything is drafted',
      'Listing the property precisely, so no asset is left ambiguous',
      'Naming an executor and providing for what happens if a beneficiary dies first',
      'Arranging two witnesses who are not beneficiaries',
      'A doctor’s certificate of sound mind where the testator is elderly or unwell',
      'Registration at the Sub-Registrar office and safe custody of the original',
    ],
    documents: [
      'Identity and address proof of the person making the will',
      'Property papers for each asset being dealt with',
      'Identity proof of two witnesses',
      'Identity details of the beneficiaries',
      'Medical fitness certificate, where age or illness could later be questioned',
      'Passport photographs',
    ],
    steps: [
      {
        h: 'A private conversation first',
        p: 'What the family looks like, who is dependent, what has already been given to whom, and whether anyone is likely to object.',
      },
      {
        h: 'Drafting',
        p: 'Each asset is described so that it cannot be confused with another. Unequal shares are explained in the will itself, because an unexplained inequality is the usual ground of challenge.',
      },
      {
        h: 'Signing before witnesses',
        p: 'The testator signs in the presence of two witnesses who sign in turn. Neither witness may be a beneficiary or the spouse of one.',
      },
      {
        h: 'Registration',
        p: 'The testator and both witnesses attend the Sub-Registrar office. Registration is optional in law, but it puts the date and the fact of execution beyond argument.',
      },
    ],
    timeline:
      'A straightforward will is usually drafted, signed and registered within three to four working days. Where there are multiple properties or a likely dispute, more time is spent on the drafting than on the registration.',
    faqs: [
      {
        q: 'Is registration of a will compulsory?',
        a: 'No. An unregistered will is perfectly valid if it is properly signed and witnessed. Registration does not make a bad will good, but it makes it much harder for someone to claim afterwards that the will is a forgery or was made on some other date.',
      },
      {
        q: 'Can I change my will later?',
        a: 'Yes, as many times as you like while you are of sound mind. A later will revokes the earlier one, and a small change can also be made through a codicil. If the earlier will was registered, register the new one too.',
      },
      {
        q: 'My son lives abroad. Can he be the executor?',
        a: 'He can, but consider the practical side. An executor who has to obtain probate or deal with the authority from another country will take much longer. Many people name a local executor and leave the property to the person abroad.',
      },
    ],
  },
  hi: {
    title: 'वसीयत तैयार कराना और रजिस्ट्री',
    alsoCalled: 'विल',
    metaTitle: 'गाज़ियाबाद में वसीयत तैयार कराना और रजिस्ट्री | प्रेम चैम्बर',
    metaDesc:
      'ऐसी वसीयत तैयार कराना जो बाद में टिके, और गाज़ियाबाद सब-रजिस्ट्रार कार्यालय में उसका पंजीकरण। गवाह, डॉक्टर का प्रमाण पत्र, सुरक्षित रखरखाव और बाद में बदलाव — सब समझाया जाता है।',
    problem:
      'आप चाहते हैं कि मकान किसी एक बच्चे को जाए, या किसी आश्रित का इंतज़ाम हो जाए, और आपसे बार-बार कहा जा रहा है कि घर पर सादे कागज़ पर लिखी वसीयत काफ़ी है। कभी-कभी होती भी है। पर चुनौती भी उसी को दी जाती है, तब जब आप समझाने के लिए मौजूद नहीं होते।',
    summary:
      'ऐसी भाषा में वसीयत तैयार करना जिसे बाद में घुमाया न जा सके, सही गवाहों की व्यवस्था, और पंजीकरण ताकि उसका होना और तारीख़ सरकारी रिकॉर्ड पर आ जाए।',
    handles: [
      'कुछ भी लिखने से पहले परिवार की स्थिति समझना',
      'हर संपत्ति का सटीक विवरण, ताकि कोई चीज़ अस्पष्ट न रह जाए',
      'निष्पादक (एग्ज़ीक्यूटर) नियुक्त करना और यह तय करना कि कोई वारिस पहले न रहे तो क्या होगा',
      'दो ऐसे गवाहों की व्यवस्था जो स्वयं वारिस न हों',
      'वसीयतकर्ता की उम्र या बीमारी होने पर डॉक्टर का स्वस्थ मस्तिष्क प्रमाण पत्र',
      'सब-रजिस्ट्रार कार्यालय में पंजीकरण और मूल प्रति की सुरक्षित सँभाल',
    ],
    documents: [
      'वसीयत करने वाले का पहचान और पते का प्रमाण',
      'हर संपत्ति के कागज़ जिनका ज़िक्र करना है',
      'दो गवाहों का पहचान पत्र',
      'वारिसों की पहचान संबंधी जानकारी',
      'जहाँ उम्र या बीमारी पर बाद में सवाल उठ सकता हो, वहाँ डॉक्टर का प्रमाण पत्र',
      'पासपोर्ट साइज़ फ़ोटो',
    ],
    steps: [
      {
        h: 'पहले एक निजी बातचीत',
        p: 'परिवार कैसा है, कौन आश्रित है, किसे पहले क्या दिया जा चुका है, और किसके आपत्ति करने की आशंका है।',
      },
      {
        h: 'वसीयत तैयार करना',
        p: 'हर संपत्ति ऐसे लिखी जाती है कि किसी दूसरी से भ्रम न हो। असमान हिस्सों की वजह वसीयत में ही लिखी जाती है, क्योंकि बिना कारण बताई गई असमानता ही चुनौती का आम आधार बनती है।',
      },
      {
        h: 'गवाहों के सामने हस्ताक्षर',
        p: 'वसीयतकर्ता दो गवाहों के सामने हस्ताक्षर करता है और गवाह अपने हस्ताक्षर करते हैं। कोई भी गवाह स्वयं वारिस या वारिस का जीवनसाथी नहीं होना चाहिए।',
      },
      {
        h: 'पंजीकरण',
        p: 'वसीयतकर्ता और दोनों गवाह सब-रजिस्ट्रार कार्यालय जाते हैं। कानूनन पंजीकरण अनिवार्य नहीं है, पर इससे तारीख़ और निष्पादन का तथ्य विवाद से बाहर हो जाता है।',
      },
    ],
    timeline:
      'सीधी-सादी वसीयत आमतौर पर तीन से चार कार्यदिवस में तैयार होकर पंजीकृत हो जाती है। कई संपत्तियाँ हों या विवाद की आशंका हो, तो समय पंजीकरण में नहीं, तैयारी में ज़्यादा लगता है।',
    faqs: [
      {
        q: 'क्या वसीयत का पंजीकरण अनिवार्य है?',
        a: 'नहीं। बिना पंजीकरण वाली वसीयत भी पूरी तरह वैध है, बशर्ते वह ठीक से हस्ताक्षरित और गवाहों द्वारा प्रमाणित हो। पंजीकरण किसी कमज़ोर वसीयत को मज़बूत नहीं बनाता, पर बाद में यह कहना बहुत मुश्किल कर देता है कि वसीयत जाली है या किसी और तारीख़ की है।',
      },
      {
        q: 'क्या मैं बाद में वसीयत बदल सकता हूँ?',
        a: 'हाँ, जब तक आप स्वस्थ मस्तिष्क के हैं, जितनी बार चाहें। बाद वाली वसीयत पहली को रद्द कर देती है, और छोटा बदलाव कोडिसिल से भी हो सकता है। पहली वसीयत पंजीकृत थी तो नई भी पंजीकृत करा लीजिए।',
      },
      {
        q: 'मेरा बेटा विदेश में रहता है। क्या वह निष्पादक बन सकता है?',
        a: 'बन सकता है, पर व्यावहारिक पक्ष भी देखिए। जिस निष्पादक को दूसरे देश से प्रोबेट लेना पड़े या प्राधिकरण से निपटना पड़े, उसे कहीं ज़्यादा समय लगेगा। बहुत लोग निष्पादक स्थानीय रखते हैं और संपत्ति विदेश वाले के नाम छोड़ते हैं।',
      },
    ],
  },
};
