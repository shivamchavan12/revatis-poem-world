import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, Heart, Share, ChevronRight, Tag } from "lucide-react";
import "./Poems.css";
import '@fontsource/modak'; // Defaults to weight 400
import '@fontsource/tiro-devanagari-marathi';
import poems from '../poemsData'; // adjust path if needed

const poemCollection = poems;

// Enhanced poem list with additional metadata
// const poemCollection = [
//   { 
//     id: "guru",
//     title: "गुरु", 
//     translit: "guru", 
//     description: "माझ्या जीवनात प्रेरणा देणाऱ्या शिक्षकांवर एक कविता..",
//     excerpt: "ज्ञानाचे दीप लावणारे, अंधारातून प्रकाशाकडे नेणारे...",
//     year: "2022",
//     tags: ["प्रेरणा", "गुरू", "शिक्षण"],
//     featured: true,
//   },
//   { 
//     id: "baliraja",
//     title: "बळीराजा", 
//     translit: "baliraja", 
//     description: "बळीराजाच्या संघर्षावर एक कविता...",
//     excerpt: "मातीत राबणारा, धरतीचा पुत्र, देशाचा अन्नदाता...",
//     year: "2021",
//     tags: ["शेतकरी", "संघर्ष", "समाज"],
//     featured: true,
//   },
//   { 
//     id: "natan",
//     title: "नातं", 
//     translit: "natan", 
//     description: "नात्यांच्या भावनांवर आधारित एक कविता...",
//     excerpt: "बंधन नसतात, फक्त नातो वैशिष्ट्य असतात...",
//     year: "2023",
//     tags: ["नाती", "प्रेम", "समर्पण"],
//     featured: false,
//   },
//   { 
//     id: "kshan",
//     title: "क्षण", 
//     translit: "kshan", 
//     description: "गोड आठवणींचा भावार्थ सांगणारी कविता...",
//     excerpt: "क्षण ते क्षण जपून ठेवले, हृदयाच्या कोनाड्यात साठवले...",
//     year: "2020",
//     tags: ["आठवणी", "काळ", "जीवन"],
//     featured: false,
//   },
//   { 
//     id: "paus",
//     title: "पाऊस", 
//     translit: "paus", 
//     description: "पावसावर एक कविता....",
//     excerpt: "रिमझिम पडणारा, मनाला भिजवणारा, धरतीला हिरवं करणारा...",
//     year: "2021",
//     tags: ["निसर्ग", "ऋतू", "सौंदर्य"],
//     featured: true,
//   },
//   { 
//     id: "vithumauli",
//     title: "विठुमाऊली", 
//     translit: "vithumauli", 
//     description: "विठुमाऊलीच्या भक्तिभावावर आधारित एक कविता...",
//     excerpt: "पांडुरंगा विठ्ठला, दीनांचा कैवारी, भक्तांचा तारणहारा...",
//     year: "2022",
//     tags: ["अध्यात्म", "भक्ती", "वारकरी"],
//     featured: false,
//  },
//   { 
//     id: "raghunandan_shriram",
//     title: "रघुनंदन श्रीराम", 
//     translit: "raghunandan shriram", 
//     description: "श्रीरामाच्या भक्तीवर एक कविता..",
//     excerpt: "मर्यादा पुरुषोत्तम, धर्माचा राखणदार, मनाचा राजा...",
//     year: "2020",
//     tags: ["अध्यात्म", "भक्ती", "श्रद्धा"],
//     featured: false,
//   },
//   { 
//     id: "pournimecha_chandra",
//     title: "पौर्णिमेचा चंद्र", 
//     translit: "pournimecha chandra", 
//     description: "पौर्णिमेच्या चंद्रावर एक कविता...",
//     excerpt: "निर्मळ शुभ्र चांदणं, अंधारी रात्री उजळणारा, मनाला शांत करणारा...",
//     year: "2021",
//     tags: ["निसर्ग", "सौंदर्य", "आकाश"],
//     featured: false,
//   },
//   { 
//   id: "ek kshan_aicha",
//   title: "एक क्षण आईचा", 
//   translit: "ek kshan aicha", 
//   description: "आईच्या गोड आठवणींवर आधारित एक कविता...",
//   excerpt: "आईच्या आठवणींचा भावनिक आणि प्रेमळ क्षण उलगडणारी कविता.",
//   year: "2023",
//   tags: ["आई", "आठवणी"],
//   featured: false,
 
