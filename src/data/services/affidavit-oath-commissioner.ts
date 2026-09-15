import type { Service } from './types';

export const affidavitOathCommissioner: Service = {
  slug: 'affidavit-oath-commissioner',
  group: 'documents',
  guides: ['affidavit-guide'],
  en: {
    title: 'Affidavits and oath commissioner attestation',
    alsoCalled: 'Shapath patra, halafnama',
    metaTitle: 'Affidavit & Oath Commissioner in Ghaziabad | Prem Chamber',
    metaDesc:
      'Affidavits drafted and attested by an Oath Commissioner at Tehsil Compound, Ghaziabad. Name change, date of birth correction, income, residence, gap year, lost document and other common affidavits.',
    problem:
      'Some office has asked for an affidavit on stamp paper, has not told you what it should say, and will reject it if the wording is wrong. Meanwhile the deadline is this week.',
    summary:
      'Drafting the affidavit in the form the receiving office will actually accept, and attesting it as Oath Commissioner at the chamber in Tehsil Compound.',
    handles: [
      'Name change, name correction and change after marriage',
      'Date of birth correction where school and Aadhaar records differ',
      'Income, residence, caste and dependency affidavits',
      'Affidavit for a lost document, and for a gap in education or employment',
      'Single status, joint declaration and no-objection affidavits',
      'Attestation as Oath Commissioner, on the spot',
    ],
    documents: [
      'Identity proof of the person swearing the affidavit',
      'Any document the affidavit refers to, such as a school certificate or Aadhaar',
      'The requirement letter or form from the office asking for the affidavit, where there is one',
      'Stamp paper of the correct value, which can also be arranged at the chamber',
    ],
    steps: [
      {
        h: 'What does the office actually want',
        p: 'Most rejected affidavits fail on wording, not on stamp value. Bring the letter or form that asked for it and the draft can be matched to it.',
      },
      {
        h: 'Drafting on the correct stamp',
        p: 'The affidavit is drafted, the stamp value is confirmed, and the deponent reads it before signing.',
      },
      {
        h: 'Oath and attestation',
        p: 'The deponent signs in the presence of the Oath Commissioner, who administers the oath and attests the document.',
      },
    ],
    timeline:
      'A standard affidavit is usually drafted and attested the same day, often within the hour if you come with your identity proof.',
    faqs: [
      {
        q: 'What is the difference between a notary and an oath commissioner?',
        a: 'An Oath Commissioner administers oaths and attests affidavits for use in courts and government offices. A Notary, appointed under the Notaries Act, has a wider set of functions including notarising agreements and attesting documents for use abroad. For an ordinary affidavit asked for by a school, office or authority, attestation by an Oath Commissioner is what is required.',
      },
      {
        q: 'Can somebody else swear the affidavit on my behalf?',
        a: 'No. The deponent must personally appear, because the oath is administered to that person. A guardian can swear on behalf of a minor.',
      },
      {
        q: 'How much stamp value does my affidavit need?',
        a: 'It depends on what the affidavit is for and what the receiving office specifies. Bring the requirement in writing where you have it, rather than buying a stamp first and finding the value is wrong.',
      },
    ],
  },
  hi: {
    title: 'शपथ पत्र और ओथ कमिश्नर अटेस्टेशन',
    alsoCalled: 'हलफ़नामा, एफ़िडेविट',
    metaTitle: 'गाज़ियाबाद में शपथ पत्र और ओथ कमिश्नर | प्रेम चैम्बर',
    metaDesc:
      'तहसील कम्पाउंड गाज़ियाबाद में ओथ कमिश्नर द्वारा शपथ पत्र तैयार कराना और अटेस्ट कराना। नाम परिवर्तन, जन्मतिथि सुधार, आय, निवास, गैप ईयर, खोया दस्तावेज़ और अन्य आम शपथ पत्र।',
    problem:
      'किसी दफ़्तर ने स्टाम्प पेपर पर शपथ पत्र माँग लिया है, यह नहीं बताया कि उसमें लिखा क्या जाए, और शब्द ग़लत हुए तो वापस कर देंगे। उधर तारीख़ इसी हफ़्ते की है।',
    summary:
      'शपथ पत्र उस रूप में तैयार करना जो लेने वाला दफ़्तर सचमुच स्वीकार करे, और तहसील कम्पाउंड स्थित चैम्बर में ओथ कमिश्नर के रूप में उसे अटेस्ट करना।',
    handles: [
      'नाम परिवर्तन, नाम में सुधार और विवाह के बाद नाम बदलना',
      'जन्मतिथि सुधार, जहाँ स्कूल और आधार के रिकॉर्ड अलग हों',
      'आय, निवास, जाति और आश्रित संबंधी शपथ पत्र',
      'खोए हुए दस्तावेज़ का, और पढ़ाई या नौकरी में अंतराल का शपथ पत्र',
      'अविवाहित स्थिति, संयुक्त घोषणा और अनापत्ति शपथ पत्र',
      'ओथ कमिश्नर द्वारा मौके पर ही अटेस्टेशन',
    ],
    documents: [
      'शपथ लेने वाले का पहचान पत्र',
      'शपथ पत्र जिस दस्तावेज़ का ज़िक्र करता है, जैसे स्कूल प्रमाण पत्र या आधार',
      'जहाँ हो वहाँ दफ़्तर का वह पत्र या फ़ॉर्म जिसमें शपथ पत्र माँगा गया है',
      'सही मूल्य का स्टाम्प पेपर, जिसकी व्यवस्था चैम्बर में भी हो जाती है',
    ],
    steps: [
      {
        h: 'दफ़्तर चाहता क्या है',
        p: 'ज़्यादातर शपथ पत्र स्टाम्प के मूल्य की वजह से नहीं, शब्दों की वजह से लौटते हैं। जिस पत्र या फ़ॉर्म में माँगा गया है, वह साथ लाइए — फिर मसौदा उसी के अनुसार बनेगा।',
      },
      {
        h: 'सही स्टाम्प पर तैयारी',
        p: 'शपथ पत्र तैयार होता है, स्टाम्प का मूल्य पक्का किया जाता है, और हस्ताक्षर से पहले शपथकर्ता उसे पढ़ लेता है।',
      },
      {
        h: 'शपथ और अटेस्टेशन',
        p: 'शपथकर्ता ओथ कमिश्नर के सामने हस्ताक्षर करता है, जो शपथ दिलाकर दस्तावेज़ अटेस्ट करते हैं।',
      },
    ],
    timeline:
      'सामान्य शपथ पत्र आमतौर पर उसी दिन तैयार होकर अटेस्ट हो जाता है — पहचान पत्र साथ लाएँ तो अक्सर घंटे भर में।',
    faqs: [
      {
        q: 'नोटरी और ओथ कमिश्नर में क्या फ़र्क़ है?',
        a: 'ओथ कमिश्नर शपथ दिलाते हैं और अदालतों व सरकारी कार्यालयों में इस्तेमाल होने वाले शपथ पत्र अटेस्ट करते हैं। नोटरी, नोटरीज़ अधिनियम के तहत नियुक्त होते हैं और उनके कार्य व्यापक हैं, जिनमें अनुबंधों का नोटरीकरण और विदेश में उपयोग के लिए दस्तावेज़ सत्यापन शामिल है। स्कूल, दफ़्तर या प्राधिकरण द्वारा माँगे गए सामान्य शपथ पत्र के लिए ओथ कमिश्नर का अटेस्टेशन ही चाहिए होता है।',
      },
      {
        q: 'क्या मेरी ओर से कोई और शपथ पत्र दे सकता है?',
        a: 'नहीं। शपथकर्ता का स्वयं उपस्थित होना ज़रूरी है, क्योंकि शपथ उसी व्यक्ति को दिलाई जाती है। नाबालिग की ओर से अभिभावक शपथ ले सकते हैं।',
      },
      {
        q: 'मेरे शपथ पत्र पर कितने का स्टाम्प लगेगा?',
        a: 'यह इस पर निर्भर करता है कि शपथ पत्र किस काम का है और लेने वाला दफ़्तर क्या कहता है। पहले स्टाम्प खरीदकर बाद में मूल्य ग़लत निकलने से बेहतर है कि जहाँ लिखित माँग हो, वह साथ ले आइए।',
      },
    ],
  },
};
