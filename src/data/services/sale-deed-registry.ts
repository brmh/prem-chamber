import type { Service } from './types';

export const saleDeedRegistry: Service = {
    slug: 'sale-deed-registry',
    group: 'property',
    guides: ['stamp-duty-ghaziabad', 'property-registration-process', 'circle-rate-ghaziabad'],
    en: {
      title: 'Sale deed and property registry',
      alsoCalled: 'Bainama, registry',
      metaTitle: 'Sale Deed & Property Registry in Ghaziabad | Prem Chamber',
      metaDesc:
        'Sale deed drafting and registry at the Ghaziabad Sub-Registrar office. Stamp duty working, circle rate check, document preparation and appearance on the day of registration.',
      problem:
        'You have agreed a price and paid a token amount. Now the other side wants the registry done quickly, and you are not sure whether the stamp duty being quoted is right, whether the seller actually has clean title, or what happens if the circle rate is higher than what you are paying.',
      summary:
        'Drafting the sale deed, working out the correct stamp duty against the circle rate, getting the documents in order, and appearing with you at the Sub-Registrar office on the day of registration.',
      handles: [
        'Reading the seller’s chain of documents before any money moves',
        'Drafting the sale deed with the correct description of the property and the schedule',
        'Calculating stamp duty on the higher of circle rate and consideration, including the rebate where the buyer is a woman',
        'Getting e-stamp and the registration fee receipt prepared',
        'Booking the slot on the IGRSUP portal and appearing at the Sub-Registrar office',
        'Collecting the registered deed and handing over a certified copy',
      ],
      documents: [
        'Previous sale deed or allotment letter of the seller (chain of title)',
        'Latest khatauni or property tax receipt',
        'Identity and address proof of buyer, seller and two witnesses',
        'PAN card, or Form 60 where PAN is not available',
        'Photographs of buyer and seller',
        'No-dues certificate from the development authority or society, where it applies',
        'Approved map, where the property is a constructed unit',
      ],
      steps: [
        {
          h: 'Documents are read first',
          p: 'Before anything is drafted, the seller’s chain of title is read backwards to see how the property came to them and whether anything is missing or mortgaged.',
        },
        {
          h: 'Valuation and stamp duty are worked out',
          p: 'The circle rate for that locality is applied to the area, and compared with the price actually being paid. Stamp duty is charged on whichever is higher.',
        },
        {
          h: 'The deed is drafted and read out to both sides',
          p: 'The description, boundaries, payment schedule and possession clause are confirmed by both parties before anything is printed on stamp paper.',
        },
        {
          h: 'E-stamp is purchased and the slot is booked',
          p: 'The e-stamp certificate and registration fee are generated, and the appointment at the Sub-Registrar office is fixed on the portal.',
        },
        {
          h: 'Registration at the Sub-Registrar office',
          p: 'Both parties and two witnesses attend. Photographs and biometrics are taken, the deed is admitted and the endorsement is done.',
        },
        {
          h: 'Registered deed is collected',
          p: 'The original is returned after scanning. Keep it safe; a certified copy can always be obtained later if the original is lost.',
        },
      ],
      timeline:
        'Where the papers are clean, drafting to registration usually takes three to seven working days. A weak chain of title, a pending mortgage or a missing no-dues certificate can add several weeks.',
      faqs: [
        {
          q: 'The seller says stamp duty can be saved by writing a lower price in the deed. Should I agree?',
          a: 'No. Stamp duty in Uttar Pradesh is payable on the circle rate or the actual consideration, whichever is higher, so writing a lower figure does not reduce the duty below the circle rate anyway. What it does do is under-record your own purchase price, which hurts you when you sell and can attract proceedings for under-valuation.',
        },
        {
          q: 'Do both buyer and seller have to be physically present?',
          a: 'Yes, unless one of them has executed a registered power of attorney in favour of someone else. Two witnesses with their own identity proof must also attend.',
        },
        {
          q: 'Is a notarised agreement to sell the same as a registry?',
          a: 'No. An agreement to sell records a promise. Ownership passes only on a registered sale deed. Many disputes in Ghaziabad start with a buyer who paid most of the money against an unregistered agreement.',
        },
      ],
    },
    hi: {
      title: 'बैनामा और रजिस्ट्री',
      alsoCalled: 'सेल डीड, रजिस्ट्री',
      metaTitle: 'गाज़ियाबाद में बैनामा और रजिस्ट्री | प्रेम चैम्बर',
      metaDesc:
        'गाज़ियाबाद सब-रजिस्ट्रार कार्यालय में बैनामा तैयार कराना और रजिस्ट्री। स्टाम्प ड्यूटी की गणना, सर्किल रेट की जाँच, कागज़ों की तैयारी और रजिस्ट्री के दिन साथ उपस्थिति।',
      problem:
        'रेट तय हो गया है, बयाना भी दे दिया है। अब सामने वाला जल्दी रजिस्ट्री कराना चाहता है, और आपको यह साफ़ नहीं है कि जो स्टाम्प ड्यूटी बताई जा रही है वह सही है या नहीं, विक्रेता के कागज़ पूरे हैं या नहीं, और अगर सर्किल रेट आपकी तय कीमत से ज़्यादा निकला तो क्या होगा।',
      summary:
        'बैनामा तैयार करना, सर्किल रेट के हिसाब से सही स्टाम्प ड्यूटी निकालना, कागज़ पूरे कराना, और रजिस्ट्री के दिन सब-रजिस्ट्रार कार्यालय में आपके साथ उपस्थित रहना।',
      handles: [
        'पैसा चलने से पहले विक्रेता के पुराने कागज़ों की पूरी कड़ी पढ़ना',
        'संपत्ति का सही विवरण और चौहद्दी डालकर बैनामा तैयार करना',
        'सर्किल रेट और तय कीमत में जो ज़्यादा हो उस पर स्टाम्प ड्यूटी निकालना, महिला क्रेता की छूट सहित',
        'ई-स्टाम्प और रजिस्ट्रेशन फ़ीस की रसीद तैयार कराना',
        'IGRSUP पोर्टल पर स्लॉट बुक करना और सब-रजिस्ट्रार कार्यालय में उपस्थित होना',
        'रजिस्टर्ड बैनामा वापस लेना और प्रमाणित प्रति सौंपना',
      ],
      documents: [
        'विक्रेता का पिछला बैनामा या आवंटन पत्र (कागज़ों की कड़ी)',
        'नवीनतम खतौनी या हाउस टैक्स की रसीद',
        'क्रेता, विक्रेता और दो गवाहों का पहचान व पते का प्रमाण',
        'पैन कार्ड, या पैन न होने पर फ़ॉर्म 60',
        'क्रेता और विक्रेता की फ़ोटो',
        'जहाँ लागू हो वहाँ विकास प्राधिकरण या सोसाइटी का अनापत्ति प्रमाण पत्र',
        'निर्मित संपत्ति होने पर स्वीकृत नक्शा',
      ],
      steps: [
        {
          h: 'पहले कागज़ पढ़े जाते हैं',
          p: 'कुछ भी लिखने से पहले विक्रेता के कागज़ पीछे तक पढ़े जाते हैं कि संपत्ति उन तक पहुँची कैसे, कहीं कोई कड़ी टूटी तो नहीं, और कहीं बंधक तो नहीं है।',
        },
        {
          h: 'मूल्यांकन और स्टाम्प ड्यूटी',
          p: 'उस मोहल्ले का सर्किल रेट क्षेत्रफल पर लगाया जाता है और तय कीमत से मिलाया जाता है। दोनों में जो ज़्यादा हो, ड्यूटी उसी पर लगती है।',
        },
        {
          h: 'बैनामा तैयार होकर दोनों पक्षों को पढ़कर सुनाया जाता है',
          p: 'विवरण, चौहद्दी, भुगतान का विवरण और कब्ज़े की शर्त — स्टाम्प पर छपने से पहले दोनों पक्ष इन्हें पक्का कर लेते हैं।',
        },
        {
          h: 'ई-स्टाम्प और स्लॉट',
          p: 'ई-स्टाम्प प्रमाण पत्र और रजिस्ट्रेशन फ़ीस बनवाई जाती है, और पोर्टल पर सब-रजिस्ट्रार कार्यालय का समय तय होता है।',
        },
        {
          h: 'सब-रजिस्ट्रार कार्यालय में रजिस्ट्री',
          p: 'दोनों पक्ष और दो गवाह उपस्थित होते हैं। फ़ोटो और बायोमेट्रिक लिए जाते हैं, दस्तावेज़ स्वीकार होकर उस पर पृष्ठांकन होता है।',
        },
        {
          h: 'रजिस्टर्ड बैनामा वापस',
          p: 'स्कैनिंग के बाद मूल दस्तावेज़ वापस मिल जाता है। इसे सँभालकर रखिए; मूल खो जाने पर बाद में प्रमाणित प्रति निकाली जा सकती है।',
        },
      ],
      timeline:
        'कागज़ साफ़ हों तो तैयारी से रजिस्ट्री तक आमतौर पर तीन से सात कार्यदिवस लगते हैं। कागज़ों की कड़ी कमज़ोर हो, बंधक चल रहा हो या अनापत्ति प्रमाण पत्र न हो तो कई हफ़्ते लग सकते हैं।',
      faqs: [
        {
          q: 'विक्रेता कह रहा है कि बैनामे में कम रेट लिखकर स्टाम्प बचाया जा सकता है। मान लूँ?',
          a: 'नहीं। उत्तर प्रदेश में स्टाम्प ड्यूटी सर्किल रेट या वास्तविक कीमत, जो ज़्यादा हो, उस पर लगती है — इसलिए कम रेट लिखने से ड्यूटी सर्किल रेट से नीचे जाती ही नहीं। हाँ, इससे आपकी अपनी खरीद कीमत कागज़ों में कम दर्ज हो जाती है, जो आगे बेचते समय आपको ही नुकसान देती है और कम मूल्यांकन की कार्रवाई भी बुला सकती है।',
        },
        {
          q: 'क्या क्रेता और विक्रेता दोनों का उपस्थित होना ज़रूरी है?',
          a: 'हाँ, जब तक कि किसी एक ने किसी और के पक्ष में रजिस्टर्ड मुख्तारनामा न किया हो। साथ में दो गवाह भी अपने पहचान पत्र के साथ आने चाहिए।',
        },
        {
          q: 'नोटरी वाला एग्रीमेंट टू सेल क्या रजिस्ट्री के बराबर होता है?',
          a: 'नहीं। एग्रीमेंट टू सेल सिर्फ़ एक वादा दर्ज करता है। मालिकाना हक रजिस्टर्ड बैनामे से ही जाता है। गाज़ियाबाद के बहुत से विवाद वहीं से शुरू होते हैं जहाँ खरीदार ने बिना रजिस्ट्री वाले एग्रीमेंट पर ज़्यादातर पैसा दे दिया होता है।',
        },
      ],
    },
  };