// },
// { 
//   id: "ayushyache_aabhar",
//   title: "आयुष्याचे आभार", 
//   translit: "ayushyache aabhar", 
//   description: "आयुष्यातील सर्व गोष्टींसाठी आभार व्यक्त करणारी कविता...",
//   excerpt: "आयुष्यातील छोट्या-मोठ्या सुख-दुखासाठी कृतज्ञता व्यक्त करणारी कविता.",
//   year: "2023",
//   tags: ["आभार", "आयुष्य", "आध्यात्म"],
//   featured: false,
 
// },
// { 
//   id: "ayushyach",
//   title: "आयुष्य", 
//   translit: "ayushyach", 
//   description: "जीवनाच्या विविध पैलूंवर आधारित एक कविता....",
//   excerpt: "जीवनातील विविध रंग आणि अनुभव यांचे दर्शन घडवणारी कविता.",
//   year: "2022",
//   tags: ["जीवन", "आयुष्य"],
//   featured: false,  
 
// },
// { 
//   id: "mukunda",
//   title: "मुकुंदा", 
//   translit: "mukunda", 
//   description: "मुकुंदाच्या प्रेमळ स्वरूपाला अर्पण केलेली एक कविता...",
//   excerpt: "कृष्णाच्या प्रेमळ आणि भक्तीमय स्वरूपाचे मनोभावपूर्ण वर्णन.",
//   year: "2023",
//   tags: ["कृष्ण", "भक्ती", "प्रेम"],
//   featured: false,  
 
// },
// { 
//   id: "prasang",
//   title: "प्रसंग", 
//   translit: "prasang", 
//   description: "आपल्या जीवनातील महत्त्वाच्या प्रसंगांवर आधारित एक कविता....",
//   excerpt: "जीवनातील खास प्रसंग आणि त्यांच्या आठवणींवर आधारित कविता.",
//   year: "2023",
//   tags: ["प्रसंग", "जीवन", "अनुभव"],
//   featured: false,
 
// },
// { 
//   id: "shoorveer",
//   title: "शूरवीर", 
//   translit: "shoorveer", 
//   description: "शूरवीरांची महिमा आणि त्यागावर आधारित एक कविता...",
//   excerpt: "देशभक्ती आणि शौर्य गाथा यांचे प्रेरणादायी वर्णन.",
//   year: "2022",
//   tags: ["शौर्य", "त्याग", "देशभक्ती"],
//   featured: false,
 
// },
// {
//   id: "ase_kase",
//   title: "असे कसे?",
//   translit: "AseKase",
//   description: "असे कसे? जीवनाच्या गूढतेची चौकशी करणारी एक कविता...",
//   excerpt: "जीवनातील अनिश्चितता आणि गूढतेवर विचार करणारी कविता.",
//   year: "2024",
//   tags: ["जीवन", "प्रश्न", "गूढता"],
//   featured: false,
 
// },
// {
//   id: "bap_mhanje_kay",
//   title: "बाप म्हणजे काय?",
//   translit: "BapMhanjeKay",
//   description: "बाबांवर आधारित एक कविता...",
//   excerpt: "बापाच्या प्रेम, जबाबदारी आणि कुटुंबातील स्थानाचा सन्मान.",
//   year: "2023",
//   tags: ["बाप", "कुटुंब", "प्रेम"],
//   featured: false,
 
