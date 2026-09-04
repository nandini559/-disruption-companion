export type Language = "en" | "hi" | "bn" | "ne";

export type ActionType =
  | "WAIT"
  | "ALTERNATIVE_TRANSPORT"
  | "REFUND"
  | "ANNOUNCEMENT";

export interface DisruptionExplanation {
  title: string;
  explanation: string;
  action: string;
}

export interface DisruptionScenario {
  id: string;
  keywords: string[];
  category: "delay" | "cancellation" | "disruption" | "weather" | "station" | "relief" | "refund" | "info";
  severity: "low" | "medium" | "high";
  explanations: {
    en: DisruptionExplanation;
    hi: DisruptionExplanation;
    bn: DisruptionExplanation;
    ne: DisruptionExplanation;
  };
  recommendedAction: ActionType;
}

export const DISRUPTION_SCENARIOS: DisruptionScenario[] = [
  {
    id: "train-delayed",
    keywords: [
      "delay",
      "delayed",
      "late",
      "train late",
      "running late",
      "behind schedule",
      "fog delay",
      "slow speed"
    ],
    category: "delay",
    severity: "medium",
    recommendedAction: "WAIT",
    explanations: {
      en: {
        title: "Train Delayed",
        explanation:
          "Your train is running late due to mountain speed limits, heavy fog, or track clearance along the hill corridor.",
        action:
          "Please wait in the station waiting hall and listen for the next audio announcement."
      },
      hi: {
        title: "ट्रेन में देरी",
        explanation:
          "पहाड़ी मार्ग पर गति सीमा, भारी कोहरे या ट्रैक की सफाई के कारण आपकी ट्रेन देर से चल रही है।",
        action:
          "कृपया स्टेशन के प्रतीक्षालय में रुकें और अगली घोषणा का इंतजार करें।"
      },
      bn: {
        title: "ট্রেণে বিলম্ব",
        explanation:
          "পাহাড়ি লাইনে গতিসীমা, কুয়াশা বা ট্র্যাক পরিষ্কারের কারণে আপনার ট্রেনটি দেরিতে চলছে।",
        action:
          "অনুগ্রহ করে স্টেশনের যাত্রী প্রতীক্ষালয়ে অপেক্ষা করুন এবং পরবর্তী ঘোষণা শুনুন।"
      },
      ne: {
        title: "रेल ढिलो भएको छ",
        explanation:
          "पहाडी मार्गमा गति सीमा, बाक्लो हुस्सु वा ट्र्याक सफाइको कारण तपाईंको रेल ढिलो चलिरहेको छ।",
        action:
          "कृपया स्टेशनको पर्खाइ कक्षमा बस्नुहोस् र अर्को सूचनाको प्रतीक्षा गर्नुहोस्।"
      }
    }
  },
  {
    id: "train-cancelled",
    keywords: [
      "cancel",
      "cancelled",
      "cancellation",
      "suspended",
      "not running",
      "service cancelled",
      "train stopped"
    ],
    category: "cancellation",
    severity: "high",
    recommendedAction: "REFUND",
    explanations: {
      en: {
        title: "Train Cancelled",
        explanation:
          "Toy train service has been cancelled today due to severe weather or track safety concerns.",
        action:
          "Please proceed to Station Counter 1 to claim a 100% full ticket refund without cancellation charges."
      },
      hi: {
        title: "ट्रेन रद्द",
        explanation:
          "गंभीर मौसम या ट्रैक सुरक्षा कारणों से आज टॉय ट्रेन सेवा रद्द कर दी गई है।",
        action:
          "कृपया बिना किसी शुल्क के 100% रिफंड प्राप्त करने के लिए स्टेशन काउंटर 1 पर संपर्क करें।"
      },
      bn: {
        title: "ট্রেন বাতিল",
        explanation:
          "দূযোগপূর্ণ আবহাওয়া বা লাইন সুরক্ষার কারণে আজকের খেলনা ট্রেন পরিষেবা বাতিল করা হয়েছে।",
        action:
          "সম্পূর্ণ টিকিট মূল্য ফেরত (রिफান্ড) পেতে অনুগ্রহ করে স্টেশনের ১ নম্বর কাউন্টারে যোগাযোগ করুন।"
      },
      ne: {
        title: "रेल रद्द गरिएको छ",
        explanation:
          "अत्यधिक खराब मौसम वा ट्र्याकको सुरक्षाका कारण आज टोय ट्रेन सेवा रद्द गरिएको छ।",
        action:
          "कुनै शुल्क बिना पूरा रकम फिर्ता लिन कृपया स्टेशन काउन्टर १ मा सम्पर्क गर्नुहोस्।"
      }
    }
  },
  {
    id: "route-blocked",
    keywords: [
      "route blocked",
      "section blocked",
      "line blocked",
      "track closed",
      "section impassable",
      "kurseong blocked",
      "tindharia blocked"
    ],
    category: "disruption",
    severity: "high",
    recommendedAction: "ALTERNATIVE_TRANSPORT",
    explanations: {
      en: {
        title: "Route Blocked",
        explanation:
          "The railway route between stations is blocked due to track conditions. Train movement is currently stopped on this section.",
        action:
          "Alternative road transport (hill shuttles) is available at Station Forecourt Gate 2."
      },
      hi: {
        title: "रेल मार्ग बाधित",
        explanation:
          "ट्रैक की स्थिति के कारण स्टेशनों के बीच रेल मार्ग बाधित है। इस खंड पर ट्रेनों की आवाजाही रुकी हुई है।",
        action:
          "स्टेशन परिसर के गेट 2 पर वैकल्पिक सड़क परिवहन (पहाड़ी बस/टैक्सी) उपलब्ध है।"
      },
      bn: {
        title: "রেলপথ অবরুদ্ধ",
        explanation:
          "লাইনের পরিস্থিতির কারণে স্টেশনগুলির মধ্যবর্তী রেলপথ অবরুদ্ধ রয়েছে। এই অংশে ট্রেন চলাচল বন্ধ রয়েছে।",
        action:
          "স্টেশনের ২ নম্বর গেটে বিকল্প সড়ক পরিবহন (হিল ট্যাক্সি শাটল) উপলব্ধ রয়েছে।"
      },
      ne: {
        title: "रेल मार्ग अवरुद्ध",
        explanation:
          "ट्र्याकको अवस्थाका कारणले स्टेशनहरू बीचको रेल मार्ग अवरुद्ध भएको छ। यस खण्डमा रेल आवागमन रोकिएको छ।",
        action:
          "स्टेशन परिसरको गेट २ मा वैकल्पिक सडक यातायात (ट्याक्सी/बस) उपलब्ध छ।"
      }
    }
  },
  {
    id: "landslide",
    keywords: [
      "landslide",
      "mudslide",
      "rockslide",
      "debris on track",
      "hill slip",
      "batasia landslide",
      "stone fall"
    ],
    category: "disruption",
    severity: "high",
    recommendedAction: "ALTERNATIVE_TRANSPORT",
    explanations: {
      en: {
        title: "Landslide / Mudslide Warning",
        explanation:
          "Debris and rocks have fallen onto the narrow-gauge tracks following heavy mountain rains.",
        action:
          "Railway clearance teams are at work. Passengers may use emergency road shuttles from Station Forecourt Gate 2."
      },
      hi: {
        title: "भूस्खलन (लैंडस्लाइड) की चेतावनी",
        explanation:
          "पहाड़ी बारिश के बाद नैरो-गेज रेलवे ट्रैक पर मलबे और चट्टानें गिर गई हैं।",
        action:
          "ट्रैक सफाई दल काम कर रहा है। यात्री गेट 2 से आपातकालीन सड़क शटल सेवा का उपयोग कर सकते हैं।"
      },
      bn: {
        title: "পাহাড় ধস / ল্যান্ডস্লাইড",
        explanation:
          "ভারী বৃষ্টির ফলে পাহাড়ি রুট ও ন্যারোগেজ রেললাইনে ধস ও পাথর পড়ে পথ বন্ধ হয়েছে।",
        action:
          "লাইন পরিষ্কারের কাজ চলছে। যাত্রীরা ২ নম্বর গেট থেকে জরুরি সড়ক শাটল সেবা ব্যবহার করতে পারেন।"
      },
      ne: {
        title: "पहिरो (ल्यान्डस्लाइड) को चेतावनी",
        explanation:
          "भारी वर्षाका कारण सानो रेलमार्ग (न्यारो-गेज) मा पहिरो र ढुङ्गा खसेर बाटो बन्द भएको छ।",
        action:
          "सफाइ टोलीले काम गरिरहेको छ। यात्रीहरूले गेट २ बाट आपत्कालीन सडक गाडी सेवा लिन सक्नुहुन्छ।"
      }
    }
  },
  {
    id: "heavy-rain",
    keywords: [
      "rain",
      "heavy rain",
      "monsoon",
      "torrential rain",
      "downpour",
      "weather warning",
      "high rainfall"
    ],
    category: "weather",
    severity: "medium",
    recommendedAction: "WAIT",
    explanations: {
      en: {
        title: "Heavy Monsoon Rain",
        explanation:
          "Heavy rain and low visibility in the hills are slowing down steam engine movements for safety.",
        action:
          "Please remain in the covered waiting area. Hot tea and warming stoves are active."
      },
      hi: {
        title: "भारी मानसूनी बारिश",
        explanation:
          "पहाड़ों में भारी बारिश और कम दृश्यता (विजिबिलिटी) के कारण सुरक्षा के लिए स्टीम इंजन धीमी गति से चल रहे हैं।",
        action:
          "कृपया ढके हुए प्रतीक्षालय में रहें। गरम चाय और हीटर की सुविधा उपलब्ध है।"
      },
      bn: {
        title: "ভারী বর্ষণ",
        explanation:
          "পাহাড়ে ভারী বৃষ্টি এবং কম দৃশ্যমানতার কারণে নিরাপত্তার স্বার্থে ট্রেনের গতি কমানো হয়েছে।",
        action:
          "অনুগ্রহ করে ছাউনিযুক্ত ওয়েটিং হলে থাকুন। গরম চা ও হিটারের ব্যবস্থা রয়েছে।"
      },
      ne: {
        title: "भारी मनसुनी वर्षा",
        explanation:
          "पहाडमा भारी वर्षा र कम भिजिबिलिटीका कारण सुरक्षाका लागि रेलको गति सुस्त पारिएको छ।",
        action:
          "कृपया कभर गरिएको प्रतिक्षालयमा बस्नुहोस्। तातो चिया र हिटरको व्यवस्था छ।"
      }
    }
  },
  {
    id: "track-obstruction",
    keywords: [
      "track obstruction",
      "tree fallen",
      "fallen pine",
      "boulder on track",
      "siding blockage",
      "clearance needed"
    ],
    category: "disruption",
    severity: "medium",
    recommendedAction: "WAIT",
    explanations: {
      en: {
        title: "Track Obstruction",
        explanation:
          "A fallen tree, pine branch, or boulder is temporarily obstructing the tracks ahead.",
        action:
          "Maintenance crews are clearing the tracks. Please wait for the 15-minute status update."
      },
      hi: {
        title: "ट्रैक पर रुकावट",
        explanation:
          "आगे ट्रैक पर गिरा हुआ पेड़, टहनी या पत्थर अस्थायी रूप से बाधा डाल रहा है।",
        action:
          "रखरखाव दल ट्रैक साफ कर रहा है। कृपया 15 मिनट में अगली स्थिति रिपोर्ट का इंतजार करें।"
      },
      bn: {
        title: "রেললাইনে বাধা",
        explanation:
          "সামনের লাইনে গাছ বা পাথরের টুকরো পড়ে সাময়িকভাবে ট্রেন চলাচল ব্যাহত হয়েছে।",
        action:
          "রেল কর্মীরা লাইন পরিষ্কার করছেন। অনুগ্রহ করে পরবর্তী ১৫ মিনিটের আপডেটের জন্য অপেক্ষা করুন।"
      },
      ne: {
        title: "रेलको बाटोमा अवरोध",
        explanation:
          "अगाडि ट्र्याकमा रूख ढलेको वा ढुङ्गा खसेकाले अस्थायी रूपमा रेल रोकिएको छ।",
        action:
          "मर्मत टोलीले बाटो सफा गर्दैछ। कृपया १५ मिनेट पछिको ताजा सूचनाको पर्खाइ गर्नुहोस्।"
      }
    }
  },
  {
    id: "train-terminated-early",
    keywords: [
      "terminated early",
      "terminated",
      "train terminated",
      "short terminated",
      "short termination",
      "loop cut",
      "partial route",
      "kurseong termination"
    ],
    category: "disruption",
    severity: "high",
    recommendedAction: "ALTERNATIVE_TRANSPORT",
    explanations: {
      en: {
        title: "Train Terminated Early",
        explanation:
          "Due to track conditions ahead, this train will end its journey at this station instead of continuing to the final destination.",
        action:
          "Passengers can take connecting road shuttles at Gate 2 or claim a partial refund at Counter 1."
      },
      hi: {
        title: "ट्रेन यात्रा बीच में समाप्त (शॉर्ट टर्मिनेट)",
        explanation:
          "आगे ट्रैक की स्थिति के कारण, यह ट्रेन अंतिम गंतव्य के बजाय इसी स्टेशन पर अपनी यात्रा समाप्त कर रही है।",
        action:
          "यात्री गेट 2 से कनेक्टिंग सड़क शटल ले सकते हैं या काउंटर 1 पर आंशिक रिफंड का दावा कर सकते हैं।"
      },
      bn: {
        title: "ট্রেণের যাত্রা মাঝপথে সমাপ্ত",
        explanation:
          "সামনের লাইনের পরিস্থিতির কারণে ট্রেনটির যাত্রা চূড়ান্ত গন্তব্যের পরিবর্তে এই স্টেশনেই শেষ করা হচ্ছে।",
        action:
          "যাত্রীরা ২ নম্বর গেট থেকে সংযোগকারী বাস/ট্যাক্সি নিতে পারেন অথবা ১ নম্বর কাউন্টারে আংশিক রিফান্ড পাবেন।"
      },
      ne: {
        title: "रेल यात्रा बिचमै समाप्त",
        explanation:
          "अगाडिको ट्र्याकको अवस्थाका कारण यो रेल अन्तिम गन्तव्य सम्म नगई यही स्टेशनमा रोकिनेछ।",
        action:
          "यात्रीहरूले गेट २ बाट जोडिने सडक गाडी लिन सक्नुहुन्छ वा काउन्टर १ मा रकम फिर्ता लिन सक्नुहुन्छ।"
      }
    }
  },
  {
    id: "station-temporarily-closed",
    keywords: [
      "station closed",
      "temporarily closed",
      "station shutdown",
      "no entry",
      "power failure",
      "evacuation"
    ],
    category: "station",
    severity: "high",
    recommendedAction: "ALTERNATIVE_TRANSPORT",
    explanations: {
      en: {
        title: "Station Temporarily Closed",
        explanation:
          "Station operations are temporarily paused for maintenance, power restoration, or safety inspection.",
        action:
          "Please move to the outside forecourt area where station assistance staff are guiding road transport."
      },
      hi: {
        title: "स्टेशन अस्थायी रूप से बंद",
        explanation:
          "रखरखाव, बिजली बहाली या सुरक्षा निरीक्षण के लिए स्टेशन का संचालन अस्थायी रूप से रोका गया है।",
        action:
          "कृपया बाहर परिसर क्षेत्र में जाएं जहां स्टेशन सहायता कर्मचारी सड़क परिवहन के लिए मार्गदर्शन कर रहे हैं।"
      },
      bn: {
        title: "স্টেশন সাময়িকভাবে বন্ধ",
        explanation:
          "রক্ষণাবেক্ষণ, বিদ্যুৎ পুনর্বহাল বা সুরক্ষার উদ্দেশ্যে স্টেশনের কাজকর্ম সাময়িকভাবে স্থগিত করা হয়েছে।",
        action:
          "অনুগ্রহ করে স্টেশনের বাইরের প্রাঙ্গনে যান যেখানে সহায়তাকারী কর্মীরা বিকল্প গাড়ির ব্যবস্থা করছেন।"
      },
      ne: {
        title: "स्टेशन अस्थायी रूपमा बन्द",
        explanation:
          "मर्मत, विद्युत पुनर्जागरण वा सुरक्षा जाँचका लागि स्टेशन सञ्चालन अस्थायी रूपमा रोकिएको छ।",
        action:
          "कृपया बाहिरको परिसर क्षेत्रमा जानुहोस् जहाँ सहायता कर्मचारीहरूले सडक गाडीको लागि मार्गदर्शन गर्दैछन्।"
      }
    }
  },
  {
    id: "road-transport-available",
    keywords: [
      "road transport",
      "sumo",
      "shuttle",
      "bus available",
      "hill taxi",
      "forecourt taxi",
      "evacuation shuttle"
    ],
    category: "relief",
    severity: "medium",
    recommendedAction: "ALTERNATIVE_TRANSPORT",
    explanations: {
      en: {
        title: "Alternative Road Transport Activated",
        explanation:
          "Pre-arranged Tata Sumo hill shuttles and shared taxis are operating from the station forecourt.",
        action:
          "Present your train ticket at Gate 2 for priority boarding to Darjeeling / Kurseong."
      },
      hi: {
        title: "वैकल्पिक सड़क परिवहन शुरू",
        explanation:
          "स्टेशन परिसर से पूर्व-व्यवस्थित टाटा सूमो पहाड़ी शटल और शेयरिंग टैक्सियों का संचालन शुरू हो गया है।",
        action:
          "दार्जिलिंग/कुर्सियांग के लिए प्राथमिकता से गाड़ी पाने के लिए गेट 2 पर अपनी ट्रेन टिकट दिखाएं।"
      },
      bn: {
        title: "বিকল্প সড়ক পরিবহন সক্রিয়",
        explanation:
          "স্টেশন প্রাঙ্গণ থেকে টাটা সুমো পাহাড়ি শটল এবং শেয়ার ট্যাক্সি পরিষেবা চালু করা হয়েছে।",
        action:
          "দার্জিলিং বা কার্সিয়াং যাওয়ার জন্য ২ নম্বর গেটে আপনার ট্রেনের টিকিটটি দেখিয়ে গাড়িতে উঠুন।"
      },
      ne: {
        title: "वैकल्पिक सडक यातायात सुरु",
        explanation:
          "स्टेशन परिसरबाट पूर्व-व्यवस्थित टाटा सुमो पहाडी शटल र ट्याक्सीहरू सञ्चालन भइरहेका छन्।",
        action:
          "दार्जिलिङ/कुर्सियाङ जानका लागि गेट २ मा आफ्नो रेल टिकट देखाएर गाडीमा चढ्नुहोस्।"
      }
    }
  },
  {
    id: "refund-required",
    keywords: [
      "refund",
      "ticket refund",
      "full refund",
      "money back",
      "counter refund",
      "cancel ticket",
      "refund waiver"
    ],
    category: "refund",
    severity: "medium",
    recommendedAction: "REFUND",
    explanations: {
      en: {
        title: "Full Refund Clearance Active",
        explanation:
          "Due to disruption rule 54/A, all affected passenger tickets qualify for a 100% fare waiver.",
        action:
          "Visit Counter 1 or 2 with your paper ticket or mobile QR pass for instant cash or UPI refund."
      },
      hi: {
        title: "पूर्ण रिफंड (रकम वापसी) सेवा सक्रिय",
        explanation:
          "बाधा नियम 54/A के तहत, सभी प्रभावित यात्री 100% किराया वापसी के पात्र हैं।",
        action:
          "नकद या UPI रिफंड के लिए अपने टिकट या मोबाइल QR पास के साथ काउंटर 1 या 2 पर जाएं।"
      },
      bn: {
        title: "সম্পূর্ণ টিকিটের টাকা ফেরত সক্রিয়",
        explanation:
          "রেল নিয়ম ৫৪/এ অনুসারে ক্ষতিগ্রস্ত সব যাত্রী ১০০% ভাড়া ফেরত পাওয়ার যোগ্য।",
        action:
          "নগদ বা ইউপিআই (UPI) রিফান্ডের জন্য আপনার টিকিট বা মোবাইল কিউআর পাস নিয়ে ১ বা ২ নম্বর কাউন্টারে যান।"
      },
      ne: {
        title: "पूरा रकम फिर्ता (रिफन्ड) सेवा सक्रिय",
        explanation:
          "रेल नियम ५४/A अनुसार प्रभावित सबै यात्रीहरू १००% भाडा फिर्ता लिन योग्य हुनुहुन्छ।",
        action:
          "नगद वा UPI रिफन्डका लागि आफ्नो टिकट वा मोबाइल QR पास लिएर काउन्टर १ वा २ मा जानुहोस्।"
      }
    }
  },
  {
    id: "wait-for-announcement",
    keywords: [
      "wait",
      "announcement",
      "standby",
      "further update",
      "listen to pa",
      "station update",
      "information pending"
    ],
    category: "info",
    severity: "low",
    recommendedAction: "ANNOUNCEMENT",
    explanations: {
      en: {
        title: "Standby for Station Announcement",
        explanation:
          "Station staff are confirming track conditions and locomotive status with hill control.",
        action:
          "Please wait in the platform seating area. Detailed audio updates will broadcast shortly."
      },
      hi: {
        title: "स्टेशन घोषणा की प्रतीक्षा करें",
        explanation:
          "स्टेशन कर्मचारी कंट्रोल रूम से ट्रैक की स्थिति और इंजन की रिपोर्ट की पुष्टि कर रहे हैं।",
        action:
          "कृपया प्लेटफार्म बैठने के क्षेत्र में प्रतीक्षा करें। विस्तृत ऑडियो घोषणा जल्द प्रसारित की जाएगी।"
      },
      bn: {
        title: "স্টেশন ঘোষণার জন্য অপেক্ষা করুন",
        explanation:
          "স্টেশন কর্মীরা কন্ট্রোল রুম থেকে ট্রেনের লাইন ও ইঞ্জিনের বর্তমান অবস্থা যাচাই করছেন।",
        action:
          "অনুগ্রহ করে প্ল্যাটফর্মের বসার জায়গায় অপেক্ষা করুন। বিস্তারিত ঘোষণা শীঘ্রই প্রচার করা হবে।"
      },
      ne: {
        title: "स्टेशन सूचनाको पर्खाइ गर्नुहोस्",
        explanation:
          "स्टेशन कर्मचारीहरूले नियन्त्रण कक्षबाट ट्र्याक र रेलको अवस्थाबारे पुष्टि गर्दैछन्।",
        action:
          "कृपया प्लेटफर्मको बस्ने क्षेत्रमा प्रतीक्षा गर्नुहोस्। विस्तृत सूचना चाँडै दिइनेछ।"
      }
    }
  }
];
