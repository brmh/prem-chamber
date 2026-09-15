import type { Service } from './types';

export const giftDeed: Service = {
  slug: 'gift-deed',
  group: 'property',
  guides: ['stamp-duty-ghaziabad', 'property-registration-process', 'will-vasiyat-guide'],
  en: {
    title: 'Gift deed and family transfer',
    alsoCalled: 'Daan patra, hibanama',
    metaTitle: 'Gift Deed (Daan Patra) Registration in Ghaziabad | Prem Chamber',
    metaDesc:
      'Registering a gift deed for property transferred within a family in Ghaziabad. Reduced stamp duty for blood relations, acceptance during the donor’s lifetime, and when a will is the better route.',
    problem:
      'You want to transfer a house or a share of land to a son, daughter or spouse while you are still alive, and you are hearing two different things: that it costs almost nothing within family, and that it costs full stamp duty. Both are partly right, depending on the relationship.',
    summary:
      'Drafting and registering a gift deed, with the reduced stamp duty available for transfers to specified blood relations, and the acceptance clause done properly so the gift cannot be questioned later.',
    handles: [
      'Checking whether the relationship qualifies for the concessional rate',
      'Drafting the deed with a clear acceptance by the person receiving the gift',
      'Deciding between a gift deed, a relinquishment deed and a will for your situation',
      'Registration at the Sub-Registrar office with both parties and two witnesses',
      'Mutation of the record after registration, so the change reaches the revenue or authority record',
    ],
    documents: [
      'Title documents of the property being gifted',
      'Proof of relationship between donor and donee',
      'Identity and address proof of both parties and two witnesses',
      'Latest khatauni or house tax receipt',
      'Photographs of donor and donee',
      'No-objection from the authority or society, where applicable',
    ],
    steps: [
      {
        h: 'Relationship and route are decided first',
        p: 'A transfer to a son is treated very differently from a transfer to a nephew. Sometimes a will costs nothing now and achieves the same thing later.',
      },
      {
        h: 'Drafting, including acceptance',
        p: 'A gift is not complete until it is accepted by the person receiving it, during the lifetime of the donor. That acceptance goes into the deed itself.',
      },
      {
        h: 'Registration',
        p: 'A gift of immovable property must be registered. Both parties and two witnesses attend the Sub-Registrar office.',
      },
      {
        h: 'Mutation',
        p: 'Registration transfers ownership, but the revenue or authority record still has the old name until mutation is applied for. That is the step most people skip.',
      },
    ],
    timeline:
      'Usually three to five working days from papers to registration where the relationship is straightforward and the property is free of dues.',
    faqs: [
      {
        q: 'Is a gift deed cheaper than a sale deed within the family?',
        a: 'For transfers to specified blood relations Uttar Pradesh allows a concessional flat stamp duty instead of the full percentage rate. Who counts as a specified relation is defined narrowly, so confirm the relationship before assuming the concession applies. The rate should be checked against the current notification at the time of registration.',
      },
      {
        q: 'Can a gift deed be cancelled later?',
        a: 'Once a gift is validly executed, accepted and registered, the donor cannot simply take it back. It can be set aside on limited grounds such as fraud or coercion, or where the deed itself provides for revocation on a stated condition. If you want to retain control, a will is the safer instrument.',
      },
      {
        q: 'Should I gift the property now or leave it in a will?',
        a: 'A gift takes effect immediately and you lose control of the property. A will takes effect only after your death and can be changed any number of times. Where the concern is care in old age, this difference matters more than the stamp duty saved.',
      },
    ],
  },
  hi: {
    title: 'दान पत्र और पारिवारिक हस्तांतरण',
    alsoCalled: 'गिफ्ट डीड, हिबानामा',
    metaTitle: 'गाज़ियाबाद में दान पत्र (गिफ्ट डीड) रजिस्ट्री | प्रेम चैम्बर',
    metaDesc:
      'गाज़ियाबाद में परिवार के भीतर संपत्ति हस्तांतरण के लिए दान पत्र का पंजीकरण। रक्त संबंधियों के लिए कम स्टाम्प ड्यूटी, दाता के जीवनकाल में स्वीकृति, और कब वसीयत बेहतर रास्ता है।',
    problem:
      'आप जीते-जी मकान या ज़मीन का हिस्सा बेटे, बेटी या जीवनसाथी के नाम करना चाहते हैं, और आपको दो अलग बातें सुनने को मिल रही हैं — कि परिवार में तो लगभग मुफ़्त हो जाता है, और कि पूरी स्टाम्प ड्यूटी लगती है। रिश्ते के हिसाब से दोनों में थोड़ी-थोड़ी सच्चाई है।',
    summary:
      'दान पत्र तैयार कराना और पंजीकृत कराना, तय रक्त संबंधियों को मिलने वाली कम स्टाम्प ड्यूटी के साथ, और स्वीकृति की शर्त ठीक से डालकर ताकि दान पर बाद में सवाल न उठे।',
    handles: [
      'यह जाँचना कि रिश्ता रियायती दर के दायरे में आता है या नहीं',
      'दान लेने वाले की स्पष्ट स्वीकृति सहित दस्तावेज़ तैयार करना',
      'आपकी स्थिति में दान पत्र, हक त्याग पत्र और वसीयत में से सही रास्ता चुनना',
      'दोनों पक्षों और दो गवाहों के साथ सब-रजिस्ट्रार कार्यालय में पंजीकरण',
      'पंजीकरण के बाद दाखिल-खारिज, ताकि बदलाव राजस्व या प्राधिकरण के रिकॉर्ड तक पहुँचे',
    ],
    documents: [
      'जिस संपत्ति का दान करना है उसके स्वामित्व के कागज़',
      'दाता और ग्रहीता के बीच रिश्ते का प्रमाण',
      'दोनों पक्षों और दो गवाहों का पहचान व पते का प्रमाण',
      'नवीनतम खतौनी या हाउस टैक्स की रसीद',
      'दाता और ग्रहीता की फ़ोटो',
      'जहाँ लागू हो वहाँ प्राधिकरण या सोसाइटी की अनापत्ति',
    ],
    steps: [
      {
        h: 'पहले रिश्ता और रास्ता तय होता है',
        p: 'बेटे के नाम हस्तांतरण और भतीजे के नाम हस्तांतरण में बहुत फ़र्क़ है। कई बार वसीयत अभी कुछ खर्च नहीं कराती और आगे चलकर वही काम कर देती है।',
      },
      {
        h: 'तैयारी, स्वीकृति सहित',
        p: 'दान तब तक पूरा नहीं होता जब तक लेने वाला दाता के जीवनकाल में उसे स्वीकार न कर ले। यह स्वीकृति दस्तावेज़ में ही दर्ज होती है।',
      },
      {
        h: 'पंजीकरण',
        p: 'अचल संपत्ति के दान का पंजीकरण अनिवार्य है। दोनों पक्ष और दो गवाह सब-रजिस्ट्रार कार्यालय जाते हैं।',
      },
      {
        h: 'दाखिल-खारिज',
        p: 'पंजीकरण से मालिकाना हक चला जाता है, पर राजस्व या प्राधिकरण के रिकॉर्ड में नाम तब तक पुराना ही रहता है जब तक दाखिल-खारिज का आवेदन न हो। यही कदम ज़्यादातर लोग छोड़ देते हैं।',
      },
    ],
    timeline:
      'रिश्ता सीधा हो और संपत्ति पर कोई बकाया न हो तो कागज़ों से पंजीकरण तक आमतौर पर तीन से पाँच कार्यदिवस।',
    faqs: [
      {
        q: 'क्या परिवार में दान पत्र बैनामे से सस्ता पड़ता है?',
        a: 'तय रक्त संबंधियों को हस्तांतरण पर उत्तर प्रदेश में पूरी प्रतिशत दर की जगह रियायती एकमुश्त स्टाम्प ड्यूटी की व्यवस्था है। कौन “तय संबंधी” माना जाएगा, यह सीमित रूप से परिभाषित है — इसलिए रियायत मान लेने से पहले रिश्ता जाँच लीजिए। दर पंजीकरण के समय की मौजूदा अधिसूचना से मिलानी चाहिए।',
      },
      {
        q: 'क्या दान पत्र बाद में रद्द हो सकता है?',
        a: 'एक बार दान विधिवत निष्पादित, स्वीकृत और पंजीकृत हो जाए तो दाता उसे यूँ ही वापस नहीं ले सकता। सीमित आधारों पर — जैसे धोखाधड़ी या दबाव — या जहाँ दस्तावेज़ में ही किसी शर्त पर वापसी की व्यवस्था हो, वहीं रद्द हो सकता है। नियंत्रण अपने पास रखना है तो वसीयत सुरक्षित रास्ता है।',
      },
      {
        q: 'अभी दान कर दूँ या वसीयत में छोड़ूँ?',
        a: 'दान तुरंत प्रभावी होता है और संपत्ति पर आपका नियंत्रण ख़त्म हो जाता है। वसीयत आपके बाद प्रभावी होती है और जितनी बार चाहें बदली जा सकती है। जहाँ चिंता बुढ़ापे में देखभाल की हो, वहाँ यह फ़र्क़ बचने वाली स्टाम्प ड्यूटी से ज़्यादा मायने रखता है।',
      },
    ],
  },
};