// },
// {
//   id: "man",
//   title: "मन",
//   translit: "Man",
//   description: "विचारांवर आधारित एक कविता...",
//   excerpt: "मनाच्या गूढ जगातल्या भावनांचे सूक्ष्म चित्रण.",
//   year: "2022",
//   tags: ["मन", "विचार", "अंतर्मन"],
//   featured: false,
 
// },
// {
//   id: "jeevanat_hasun_bagh",
//   title: "जीवनात हसून बघ",
//   translit: "JeevanatHasunBagh",
//   description: "आनंदाने जगण्यावर आधारित एक कविता...",
//   excerpt: "जीवनाला हसत-खेळत सामोरे जाण्याचा संदेश देणारी कविता.",
//   year: "2023",
//   tags: ["आनंद", "जीवन", "हसणे"],
//   featured: false,
 
// },
// {
//   id: "bhaji_ghya_bhaji",
//   title: "भाजी घ्या भाजी",
//   translit: "BhajiGhyaBhaji",
//   description: "ताज्या भाज्यांवर आधारित एक कविता...",
//   excerpt: "शेती आणि ताजी भाजी यांच्याशी नातं दर्शवणारी कविता.",
//   year: "2024",
//   tags: ["भाजी", "मंडी", "शेती"],
//   featured: false,
 
// },
// {
//   id: "nawhati_jehva_mala_ek_chotishi_bahini",
//   title: "नव्हती जेव्हा मला एक छोटीशी बहीण",
//   translit: "NawhatiJehvaMalaEkChotishiBahini",
//   description: "भावंडांवर आधारित एक कविता...",
//   excerpt: "भावंडांच्या नात्याचा गोडवा आणि प्रेम भाव दर्शवणारी कविता.",
//   year: "2023",
//   tags: ["भावंड", "बहीण", "कुटुंब"],
//   featured: false,
 
// },
// {
//   id: "aai",
//   title: "आई",
//   translit: "Aai",
//   description: "आईच्या प्रेमावर आधारित एक कविता...",
//   excerpt: "आईच्या अमर प्रेमाचा आणि त्यागाचा आदर करणारी कविता.",
//   year: "2022",
//   tags: ["आई", "प्रेम", "कुटुंब"],
//   featured: false,
 
// },
// {
//   id: "maa_marathi",
//   title: "माय मराठी",
//   translit: "MaaMarathi",
//   description: "मराठी भाषेवरील अभिमानाची एक कविता...",
//   excerpt: "मराठी भाषेचा आणि संस्कृतीचा अभिमान व्यक्त करणारी कविता.",
//   year: "2024",
//   tags: ["मराठी", "भाषा", "अभिमान"],
//   featured: false,
 
