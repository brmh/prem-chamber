import type { Service } from './types';

export const propertyTitleCheck: Service = {
  slug: 'property-title-verification',
  group: 'property',
  guides: ['property-title-check', 'circle-rate-ghaziabad', 'property-registration-process'],
  en: {
    title: 'Property title verification',
    alsoCalled: 'Paper check, due diligence',
    metaTitle: 'Property Title Check in Ghaziabad — Before You Buy | Prem Chamber',
    metaDesc:
      'Independent check of a seller’s chain of title before you pay. Old deeds read backwards, encumbrance position checked, authority dues and litigation traced, written opinion given.',
    problem:
      'The plot looks fine, the price is right and the broker is pushing you to pay the token amount this week. But you have no idea whether the person selling it is the only owner, whether there is a loan running on it, or whether the authority has any dues against it.',
    summary:
      'An independent reading of the seller’s papers before you commit money, ending in a written opinion that says plainly whether to proceed, what to fix first, or what to walk away from.',
    handles: [
      'Tracing the chain of ownership back through the earlier deeds',
      'Checking the encumbrance position for mortgages and charges',
      'Verifying the khatauni or authority record against what the seller claims',
      'Checking for dues with the development authority, society or municipal body',
      'Looking for pending litigation, attachment or stay over the property',
      'A written opinion listing exactly what is clean, what is missing and what is risky',
    ],
    documents: [
      'Copy of the deed through which the seller acquired the property',
      'Earlier deeds in the chain, as far back as they are available',
      'Latest khatauni, allotment letter or possession letter',
      'Property tax and electricity receipts',
      'Approved map and completion certificate for constructed property',
      'Copy of the seller’s identity proof',
    ],
    steps: [
      {
        h: 'You send whatever papers you have',
        p: 'Even photographs on WhatsApp are enough to begin. Most problems show up in the first reading of the last two deeds.',
      },
      {
        h: 'The chain is traced backwards',
        p: 'Each transfer is followed back to see that the person who sold had the right to sell, and that nothing was left half-done along the way.',
      },
      {
        h: 'Encumbrance and dues are checked',
        p: 'Registry records are searched for mortgages and charges, and the authority or society position is checked for outstanding dues.',
      },
      {
        h: 'A written opinion is given',
        p: 'Not a verbal “sab theek hai”. A short written note stating the position, the gaps, and what must be obtained before any payment.',
      },
    ],
    timeline:
      'A straightforward freehold plot with two or three deeds in the chain takes about three to five working days. Older agricultural land, disputed partitions or property that has changed hands many times takes longer.',
    faqs: [
      {
        q: 'Is this not what the bank does when it gives a loan?',
        a: 'A bank checks whether the property is good enough security for its own money, and it does that after you are already committed. That is a different question from whether you should buy it. If you are paying in cash there is no bank check at all.',
      },
      {
        q: 'The seller is a relative. Do I still need this?',
        a: 'Relationship does not fix a broken chain of title. Family property in particular tends to carry unsettled shares of other heirs, and those surface years later when you try to sell.',
      },
      {
        q: 'How much does it cost compared with what I am paying for the property?',
        a: 'A fraction of one per cent of the purchase price, in almost every case. It is the cheapest part of the transaction and the only part that can stop you from losing the rest.',
      },
    ],
  },
  hi: {
    title: 'संपत्ति के कागज़ों की जाँच',
    alsoCalled: 'टाइटल चेक, ड्यू डिलिजेंस',
    metaTitle: 'गाज़ियाबाद में प्रॉपर्टी के कागज़ों की जाँच | प्रेम चैम्बर',
    metaDesc:
      'पैसा देने से पहले विक्रेता के कागज़ों की स्वतंत्र जाँच। पुराने बैनामे पीछे तक पढ़ना, बंधक की स्थिति देखना, प्राधिकरण का बकाया और मुकदमा पता करना, और लिखित राय देना।',
    problem:
      'प्लॉट देखने में ठीक है, रेट भी सही लग रहा है, और दलाल इसी हफ़्ते बयाना देने का दबाव बना रहा है। पर आपको यह नहीं पता कि बेचने वाला अकेला मालिक है या नहीं, उस पर कोई लोन चल रहा है या नहीं, और प्राधिकरण का कोई बकाया तो नहीं है।',
    summary:
      'पैसा फँसाने से पहले विक्रेता के कागज़ों की स्वतंत्र जाँच, और अंत में लिखित राय — साफ़ शब्दों में कि आगे बढ़ें, पहले क्या ठीक कराएँ, या किस सौदे से हट जाएँ।',
    handles: [
      'पुराने बैनामों के ज़रिए मालिकाना हक की कड़ी पीछे तक देखना',
      'बंधक और भार (एनकम्ब्रेंस) की स्थिति जाँचना',
      'खतौनी या प्राधिकरण के रिकॉर्ड को विक्रेता के दावे से मिलाना',
      'विकास प्राधिकरण, सोसाइटी या नगर निगम का बकाया देखना',
      'संपत्ति पर चल रहा मुकदमा, कुर्की या स्टे पता करना',
      'लिखित राय — क्या साफ़ है, क्या कम है, और कहाँ जोखिम है',
    ],
    documents: [
      'जिस दस्तावेज़ से विक्रेता को संपत्ति मिली, उसकी नकल',
      'कड़ी के पुराने बैनामे, जितने पीछे तक उपलब्ध हों',
      'नवीनतम खतौनी, आवंटन पत्र या कब्ज़ा पत्र',
      'हाउस टैक्स और बिजली की रसीदें',
      'निर्मित संपत्ति का स्वीकृत नक्शा और पूर्णता प्रमाण पत्र',
      'विक्रेता के पहचान पत्र की नकल',
    ],
    steps: [
      {
        h: 'जो कागज़ हैं, वे भेज दीजिए',
        p: 'व्हाट्सएप पर फ़ोटो भी शुरुआत के लिए काफ़ी है। ज़्यादातर गड़बड़ियाँ पिछले दो बैनामों की पहली पढ़ाई में ही दिख जाती हैं।',
      },
      {
        h: 'कड़ी पीछे तक देखी जाती है',
        p: 'हर हस्तांतरण पीछे तक देखा जाता है कि बेचने वाले को बेचने का हक था या नहीं, और बीच में कोई काम अधूरा तो नहीं छूटा।',
      },
      {
        h: 'बंधक और बकाया की जाँच',
        p: 'रजिस्ट्री रिकॉर्ड में बंधक और भार खोजे जाते हैं, और प्राधिकरण या सोसाइटी का बकाया देखा जाता है।',
      },
      {
        h: 'लिखित राय दी जाती है',
        p: 'ज़बानी “सब ठीक है” नहीं। एक छोटा लिखित नोट जिसमें स्थिति, कमियाँ, और भुगतान से पहले क्या-क्या लेना ज़रूरी है — सब दर्ज होता है।',
      },
    ],
    timeline:
      'फ़्रीहोल्ड प्लॉट जिसकी कड़ी में दो-तीन बैनामे हों, उसमें करीब तीन से पाँच कार्यदिवस लगते हैं। पुरानी कृषि भूमि, विवादित बँटवारा या कई बार हाथ बदली संपत्ति में ज़्यादा समय लगता है।',
    faqs: [
      {
        q: 'यह काम तो बैंक लोन देते समय कर ही देता है न?',
        a: 'बैंक यह देखता है कि संपत्ति उसके अपने पैसे की ज़मानत के लिए ठीक है या नहीं, और वह भी तब जब आप सौदा पक्का कर चुके होते हैं। यह सवाल अलग है कि आपको यह संपत्ति खरीदनी चाहिए या नहीं। और अगर आप नकद दे रहे हैं तो बैंक की जाँच होती ही नहीं।',
      },
      {
        q: 'विक्रेता रिश्तेदार है, फिर भी ज़रूरत है?',
        a: 'रिश्ता कागज़ों की टूटी कड़ी नहीं जोड़ता। पारिवारिक संपत्ति में तो अक्सर दूसरे वारिसों के हिस्से अनसुलझे पड़े रहते हैं, और वे सालों बाद तब सामने आते हैं जब आप बेचने जाते हैं।',
      },
      {
        q: 'संपत्ति की कीमत के मुकाबले इसका खर्च कितना पड़ता है?',
        a: 'लगभग हर मामले में खरीद मूल्य के एक प्रतिशत के भी छोटे हिस्से जितना। पूरे सौदे का यह सबसे सस्ता हिस्सा है, और अकेला ऐसा हिस्सा जो बाक़ी पैसा डूबने से रोक सकता है।',
      },
    ],
  },
};
