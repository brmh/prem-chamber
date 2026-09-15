import type { Service } from './types';

export const powerOfAttorney: Service = {
  slug: 'power-of-attorney',
  group: 'documents',
  guides: ['power-of-attorney-guide', 'property-registration-process'],
  en: {
    title: 'Power of attorney',
    alsoCalled: 'Mukhtarnama, GPA, SPA',
    metaTitle: 'Power of Attorney (Mukhtarnama) in Ghaziabad | Prem Chamber',
    metaDesc:
      'General and special power of attorney drafted and registered in Ghaziabad, including attorney executed from abroad. What a GPA can and cannot do for property, and how to revoke one.',
    problem:
      'You are posted outside the city, or abroad, and a registry or a bank formality needs someone physically present. Or the opposite — someone is asking you to buy a property on a general power of attorney instead of a sale deed, and it sounds like a shortcut.',
    summary:
      'Drafting a power of attorney that is narrow enough to be safe and wide enough to be useful, getting it registered or adjudicated as the situation requires, and advising on what a GPA cannot legally do.',
    handles: [
      'Special power of attorney for a single, defined act such as one registry',
      'General power of attorney for ongoing management of property or a business',
      'Power of attorney executed abroad, and what has to be done after it reaches India',
      'Registration at the Sub-Registrar office where the law requires it',
      'Revocation of a power of attorney that is no longer wanted',
    ],
    documents: [
      'Identity and address proof of the person giving the power and the attorney',
      'Photographs of both',
      'Property documents, where the power relates to property',
      'Two witnesses with identity proof',
      'For a document executed abroad: the original, and details of where it was attested',
    ],
    steps: [
      {
        h: 'The powers are defined narrowly',
        p: 'A general power that says “to do all acts” is the one that gets misused. Each act the attorney may perform is listed, and the rest is excluded.',
      },
      {
        h: 'Execution',
        p: 'The document is signed before witnesses. Where it is executed outside India, it has to be attested at the Indian mission or notarised and apostilled, then stamped after it arrives.',
      },
      {
        h: 'Registration or adjudication',
        p: 'A power of attorney that authorises the sale of immovable property has to be registered. Others may be notarised, depending on what they are for.',
      },
      {
        h: 'Revocation, when the work is done',
        p: 'A power of attorney does not lapse on its own. When the purpose is over, it should be revoked in writing and the revocation notified.',
      },
    ],
    timeline:
      'A special power of attorney can usually be drafted and registered in one to two working days. A document executed abroad depends on how quickly it reaches India.',
    faqs: [
      {
        q: 'Can I buy property on a general power of attorney instead of a sale deed?',
        a: 'This is the single most common way people lose money on property in this region. A GPA does not transfer ownership. The Supreme Court has held that sale by GPA, agreement and will does not convey title. If someone is offering property only on GPA, ask why a sale deed is not possible, because there is usually a reason and it is rarely a good one.',
      },
      {
        q: 'My father is unwell and cannot come to the registry office. What are the options?',
        a: 'If he is of sound mind, he can execute a power of attorney in favour of someone. The Sub-Registrar can also be requested to attend at the residence in appropriate cases, for a prescribed fee. What cannot be done is anyone signing on his behalf without a valid power.',
      },
      {
        q: 'Does a power of attorney end when the person who gave it dies?',
        a: 'Yes. A power of attorney is revoked by the death of the person who gave it, unless it is one coupled with an interest. Anything done by the attorney after that date is open to challenge.',
      },
    ],
  },
  hi: {
    title: 'मुख्तारनामा',
    alsoCalled: 'पावर ऑफ़ अटॉर्नी, जीपीए, एसपीए',
    metaTitle: 'गाज़ियाबाद में मुख्तारनामा — तैयारी और रजिस्ट्री | प्रेम चैम्बर',
    metaDesc:
      'गाज़ियाबाद में आम और ख़ास मुख्तारनामा तैयार कराना और पंजीकरण, विदेश से निष्पादित मुख्तारनामा सहित। जीपीए से संपत्ति में क्या हो सकता है और क्या नहीं, और उसे रद्द कैसे करें।',
    problem:
      'आप शहर से बाहर या विदेश में हैं, और रजिस्ट्री या बैंक के किसी काम में किसी का शारीरिक रूप से मौजूद होना ज़रूरी है। या इसका उल्टा — कोई आपसे कह रहा है कि बैनामे की जगह जनरल पावर ऑफ़ अटॉर्नी पर प्रॉपर्टी ले लीजिए, और यह छोटा रास्ता लग रहा है।',
    summary:
      'ऐसा मुख्तारनामा तैयार करना जो सुरक्षित रहने लायक सीमित हो और काम चलने लायक पर्याप्त, ज़रूरत के अनुसार उसका पंजीकरण या अभिनिर्णय, और यह बताना कि जीपीए कानूनन क्या नहीं कर सकता।',
    handles: [
      'किसी एक तय काम, जैसे एक रजिस्ट्री, के लिए ख़ास मुख्तारनामा',
      'संपत्ति या कारोबार के लगातार प्रबंधन के लिए आम मुख्तारनामा',
      'विदेश में निष्पादित मुख्तारनामा, और भारत पहुँचने के बाद क्या करना होता है',
      'जहाँ कानून माँगता है वहाँ सब-रजिस्ट्रार कार्यालय में पंजीकरण',
      'अनचाहे हो चुके मुख्तारनामे को रद्द कराना',
    ],
    documents: [
      'मुख्तारनामा देने वाले और मुख्तार, दोनों का पहचान व पते का प्रमाण',
      'दोनों की फ़ोटो',
      'संपत्ति से जुड़ा मामला हो तो संपत्ति के कागज़',
      'पहचान पत्र सहित दो गवाह',
      'विदेश में निष्पादित दस्तावेज़ के लिए: मूल प्रति और कहाँ सत्यापित हुआ उसका विवरण',
    ],
    steps: [
      {
        h: 'अधिकार सीमित रूप से तय होते हैं',
        p: '“सभी कार्य करने” वाला आम मुख्तारनामा ही दुरुपयोग का शिकार बनता है। मुख्तार कौन-कौन से काम कर सकता है, हर काम गिनाया जाता है और बाक़ी बाहर रखा जाता है।',
      },
      {
        h: 'निष्पादन',
        p: 'दस्तावेज़ गवाहों के सामने हस्ताक्षरित होता है। भारत से बाहर निष्पादित होने पर उसे भारतीय दूतावास में सत्यापित या नोटरी व एपोस्टिल कराना होता है, और भारत पहुँचने पर स्टाम्प लगता है।',
      },
      {
        h: 'पंजीकरण या अभिनिर्णय',
        p: 'जो मुख्तारनामा अचल संपत्ति बेचने का अधिकार देता है, उसका पंजीकरण अनिवार्य है। बाक़ी, काम के अनुसार, नोटरी से भी चल सकते हैं।',
      },
      {
        h: 'काम पूरा होने पर रद्द कराना',
        p: 'मुख्तारनामा अपने आप ख़त्म नहीं होता। मक़सद पूरा हो जाने पर उसे लिखित में रद्द कराना चाहिए और रद्दीकरण की सूचना देनी चाहिए।',
      },
    ],
    timeline:
      'ख़ास मुख्तारनामा आमतौर पर एक से दो कार्यदिवस में तैयार होकर पंजीकृत हो जाता है। विदेश में निष्पादित दस्तावेज़ इस पर निर्भर करता है कि वह भारत कितनी जल्दी पहुँचता है।',
    faqs: [
      {
        q: 'क्या मैं बैनामे की जगह जनरल पावर ऑफ़ अटॉर्नी पर प्रॉपर्टी ख़रीद सकता हूँ?',
        a: 'इस इलाक़े में प्रॉपर्टी में पैसा डूबने का यह सबसे आम तरीक़ा है। जीपीए से मालिकाना हक हस्तांतरित नहीं होता। सर्वोच्च न्यायालय ने कहा है कि जीपीए, एग्रीमेंट और वसीयत के ज़रिए बिक्री से टाइटल नहीं जाता। अगर कोई संपत्ति सिर्फ़ जीपीए पर दे रहा है तो पूछिए कि बैनामा क्यों नहीं हो सकता — वजह आमतौर पर होती है, और अच्छी कम ही होती है।',
      },
      {
        q: 'पिताजी अस्वस्थ हैं, रजिस्ट्री दफ़्तर नहीं आ सकते। क्या रास्ता है?',
        a: 'अगर वे स्वस्थ मस्तिष्क के हैं तो किसी के पक्ष में मुख्तारनामा कर सकते हैं। उपयुक्त मामलों में निर्धारित शुल्क देकर सब-रजिस्ट्रार से निवास पर आने का अनुरोध भी किया जा सकता है। जो नहीं हो सकता वह यह है कि बिना वैध मुख्तारनामे के कोई उनकी ओर से हस्ताक्षर कर दे।',
      },
      {
        q: 'क्या मुख्तारनामा देने वाले की मृत्यु पर वह ख़त्म हो जाता है?',
        a: 'हाँ। देने वाले की मृत्यु से मुख्तारनामा रद्द हो जाता है, सिवाय उस स्थिति के जहाँ उसके साथ कोई हित जुड़ा हो। उस तारीख़ के बाद मुख्तार ने जो भी किया, उसे चुनौती दी जा सकती है।',
      },
    ],
  },
};