// },
// {
//   id: "pakshi",
//   title: "पक्षी",
//   translit: "Pakshi",
//   description: "जीवसृष्टीतील पक्ष्यांवरील एक कविता...",
//   excerpt: "पक्ष्यांच्या मुक्त आणि सुंदर जीवनाचे वर्णन करणारी कविता.",
//   year: "2023",
//   tags: ["पक्षी", "निसर्ग", "प्राणी"],
//   featured: false,
// },
// {
//   id: "gudi_padwa",
//   title: "गुढीपाडवा",
//   translit: "GudiPadwa",
//   description: "नववर्षाच्या स्वागताची एक कविता...",
//   excerpt: "गुढीपाडवाच्या उत्साहपूर्ण आणि आनंदी वातावरणाचे वर्णन.",
//   year: "2024",
//   tags: ["गुढीपाडवा", "सण", "नववर्ष"],
//   featured: false,
// },
// {
//   id: "holi",
//   title: "होळी",
//   translit: "Holi",
//   description: "होळी सणाच्या आनंदाबद्दल एक कविता...",
//   excerpt: "रंगांच्या सणाचा आनंद आणि उत्साह व्यक्त करणारी कविता.",
//   year: "2023",
//   tags: ["होळी", "सण", "रंग"],
//   featured: false,
// },
// {
//   id: "nari_shakti",
//   title: "नारी शक्ती",
//   translit: "NariShakti",
//   description: "नारीच्या सामर्थ्यावर एक कविता...",
//   excerpt: "नारीच्या सामर्थ्याचा, संघर्षाचा आणि प्रेरणेचा गौरव करणारी कविता.",
//   year: "2023",
//   tags: ["नारी", "शक्ती", "प्रेरणा"],
//   featured: false,
// },
// {
//   id: "sahitya_sammelan",
//   title: "साहित्य संमेलन",
//   translit: "SahityaSammelan",
//   description: "मराठी भाषेच्या महत्त्वावर एक कविता...",
//   excerpt: "मराठी साहित्य आणि भाषेचा गौरव करणारी कविता.",
//   year: "2023",
//   tags: ["साहित्य", "मराठी", "संमेलन"],
//   featured: false,
// },
// {
//   id: "nutan_varsh",
//   title: "नूतन वर्ष",
//   translit: "Nutankal",
//   description: "नवीन वर्षाचे स्वागत करण्यावर एक कविता...",
//   excerpt: "नवीन वर्षाच्या नव्या आशा आणि संकल्प यांचे स्वागत करणारी कविता.",
//   year: "2023",
//   tags: ["नवीन वर्ष", "उत्सव", "संकल्प"],
//   featured: false,
// },
// {
//   id: "makar_sankrant",
//   title: "मकर संक्रांत",
//   translit: "MakarSankrant",
//   description: "पतंग उडवण्याच्या आनंदावर आधारित एक कविता...",
//   excerpt: "मकर संक्रांत सणाचा आनंद आणि उत्साह व्यक्त करणारी कविता.",
//   year: "2023",
//   tags: ["सण", "पतंग", "मकर संक्रांत"],
//   featured: false,
// },
// {
//   id: "priya_bai",
//   title: "प्रिय बाई",
//   translit: "PriBai",
//   description: "गुरु वंदनावर आधारित एक कविता...",
//   excerpt: "गुरुंचा आदर आणि श्रद्धा व्यक्त करणारी कविता.",
//   year: "2023",
//   tags: ["गुरु", "वंदन", "श्रद्धा"],
//   featured: false,
// },
// {
//   id: "mai",
//   title: "माय",
//   translit: "Mai",
//   description: "आईवर आधारित एक कविता...",
//   excerpt: "आईच्या प्रेमाचा आणि ममतांचा सन्मान करणारी कविता.",
//   year: "2023",
//   tags: ["आई", "ममता", "प्रेम"],
//   featured: false,
// },
// {
//   id: "diwali",
//   title: "दिवाळी",
//   translit: "Diwali",
//   description: "दिवाळी सणावर आधारित एक कविता...",
//   excerpt: "दिवाळीचा प्रकाश आणि आनंद यांचे वर्णन करणारी कविता.",
//   year: "2023",
//   tags: ["दिवाळी", "सण", "प्रकाश"],
//   featured: false,
// },
// {
//   id: "majha_bappa",
//   title: "माझा बाप्पा",
//   translit: "MajhaBappa",
//   description: "बाप्पा आणि त्याच्या सणावर आधारित एक कविता...",
//   excerpt: "गणपती बाप्पाच्या भक्ती आणि सणाचा आनंद व्यक्त करणारी कविता.",
//   year: "2023",
//   tags: ["गणपती", "सण", "भक्ती"],
//   featured: false,
// },
// {
//   id: "isro",
//   title: "इस्रो",
//   translit: "ISRO",
//   description: "इस्रोच्या कामगिरीवर आधारित एक कविता...",
//   excerpt: "इस्रोच्या वैज्ञानिक आणि तंत्रज्ञानातील कामगिरीचा गौरव करणारी कविता.",
//   year: "2023",
//   tags: ["इस्रो", "विज्ञान", "तंत्रज्ञान"],
//   featured: false,
// },
// {
//   id: "krantikarak",
//   title: "क्रांतिकारक",
//   translit: "Krantikarak",
//   description: "भारताच्या क्रांतिकारकांवर आधारित एक कविता...",
//   excerpt: "भारताच्या क्रांतिकारकांच्या पराक्रमाची गाथा सांगणारी कविता.",
//   year: "2023",
//   tags: ["भारत", "क्रांतिकारक", "इतिहास"],
//   featured: false,
// },
// {
//   id: "aai2",
//   title: "आई",
//   translit: "Aai2",
//   description: "आईवर आधारित एक हृदयस्पर्शी कविता...",
//   excerpt: "आईच्या प्रेमाने आणि मायेने भरलेली हृदयस्पर्शी कविता.",
//   year: "2023",
//   tags: ["आई", "ममता", "प्रेम"],
//   featured: false,
// },
// {
//   id: "guru2",
//   title: "गुरु",
//   translit: "Guru2",
//   description: "भगवंत आणि गुरूच्या महिम्यावर आधारित एक सुंदर कविता...",
//   excerpt: "गुरुंच्या महत्त्वाचा आणि भगवंताशी संबंधित श्रद्धेचा सन्मान करणारी कविता.",
//   year: "2023",
//   tags: ["गुरु", "भगवंत", "श्रद्धा"],
//   featured: false,
// },
// {
//   id: "meghgarjana",
//   title: "मेघगर्जना",
//   translit: "Meghgarjana",
//   description: "काळ्या ढगांच्या गर्जनेवर आधारित कविता...",
//   excerpt: "मेघगर्जनेच्या भीतीदायक पण सशक्त स्वरूपाचे वर्णन.",
//   year: "2023",
//   tags: ["निसर्ग", "मेघगर्जना", "ढग"],
//   featured: false,
// },
// {
//   id: "maitri",
//   title: "मैत्री",
//   translit: "Maitri",
//   description: "मैत्री म्हणजे निस्वार्थ आनंदाचा पाट...",
//   excerpt: "मैत्रीच्या निस्वार्थतेचा आणि आनंदाचा सुंदर साद.",
//   year: "2023",
//   tags: ["मैत्री", "निस्वार्थ", "आनंद"],
//   featured: false,
// },
// {
//   id: "vadil",
//   title: "वडील",
//   translit: "Vadil",
//   description: "वडील भंडार प्रेमाचा, असे मायेचा सागर...",
//   excerpt: "वडिलांच्या प्रेमाचा, संरक्षणाचा आणि मार्गदर्शनाचा सन्मान.",
//   year: "2023",
//   tags: ["वडील", "प्रेम", "माया"],
//   featured: false,
// },
// {
//   id: "vel",
//   title: "वेळ",
//   translit: "Vel",
//   description: "वेळेवर आधारित कविता...",
//   excerpt: "वेळेच्या महत्त्वावर आणि त्याच्या प्रवाहावर आधारित विचार.",
//   year: "2023",
//   tags: ["वेळ", "प्रवास", "जीवन"],
//   featured: false,
// },
// {
//   id: "baalamajuri",
//   title: "बालमजुरी",
//   translit: "Baalamajuri",
//   description: "बालमजुरीवर आधारित कविता...",
//   excerpt: "बालमजुरीच्या कष्ट आणि त्यातून मिळालेल्या अनुभवांचे वर्णन.",
//   year: "2023",
//   tags: ["बालमजुरी", "कष्ट", "अनुभव"],
//   featured: false,
// },
// {
//   id: "pimpalache_zhad",
//   title: "पिंपळाचे झाड",
//   translit: "PimpalacheZhad",
//   description: "पिंपळाच्या झाडावर आधारित कविता...",
//   excerpt: "पिंपळाच्या झाडाच्या सौंदर्य आणि महत्त्वावर आधारित कविता.",
//   year: "2023",
//   tags: ["निसर्ग", "झाड", "पिंपळ"],
//   featured: false,
// },
// {
//   id: "lokmanya",
//   title: "लोकमान्य",
//   translit: "Lokmanya",
//   description: "लोकमान्य टिळकांवर आधारित कविता...",
//   excerpt: "लोकमान्य टिळक यांच्या जीवन आणि कार्याचा गौरव.",
//   year: "2023",
//   tags: ["लोकमान्य टिळक", "स्वातंत्र्य", "इतिहास"],
//   featured: false,
// },
// {
//   id: "guru3",
//   title: "गुरु",
//   translit: "Guru3",
//   description: "गुरुंवर आधारित कविता...",
//   excerpt: "गुरुंच्या महत्त्वाचा आणि शिक्षणाचा सन्मान करणारी कविता.",
//   year: "2023",
//   tags: ["गुरु", "शिक्षण", "सन्मान"],
//   featured: false,
// },
// {
//   id: "pravas yashacha",
//   title: "प्रवास यशाचा",
//   translit: "PravasYashacha",
//   description: "कर्तृत्व, प्रेरणा आणि पुरस्कारांच्या प्रवासावर आधारित कविता.",
//   excerpt: "कर्तुत्वाने तुमच्या तेजोमय झाले आकाश....",
//   year: "2025",
//   tags: ["प्रेरणा", "शिक्षक", "यश"],
//   featured: false,
// },
// {
//   id: "parents_poem",
//   title: "Parents",
//   translit: "Parents",
//   description: "A heartfelt English poem about the value, love, and care of parents.",
//   excerpt: "Nothing is precious in word like mom and dad...",
//   year: "2025",
//   tags: ["parents", "love", "gratitude"],
//   featured: false,
// },
// {
//   id: "jagache_sukh",
//   title: "जगाचे सुख आई-वडिलांच्या पायी",
//   translit: "JagacheSukh",
//   description: "आई-वडिलांच्या पायाशी जगण्याच्या सुखाचे महत्त्व.",
//   excerpt: "आई-वडिलांच्या चरणी जगण्याच्या सुखाचे महत्त्व.",
//   year: "2023",
//   tags: ["आई", "वडील", "आदर"],
//   featured: false,
// },
// {
//   id: "ek_sundar_kshan_natyancha",
//   title: "एक सुंदर क्षण नात्यांचा",
//   translit: "EkSundarKshanNatyancha",
//   description: "नात्यांमध्ये असलेल्या खास क्षणांचा प्रवास आणि आनंद.",
//   excerpt: "दगदगीचा एक क्षण म्हणजे प्रवास...",
//   year: "2025",
//   tags: ["नाते", "आनंद", "प्रवास"],
//   featured: false,
// },
// {
//   id: "pariksha_ali_re_ata",
//   title: "परीक्षा आली रे आता",
//   translit: "ParikshaAliReAta",
//   description: "जीवनातील परीक्षांच्या तणाव आणि त्यांचा सामना करण्याबाबत कविता.",
//   excerpt: "परीक्षा आली रे !आता हे वाक्य सारखे ऐकायचे आईचे....",
//   year: "2025",
//   tags: ["परीक्षा", "जीवन", "तणाव"],
//   featured: false,
// },
// ];
const PoemCollection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPoems, setFilteredPoems] = useState(poemCollection);
  const [selectedTag, setSelectedTag] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFilters, setShowFilters] = useState(false);
  const [filterYear, setFilterYear] = useState(null);
  const [filterTranslation, setFilterTranslation] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const searchInputRef = useRef(null);
  const previewRef = useRef(null);

  // Focus search on mount
  useEffect(() => {
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 500);
  }, []);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(poemCollection.flatMap(poem => poem.tags))
  ).sort();

  // Extract all unique years
  const allYears = Array.from(
    new Set(poemCollection.map(poem => poem.year))
  ).sort().reverse();

  // Extract all unique translations
  const allTranslations = Array.from(
    new Set(poemCollection.flatMap(poem => poem.translations))
  ).sort();

  // Filter and sort poems
  useEffect(() => {
    let filtered = [...poemCollection];
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(poem =>
        poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.translit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Tag filter
    if (selectedTag) {
      filtered = filtered.filter(poem =>
        poem.tags.includes(selectedTag)
      );
    }
    
    // Year filter
    if (filterYear) {
      filtered = filtered.filter(poem => poem.year === filterYear);
    }
    
    // Translation filter
    if (filterTranslation) {
      filtered = filtered.filter(poem => 
        poem.translations.includes(filterTranslation)
      );
    }
    
    // Sorting
    if (sortBy === "newest") {
      filtered.sort((a, b) => b.year.localeCompare(a.year));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => a.year.localeCompare(b.year));
    } else if (sortBy === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "za") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "featured") {
      filtered.sort((a, b) => b.featured - a.featured);
    }
    
    setFilteredPoems(filtered);
  }, [searchQuery, selectedTag, filterYear, filterTranslation, sortBy]);

  // Close preview when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (previewRef.current && !previewRef.current.contains(event.target)) {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle poem card click
  const handlePoemClick = (poem) => {
    setSelectedPoem(poem);
    setIsPreviewOpen(true);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
    setFilterYear(null);
    setFilterTranslation(null);
    setSortBy("newest");
  };

  // Get poem color based on tags and featured status
  const getPoemColor = (poem) => {
    if (poem.featured) {
      return "var(--featured-poem-bg, #f0e6ff)";
    }
    if (poem.tags.includes("अध्यात्म")) {
      return "var(--spiritual-poem-bg, #fff2e6)";
    }
    if (poem.tags.includes("निसर्ग")) {
      return "var(--nature-poem-bg, #e6fff2)";
    }
    if (poem.tags.includes("प्रेम")) {
      return "var(--love-poem-bg, #ffe6e6)";
    }
    return "var(--default-poem-bg, #f5f5f5)";
  };

  return (
    <div className="poem-page">
      <div className="poem-header">
        <motion.h1 
          className="poem-collection-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="title-wrapper">
            <span className="title-prefix">काव्य</span>
            <span className="title-main">संग्रह</span>
          </div>

        </motion.h1>
        
        <motion.div 
          className="poem-collection-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="poet-name">- Revati</span>
          <span className="poem-count">{poemCollection.length} कविता</span>
        </motion.div>
      </div>

      <motion.div 
        className="search-and-filter-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input
            ref={searchInputRef}
            type="search"
            placeholder="शीर्षक, टॅग किंवा मजकूराद्वारे शोधा..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="clear-search" 
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          )}
        </div>

        <div className="controls-wrapper">
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>फिल्टर</span>
            <span className={`filter-arrow ${showFilters ? 'open' : ''}`}>▼</span>
          </button>
          
          <div className="view-toggles">
            <button 
              className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <span className="grid-icon"></span>
            </button>
            <button 
              className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <span className="list-icon"></span>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFilters && (
          <motion.div 
            className="filters-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="filter-section tags-filter">
              <h3>टॅग</h3>
              <div className="tag-buttons">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>वर्ष</h3>
              <select 
                value={filterYear || ''}
                onChange={(e) => setFilterYear(e.target.value || null)}
              >
                <option value="">सर्व वर्षे</option>
                {allYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="filter-section">
              <h3>अनुवाद</h3>
              <select 
                value={filterTranslation || ''}
                onChange={(e) => setFilterTranslation(e.target.value || null)}
              >
                <option value="">सर्व अनुवाद</option>
                {allTranslations.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            <div className="filter-section">
              <h3>क्रमवारी</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">नवीनतम</option>
                <option value="oldest">जुनेतम</option>
                <option value="az">शीर्षक (अ → ज्ञ)</option>
                <option value="za">शीर्षक (ज्ञ → अ)</option>
                <option value="featured">विशेष दाखल</option>
              </select>
            </div>

            <button className="reset-filters" onClick={resetFilters}>
              फिल्टर रीसेट करा
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="filter-status">
        {(searchQuery || selectedTag || filterYear || filterTranslation) && (
          <div className="active-filters">
            <span>सक्रिय फिल्टर:</span>
            {searchQuery && (
              <span className="filter-pill">
                शोध: "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>✕</button>
              </span>
            )}
            {selectedTag && (
              <span className="filter-pill">
                टॅग: {selectedTag}
                <button onClick={() => setSelectedTag(null)}>✕</button>
              </span>
            )}
            {filterYear && (
              <span className="filter-pill">
                वर्ष: {filterYear}
                <button onClick={() => setFilterYear(null)}>✕</button>
              </span>
            )}
            {filterTranslation && (
              <span className="filter-pill">
                अनुवाद: {filterTranslation}
                <button onClick={() => setFilterTranslation(null)}>✕</button>
              </span>
            )}
          </div>
        )}
        
        <div className="results-count">
          {filteredPoems.length} 
          {filteredPoems.length === 1 ? ' कविता' : ' कविता'}
        </div>
      </div>

      {filteredPoems.length === 0 ? (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="no-results-icon">📜</div>
          <h3>कोणतीही कविता सापडली नाही</h3>
          <p>कृपया वेगळे शब्द वापरून शोधा किंवा फिल्टर बदला.</p>
          <button className="reset-filters" onClick={resetFilters}>
            सर्व फिल्टर्स रीसेट करा
          </button>
        </motion.div>
      ) : (
        <motion.div 
          className={`poems-collection ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredPoems.map((poem, index) => (
            <div
              key={poem.id}
              className={`poem-item ${poem.featured ? 'featured' : ''}`}
              style={{ backgroundColor: getPoemColor(poem) }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
              }}
              onClick={() => handlePoemClick(poem)}
            >
              {poem.featured && viewMode === 'grid' && (
                <div className="featured-badge">विशेष</div>
              )}
              
              <div className="poem-content">
                <h3 className="poem-title">{poem.title}</h3>
                {viewMode === 'grid' && (
                  <p className="poem-excerpt">{poem.excerpt}</p>
                )}
                {viewMode === 'list' && (
                  <div className="poem-list-details">
                    <p className="poem-description">{poem.description}</p>
                    <div className="poem-meta">
                      <span className="poem-year">{poem.year}</span>
                      {poem.featured && <span className="featured-text">विशेष</span>}
                    </div>
                  </div>
                )}
                
                {viewMode === 'grid' && (
                  <div className="poem-footer">
                    <div className="poem-tags">
                      {poem.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="poem-tag">{tag}</span>
                      ))}
                      {poem.tags.length > 2 && <span className="tag-more">+{poem.tags.length - 2}</span>}
                    </div>
                    <span className="poem-year">{poem.year}</span>
                  </div>
                )}
              </div>
              
              <div className="read-button">
                <BookOpen size={16} />
                <span>वाचा</span>
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {isPreviewOpen && selectedPoem && (
          <motion.div 
            className="poem-preview-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="poem-preview-container"
              ref={previewRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <button 
                className="close-preview"
                onClick={() => setIsPreviewOpen(false)}
              >
                ✕
              </button>
              
              <div className="preview-header">
                <h2 className="preview-title">{selectedPoem.title}</h2>
                <div className="preview-meta">
                  <span className="preview-year">{selectedPoem.year}</span>
                  {selectedPoem.featured && <span className="preview-featured">विशेष दाखल</span>}
                  
                  <div className="preview-actions">
                  </div>
                </div>
              </div>
              
              <div className="preview-content">
                <p className="preview-excerpt">
                  {selectedPoem.excerpt}
                  <span className="preview-ellipsis">...</span>
                </p>
                
                <div className="preview-continue">
                  <a href={`/poems/${selectedPoem.id}`} className="preview-read-full">
                    संपूर्ण कविता वाचा
                  </a>
                </div>
                
                <div className="preview-tags-section">
                  <h4><Tag size={16} /> टॅग:</h4>
                  <div className="preview-tags">
                    {selectedPoem.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="preview-tag"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTag(tag);
                          setIsPreviewOpen(false);
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
 
  );
};

export default PoemCollection;