import { AcademicProgram, GalleryItem, NavItem, NoticeItem, TeacherItem, WhyChooseItem } from '../types';

import quranStudyImg from '../assets/images/academic_quran_study_1791341528979.jpg';
import campusLibraryImg from '../assets/images/campus_library_hall_1791341540456.jpg';
import heroComplexImg from '../assets/images/hero_campus_complex_1791342965149.jpg';
import heroExteriorImg from '../assets/images/hero_campus_exterior_1791341510153.jpg';
import institutionBuildingImg from '../assets/images/institution_building_day_1791341552468.jpg';

export const INSTITUTION_INFO = {
  nameBn: 'কোনাবাড়ী দারুল উলূম কমপ্লেক্স',
  nameEn: 'Konabari Darul Uloom Complex',
  shortNameBn: 'দারুল উলূম কমপ্লেক্স',
  shortNameEn: 'Darul Uloom Complex',
  taglineBn: 'দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে আদর্শ প্রজন্ম গড়ার প্রত্যয়ে',
  taglineEn: 'Committed to nurturing an ideal generation through Islamic and modern education.',
  email: 'darululoomkonabari@gmail.com',
  phone: '01980470360',
  addressBn: 'হক মেডিকেলের পূর্ব পাশে, কাশিমপুর রোড, কোনাবাড়ী, গাজীপুর।',
  addressEn: 'East of Haque Medical, Kashimpur Road, Konabari, Gazipur, Bangladesh.',
  areaBn: 'কোনাবাড়ী, গাজীপুর',
  areaEn: 'Konabari, Gazipur',
  officeHoursBn: 'সকাল ৭:০০ থেকে রাত ১০:০০ পর্যন্ত (শুক্রবার সীমিত সময়)',
  officeHoursEn: '7:00 AM to 10:00 PM (Limited Friday hours)',
  heroImage: 'https://res.cloudinary.com/jeqkcwf8/image/upload/v1791375497/%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A7%E0%A6%BE%E0%A6%A8_%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%95%E0%A7%87%E0%A6%B0_%E0%A6%95%E0%A6%95%E0%A7%8D%E0%A6%B7.png',
  quranStudyImage: quranStudyImg,
  libraryImage: campusLibraryImg,
  campusBuildingImage: 'https://res.cloudinary.com/jeqkcwf8/image/upload/v1791355568/WhatsApp_Image_2026-03-01_at_11.18.06_AM.jpg',
  logoUrl: 'https://res.cloudinary.com/jeqkcwf8/image/upload/v1791341141/Madrasha_Logo_New.jpg',
  campusPlanTitle: 'KONABARI DARUL ULOOM COMPLEX, GAZIPUR',
  campusPlanTag: 'পরিকল্পিত',
  campusPlanTagEn: 'Planned',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelBn: 'হোম', labelEn: 'Home', href: '#home' },
  { id: 'about', labelBn: 'আমাদের সম্পর্কে', labelEn: 'About Us', href: '#about' },
  { id: 'programs', labelBn: 'শিক্ষা কার্যক্রম', labelEn: 'Academic Programs', href: '#programs' },
  { id: 'departments', labelBn: 'বিভাগসমূহ', labelEn: 'Departments', href: '#departments' },
  { id: 'teachers', labelBn: 'শিক্ষকবৃন্দ', labelEn: 'Teachers', href: '#teachers' },
  { id: 'admission', labelBn: 'ভর্তি', labelEn: 'Admission', href: '#admission' },
  { id: 'notice', labelBn: 'নোটিশ', labelEn: 'Notice', href: '#notice' },
  { id: 'gallery', labelBn: 'গ্যালারি', labelEn: 'Gallery', href: '#gallery' },
  { id: 'contact', labelBn: 'যোগাযোগ', labelEn: 'Contact', href: '#contact' },
];

export const ABOUT_CONTENT = {
  summaryBn:
    'কোনাবাড়ী দারুল উলূম কমপ্লেক্স একটি আদর্শ ইসলামী শিক্ষা প্রতিষ্ঠান। দ্বীনি শিক্ষার পাশাপাশি প্রয়োজনীয় সাধারণ ও আধুনিক শিক্ষার সমন্বয়ের মাধ্যমে শিক্ষার্থীদের জ্ঞান, নৈতিকতা, আদব-আখলাক ও দায়িত্বশীলতার গুণাবলি বিকাশে গুরুত্ব দেওয়া হয়।',
  summaryEn:
    'Konabari Darul Uloom Complex is an Islamic educational institution committed to developing students through a balanced approach to Islamic and modern education, with emphasis on knowledge, moral values, discipline, manners and responsibility.',
  detailsBn: `কোনাবাড়ী দারুল উলূম কমপ্লেক্স গাজীপুরের কোনাবাড়ী এলাকায় অবস্থিত একটি সমন্বিত দ্বীনি শিক্ষা প্রতিষ্ঠান। আমাদের প্রধান উদ্দেশ্য হলো এমন এক প্রজন্ম গড়ে তোলা, যারা কুরআন-সুন্নাহর সঠিক জ্ঞানে আলোকিত হবে এবং সমকালীন যুগের চ্যালেঞ্জ মোকাবেলায় যোগ্য ও নৈতিকভাবে সমৃদ্ধ নাগরিক হিসেবে আত্মপ্রকাশ করবে।

আমাদের মূল বৈশিষ্ট্যসমূহ:
• বিশুদ্ধ তাজবিদ সহকারে পবিত্র কুরআন তিলাওয়াত ও হিফজ শিক্ষা
• নৈতিকতা, খোদাভীতি ও আদব-আখলাকের গভীর অনুশীলন
• দ্বীনি শিক্ষার পাশাপাশি বাংলা, ইংরেজি ও গণিতের বুনিয়াদি প্রশিক্ষণ
• সার্বক্ষণিক আন্তরিক ও নিবেদিত শিক্ষকগণের প্রত্যক্ষ তত্ত্বাবধান
• একটি পরিচ্ছন্ন, সুশৃঙ্খল ও আন্তরিক শিক্ষার্থীবান্ধব পরিবেশ`,
  detailsEn: `Konabari Darul Uloom Complex is an integrated Islamic educational institution located in the Konabari area of Gazipur, Bangladesh. Our primary aim is to nurture a generation enriched with sound Quranic and Sunnah knowledge, equipped to face modern challenges with high ethical standards and social responsibility.

Our Core Features:
• Pure Tajweed instruction for correct Quran recitation and Hifz memorization
• Daily emphasis on morals, Taqwa, adab (etiquette), and ethical discipline
• Comprehensive integration of essential Bangla, English, and Mathematics
• Continuous caring supervision by dedicated and sincere faculty
• Clean, safe, disciplined, and student-focused learning atmosphere`,
};

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'noorani-nazera',
    titleBn: 'নূরানী ও নাজেরা বিভাগ',
    titleEn: 'Noorani & Nazera Department',
    durationBn: '১ থেকে ২ বছর',
    durationEn: '1 to 2 Years',
    summaryBn: 'বিশুদ্ধ মাখরাজ ও তাজবিদ সহকারে নূরানী পদ্ধতিতে কুরআন তিলাওয়াত এবং প্রাথমিক ইসলামিয়াত শিক্ষা।',
    summaryEn: 'Foundational Quran recitation with accurate Makhraj and Tajweed, alongside essential basic Islamic manners.',
    featuresBn: [
      'বিশুদ্ধ হরফ উচ্চারণ ও মাখরাজ অনুশীলন',
      'মাসনূন দোয়া, প্রয়োজনীয় হাদিস ও দ্বীনি শিষ্টাচার',
      'প্রাথমিক বাংলা, ইংরেজি ও গণিত বুনিয়াদ',
      'স্নেহশীল ও আন্তরিক পাঠদান পদ্ধতি',
    ],
    featuresEn: [
      'Accurate phonetics and letter articulation (Makhraj)',
      'Essential Masnoon Duas, Hadith, and Islamic manners',
      'Foundational Bangla, English, and basic Math',
      'Child-friendly, compassionate teaching approach',
    ],
    eligibilityBn: 'বয়স: ৫ থেকে ৮ বছর',
    eligibilityEn: 'Age: 5 to 8 years',
    curriculumBn: 'নূরানী কায়দা, আমপারা ও পূর্ণ নাজেরা কুরআনুল কারীমসহ দৈনন্দিন প্রয়োজনীয় মাসআলা-মাসায়েল।',
    curriculumEn: 'Noorani Qaida, Ammapara, complete Nazera Quran recitation, and daily Sunnah practices.',
  },
  {
    id: 'hifzul-quran',
    titleBn: 'হিফজুল কুরআন বিভাগ',
    titleEn: 'Hifzul Quran Department',
    durationBn: '২ থেকে ৩ বছর (শিক্ষার্থীর মেধানুযায়ী)',
    durationEn: '2 to 3 Years (Paced to student ability)',
    summaryBn: 'অভিজ্ঞ হাফেজগণের নিবিড় তত্ত্বাবধানে পবিত্র কুরআনের ত্রিশ পারা মুখস্থ ও নিয়মিত শোনানোর সুবিন্যস্ত ব্যবস্থা।',
    summaryEn: 'Systematic memorization and daily revision of the entire Holy Quran under experienced Hafez instructors.',
    featuresBn: [
      'দৈনিক সবক, সবকী ও আমোখতা পর্যালোচনার সুনির্দিষ্ট নিয়ম',
      'তাজবিদ ও লাহনের সর্বোচ্চ বিশুদ্ধতা বজায় রাখা',
      'নিয়মিত তিলাওয়াত প্রতিযোগিতা ও মূল্যায়ন',
      'মানসিক প্রশান্তি ও নিয়মানুবর্তিতার ওপর বিশেষ যত্ন',
    ],
    featuresEn: [
      'Daily Sabak, Sabki, and Amokhta systematic revision cycles',
      'Rigorous maintenance of Tajweed and correct melodic cadence',
      'Periodic recitation review sessions and progress tracking',
      'Holistic focus on student well-being and moral discipline',
    ],
    eligibilityBn: 'নাজেরা সম্পন্নকারী শিক্ষার্থী',
    eligibilityEn: 'Students who completed Nazera recitation',
    curriculumBn: 'সম্পূর্ণ ৩০ পারা হিফজ, নিয়মিত পুনরাবৃত্তি (দাওর) ও হিফজ সনদ প্রস্তুতি।',
    curriculumEn: 'Complete 30 Para memorization, extensive consolidation (Daur), and certification.',
  },
  {
    id: 'kitab-division',
    titleBn: 'কিতাব বিভাগ',
    titleEn: 'Kitab Division',
    durationBn: 'পর্যায়ক্রমিক শিক্ষাবর্ষ',
    durationEn: 'Structured Academic Years',
    summaryBn: 'কুরআন, হাদিস, ফিকহ, আরবি ব্যাকরণ ও ইসলামী জ্ঞানবিজ্ঞানের গভীর তাত্ত্বিক ও ব্যবহারিক অধ্যয়ন।',
    summaryEn: 'Comprehensive study of Quran, Hadith, Fiqh, Arabic grammar, syntax, and classical Islamic sciences.',
    featuresBn: [
      'আরবি ভাষা, নাহব-সরফ ও সাহিত্যের সুসংহত পাঠ',
      'ফিকহ ও উসূলে ফিকহের বাস্তবমুখী বিশ্লেষণ',
      'আকিদা ও ইসলামী জীবনদর্শনের পাঠদান',
      'পণ্ডিত ও নিবেদিত শিক্ষকগণের সার্বক্ষণিক দিকনির্দেশনা',
    ],
    featuresEn: [
      'Systematic mastery of Arabic language, Nahw, and Sarf',
      'Practical understanding of Fiqh and Usul al-Fiqh',
      'Classical Aqeedah and Islamic worldview studies',
      'Continuous guidance by scholarly faculty members',
    ],
    eligibilityBn: 'কুরআন ও প্রাথমিক জ্ঞান সম্পন্ন শিক্ষার্থী',
    eligibilityEn: 'Students with prerequisite foundational knowledge',
    curriculumBn: 'দরসে নেজামী ভিত্তিক প্রামাণিক কিতাবসমূহ এবং সহায়ক জ্ঞান।',
    curriculumEn: 'Classical Dars-e-Nizami foundational texts and contextual studies.',
  },
  {
    id: 'general-education',
    titleBn: 'সাধারণ শিক্ষা',
    titleEn: 'General Education',
    durationBn: 'দ্বীনি শিক্ষার পাশাপাশি সমন্বিত',
    durationEn: 'Integrated alongside Islamic Studies',
    summaryBn: 'শিক্ষার্থীদের যুগোপযোগী করে গড়ে তুলতে আধুনিক সাধারণ শিক্ষার মৌলিক বিষয়সমূহের সমন্বিত পাঠদান।',
    summaryEn: 'Essential modern subjects integrated to equip students with practical skills and broad awareness.',
    featuresBn: [
      'বাংলা ভাষা, বানান ও রচনা দক্ষতা',
      'ইংরেজি কথোপকথন ও মৌলিক ব্যাকরণ',
      'ব্যবহারিক গণিত ও সাধারণ বিজ্ঞান',
      'সুন্দর হস্তলিপি ও উপস্থাপনা প্রশিক্ষণ',
    ],
    featuresEn: [
      'Bangla language, spelling, and essay writing skills',
      'Basic English communication and grammar',
      'Practical mathematics and everyday science',
      'Handwriting improvement and presentation etiquette',
    ],
    eligibilityBn: 'প্রতিষ্ঠানের সকল সাধারণ শ্রেণির শিক্ষার্থী',
    eligibilityEn: 'Enrolled students across standard levels',
    curriculumBn: 'জাতীয় পাঠ্যক্রমের সাথে সঙ্গতিপূর্ণ মৌলিক সাধারণ শিক্ষা।',
    curriculumEn: 'Core general education aligned with standard educational benchmarks.',
  },
  {
    id: 'other-programs',
    titleBn: 'অন্যান্য শিক্ষা কার্যক্রম',
    titleEn: 'Other Academic Programs',
    durationBn: 'নিয়মিত ও সাপ্তাহিক কর্মশালা',
    durationEn: 'Regular & Weekly Workshops',
    summaryBn: 'বক্তৃতা প্রশিক্ষণ, সিরাত চর্চা, হাতের লেখা সুন্দরকরণ ও চরিত্র গঠনে সহশিক্ষা কার্যক্রম।',
    summaryEn: 'Extracurricular programs including public speaking, Seerah circles, calligraphy, and leadership training.',
    featuresBn: [
      'সাপ্তাহিক বক্তৃতা ও তিলাওয়াত অনুশীলন মাহফিল',
      'আদব-আখলাক ও সামাজিক শিষ্টাচার বিষয়ক বয়ান',
      'সুন্দর হাতের লেখা (খত) প্রশিক্ষণ',
      'বার্ষিক সাংস্কৃতিক প্রতিযোগিতা ও পুরস্কার বিতরণী',
    ],
    featuresEn: [
      'Weekly public speaking and Quran recitation circles',
      'Etiquette, social courtesy, and character seminars',
      'Calligraphy and neat penmanship training',
      'Annual cultural competitions and prize distributions',
    ],
    eligibilityBn: 'সকল আগ্রহী শিক্ষার্থী',
    eligibilityEn: 'All interested institution students',
    curriculumBn: 'ব্যবহারিক দ্বীনি শিষ্টাচার, সমাজসেবা ও সহশিক্ষামূলক কর্মশালা।',
    curriculumEn: 'Applied Islamic manners, community spirit, and holistic skill-building.',
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'quality-education',
    titleBn: 'মানসম্মত শিক্ষা',
    titleEn: 'Quality Education',
    descriptionBn: 'উচ্চমানের পাঠদান পদ্ধতি ও প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত মনোযোগ নিশ্চিতকরণ।',
    descriptionEn: 'High standard instructional methods with personalized attention for every student.',
    iconName: 'GraduationCap',
  },
  {
    id: 'islamic-moral',
    titleBn: 'দ্বীনি ও নৈতিক শিক্ষা',
    titleEn: 'Islamic & Moral Education',
    descriptionBn: 'পবিত্র কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীদের হৃদয়ে তাকওয়া ও উচ্চ নৈতিকতার বিকাশ।',
    descriptionEn: 'Fostering Taqwa and strong ethical values in the light of the Holy Quran and Sunnah.',
    iconName: 'BookOpen',
  },
  {
    id: 'character-development',
    titleBn: 'আদব-আখলাকের চর্চা',
    titleEn: 'Character Development',
    descriptionBn: 'বিনয়, শ্রদ্ধা, পরিচ্ছন্নতা ও সত্যবাদিতার মতো উত্তম চারিত্রিক গুণাবলির সার্বক্ষণিক চর্চা।',
    descriptionEn: 'Continuous cultivation of humility, respect, honesty, and refined social manners.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'disciplined-environment',
    titleBn: 'শৃঙ্খলাপূর্ণ পরিবেশ',
    titleEn: 'Disciplined Environment',
    descriptionBn: 'পরিমিত সময়ানুবর্তিতা, পরিচ্ছন্নতা এবং ধর্মীয় অনুশাসনের সুরক্ষিত ক্যাম্পাস পরিবেশ।',
    descriptionEn: 'Strict punctuality, clean surroundings, and a secure environment anchored in religious values.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'experienced-teachers',
    titleBn: 'অভিজ্ঞ শিক্ষকবৃন্দ',
    titleEn: 'Experienced Teachers',
    descriptionBn: 'দ্বীনি শিক্ষায় পারদর্শী, স্নেহশীল ও নিবেদিতপ্রাণ ওস্তাদগণের সার্বক্ষণিক দিকনির্দেশনা।',
    descriptionEn: 'Guidance by knowledgeable, compassionate, and sincerely dedicated faculty members.',
    iconName: 'Users',
  },
  {
    id: 'student-friendly',
    titleBn: 'শিক্ষার্থীবান্ধব পরিবেশ',
    titleEn: 'Student-Friendly Environment',
    descriptionBn: 'ভয়হীন, আন্তরিক ও সহযোগিতামূলক আবহে শিক্ষার্থীদের স্বাভাবিক প্রতিভা বিকাশের সুযোগ।',
    descriptionEn: 'A supportive, nurturing, and fear-free setting where student potential naturally flourishes.',
    iconName: 'Smile',
  },
];

export const NOTICES: NoticeItem[] = [
  {
    id: 'notice-1',
    titleBn: 'ভর্তি সংক্রান্ত বিজ্ঞপ্তি',
    titleEn: 'Admission Notice',
    categoryBn: 'ভর্তি',
    categoryEn: 'admission',
    dateBn: '১ বৈশাখ / চলতি শিক্ষাবর্ষ',
    dateEn: 'Academic Session 2026',
    summaryBn: 'নতুন শিক্ষাবর্ষে নূরানী, নাজেরা ও হিফজুল কুরআন বিভাগে শিক্ষার্থী ভর্তি কার্যক্রম চলছে।',
    summaryEn: 'New admissions are currently open for Noorani, Nazera, and Hifzul Quran departments.',
    contentBn: `কোনাবাড়ী দারুল উলূম কমপ্লেক্সের সম্মানিত অভিভাবক ও সুধীবৃন্দের অবগতির জন্য জানানো যাচ্ছে যে, নতুন শিক্ষাবর্ষের জন্য নূরানী, নাজেরা ও হিফজ বিভাগে ভর্তি ফরম বিতরণ চলছে।

ভর্তির জন্য প্রয়োজনীয় কাগজপত্র:
১. শিক্ষার্থীর জন্ম নিবন্ধনের ফটোকপি
২. পিতা ও মাতার জাতীয় পরিচয়পত্রের (NID) ফটোকপি
৩. পাসপোর্ট সাইজের ২ কপি রঙিন ছবি
৪. পূর্ববর্তী মাদরাসা বা বিদ্যালয়ের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)

যোগাযোগ: ০১৯৮০৪৭০৩৬০
ঠিকানা: হক মেডিকেলের পূর্ব পাশে, কাশিমপুর রোড, কোনাবাড়ী, গাজীপুর।`,
    contentEn: `Notice is hereby given to honorable guardians that admission forms are now available for Noorani, Nazera, and Hifzul Quran departments for the academic session.

Required Documents for Admission:
1. Photocopy of student's Birth Registration Certificate
2. Photocopy of Father's and Mother's National ID (NID)
3. 2 passport-size color photographs
4. Previous institution clearance/transfer certificate (if applicable)

Contact: 01980470360
Address: East of Haque Medical, Kashimpur Road, Konabari, Gazipur.`,
    isImportant: true,
  },
  {
    id: 'notice-2',
    titleBn: 'ক্লাস কার্যক্রম সংক্রান্ত বিজ্ঞপ্তি',
    titleEn: 'Academic Class Schedule Notice',
    categoryBn: 'শিক্ষা কার্যক্রম',
    categoryEn: 'academic',
    dateBn: 'চলতি সপ্তাহ',
    dateEn: 'Current Academic Week',
    summaryBn: 'সকল বিভাগের নিয়মিত ক্লাস ও সবক নির্ধারিত রুটিন অনুযায়ী পরিচালিত হচ্ছে।',
    summaryEn: 'Regular classes and lesson schedules across all departments are running on standard timetable.',
    contentBn: `সকল বিভাগের শিক্ষার্থীদের যথাসময়ে ক্লাসে উপস্থিতি নিশ্চিত করার অনুরোধ করা হচ্ছে। প্রতিদিন ফজর পরবর্তী সময়ে হিফজ ও নাজেরা সবক শুরু হয় এবং নির্ধারিত বিরতির পর সাধারণ বিষয়ের পাঠদান পরিচালিত হয়। অসুস্থতা ব্যতীত অনুপস্থিতি নিরুৎসাহিত করা হচ্ছে।`,
    contentEn: `Students of all departments are requested to ensure timely attendance in their classes. Hifz and Nazera lessons commence promptly after Fajr prayers, followed by scheduled general subject sessions. Unexcused absence is strictly discouraged.`,
  },
  {
    id: 'notice-3',
    titleBn: 'পরীক্ষা সংক্রান্ত বিজ্ঞপ্তি',
    titleEn: 'Examination Schedule Notice',
    categoryBn: 'পরীক্ষা',
    categoryEn: 'exam',
    dateBn: 'ত্রৈমাসিক / সাময়িক পরীক্ষা',
    dateEn: 'Term Assessment Session',
    summaryBn: 'আসন্ন সাময়িক মূল্যায়ন পরীক্ষার সময়সূচি ও পাঠ্যসূচি নোটিশ বোর্ডে প্রকাশ করা হয়েছে।',
    summaryEn: 'Upcoming term assessment timetable and syllabus outline have been published on the board.',
    contentBn: `সকল বিভাগের সাময়িক তিলাওয়াত ও কিতাব পরীক্ষার প্রস্তুতি গ্রহণের জন্য শিক্ষার্থীদের নির্দেশ দেওয়া হচ্ছে। সম্মানিত অভিভাবকগণকে নিজ নিজ সন্তানের দৈনন্দিন পড়াশোনার অগ্রগতি তদারকি করার জন্য অনুরোধ জানানো হচ্ছে। বিস্তারিত রুটিন মাদরাসা অফিসে পাওয়া যাবে।`,
    contentEn: `Students across all divisions are advised to prepare systematically for upcoming recitation and subject evaluations. Guardians are requested to monitor their children's daily study routines. Detailed routines are available at the administration office.`,
  },
  {
    id: 'notice-4',
    titleBn: 'ছুটির বিজ্ঞপ্তি',
    titleEn: 'Institutional Holiday Notice',
    categoryBn: 'ছুটি',
    categoryEn: 'holiday',
    dateBn: 'আসন্ন দ্বীনি উপলক্ষ',
    dateEn: 'Upcoming Islamic Occasion',
    summaryBn: 'পবিত্র দ্বীনি উপলক্ষ উপলক্ষে মাদরাসার শিক্ষা কার্যক্রমের সাময়িক ছুটি সংক্রান্ত তথ্য।',
    summaryEn: 'Information regarding scheduled holiday recess on the occasion of sacred Islamic events.',
    contentBn: `পবিত্র দ্বীনি উপলক্ষ উপলক্ষে প্রতিষ্ঠানের আনুষ্ঠানিক পাঠদান সাময়িক স্থগিত থাকবে। ছুটি শেষে যথারীতি নির্ধারিত তারিখে ক্লাস পুনরায় শুরু হবে। আবাসিক শিক্ষার্থীদের নির্দিষ্ট সময়ে ক্যাম্পাসে উপস্থিত হতে হবে।`,
    contentEn: `Official class sessions will remain suspended during the designated religious holidays. Classes will resume strictly on the announced date. Residential students must report back on time.`,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    titleBn: 'ক্যাম্পাস ভবন ও প্রাঙ্গণ',
    titleEn: 'Campus Building & Courtyard',
    category: 'campus',
    imageUrl: 'https://res.cloudinary.com/jeqkcwf8/image/upload/v1791355568/WhatsApp_Image_2026-03-01_at_11.18.06_AM.jpg',
    captionBn: 'কোনাবাড়ী দারুল উলূম কমপ্লেক্সের সুপরিসর ক্যাম্পাস ভবন।',
    captionEn: 'Campus building of Konabari Darul Uloom Complex.',
  },
  {
    id: 'g-2',
    titleBn: 'হিফজ ও তিলাওয়াত কক্ষ',
    titleEn: 'Quran Study & Hifz Hall',
    category: 'academic',
    imageUrl: quranStudyImg,
    captionBn: 'পবিত্র কুরআন তিলাওয়াত ও হিফজ অনুশীলনের শান্তিময় পরিবেশ।',
    captionEn: 'Serene and focused environment for Holy Quran recitation and memorization.',
  },
  {
    id: 'g-3',
    titleBn: 'কিতাবখানা ও পাঠাগার',
    titleEn: 'Library & Kitab Study Center',
    category: 'academic',
    imageUrl: campusLibraryImg,
    captionBn: 'ইসলামিক গবেষণামূলক কিতাব ও সাহিত্যসমৃদ্ধ পাঠাগার।',
    captionEn: 'Institutional library enriched with classical Islamic references and literature.',
  },
  {
    id: 'g-4',
    titleBn: 'ক্যাম্পাস স্থাপত্য ও পরিবেশ',
    titleEn: 'Campus Architecture & Landscape',
    category: 'campus',
    imageUrl: heroComplexImg,
    captionBn: 'দ্বীনি শিক্ষার উপযোগী সুপরিসর ও মনোরম ক্যাম্পাস পরিবেশ।',
    captionEn: 'Serene campus environment designed for dedicated Islamic education.',
  },
  {
    id: 'g-5',
    titleBn: 'শিক্ষার্থীদের দৈনন্দিন পাঠাভ্যাস',
    titleEn: 'Students Daily Study Circle',
    category: 'students',
    imageUrl: quranStudyImg,
    captionBn: 'নিয়মনিষ্ঠভাবে ওস্তাদগণের সামনে সবক আদায়ের সুন্দর মুহূর্ত।',
    captionEn: 'Disciplined student study circle presenting lessons to instructors.',
  },
  {
    id: 'g-6',
    titleBn: 'বার্ষিক ইসলামিক মাহফিল ও দোয়া',
    titleEn: 'Annual Islamic Gathering & Dua',
    category: 'islamic',
    imageUrl: heroExteriorImg,
    captionBn: 'উম্মাহর কল্যাণ কামনায় আয়োজিত বার্ষিক দোয়া ও নসিহত মাহফিল।',
    captionEn: 'Annual gathering for spiritual advice, community unity, and prayers.',
  },
  {
    id: 'g-7',
    titleBn: 'সাংস্কৃতিক প্রতিযোগিতা ও পুরস্কার',
    titleEn: 'Cultural Competition & Awards',
    category: 'events',
    imageUrl: institutionBuildingImg,
    captionBn: 'শিক্ষার্থীদের মেধা ও সহশিক্ষা প্রতিভার স্বীকৃতিস্বরূপ সম্মাননা অনুষ্ঠান।',
    captionEn: 'Appreciation ceremony celebrating student talents and co-curricular achievements.',
  },
  {
    id: 'g-8',
    titleBn: 'সাপ্তাহিক তিলাওয়াত ও কিরাত মাহফিল',
    titleEn: 'Weekly Recitation Circle',
    category: 'islamic',
    imageUrl: campusLibraryImg,
    captionBn: 'তাজবিদভিত্তিক বিশুদ্ধ তিলাওয়াত অনুশীলন কার্যক্রম।',
    captionEn: 'Practice circles for melodious and accurate Tajweed recitation.',
  },
];

// As requested: "Do NOT create fake names or qualifications. Use placeholders such as: শিক্ষকের নাম, পদবি, বিভাগ"
export const TEACHERS: TeacherItem[] = [
  {
    id: 'teacher-1',
    nameBn: 'শিক্ষকের নাম',
    nameEn: "Teacher's Name",
    designationBn: 'মুহতামিম / প্রধান পরিচালক',
    designationEn: 'Principal / Chief Administrator',
    departmentBn: 'প্রশাসন ও শিক্ষা পরিচালনা',
    departmentEn: 'Administration & Academic Oversight',
    profileBn: 'প্রতিষ্ঠানের সার্বিক শিক্ষা পরিচালনা ও দ্বীনি দিকনির্দেশনায় নিয়োজিত।',
    profileEn: 'Overseeing institutional academic excellence and religious direction.',
    avatarSeed: 'admin',
  },
  {
    id: 'teacher-2',
    nameBn: 'শিক্ষকের নাম',
    nameEn: "Teacher's Name",
    designationBn: 'প্রধান শিক্ষক / নাযেম-এ-তা\'লীমাত',
    designationEn: 'Head Teacher / Academic Supervisor',
    departmentBn: 'শিক্ষা ও পাঠ্যক্রম বিভাগ',
    departmentEn: 'Academic & Curriculum Division',
    profileBn: 'শ্রেণিকক্ষের পাঠদান মানোন্নয়ন ও রুটিন তদারকিতে দায়িত্বপ্রাপ্ত।',
    profileEn: 'Responsible for instructional quality and curriculum supervision.',
    avatarSeed: 'academic',
  },
  {
    id: 'teacher-3',
    nameBn: 'শিক্ষকের নাম',
    nameEn: "Teacher's Name",
    designationBn: 'উস্তাদ / শিক্ষক',
    designationEn: 'Instructor / Faculty',
    departmentBn: 'হিফজুল কুরআন বিভাগ',
    departmentEn: 'Hifzul Quran Department',
    profileBn: 'পবিত্র কুরআনুল কারীমের সহিহ তাজবিদ ও হিফজ শিক্ষাদানে নিয়োজিত।',
    profileEn: 'Dedicated to teaching pure Tajweed and Quranic memorization.',
    avatarSeed: 'hifz',
  },
  {
    id: 'teacher-4',
    nameBn: 'শিক্ষকের নাম',
    nameEn: "Teacher's Name",
    designationBn: 'উস্তাদ / শিক্ষক',
    designationEn: 'Instructor / Faculty',
    departmentBn: 'নূরানী ও নাজেরা বিভাগ',
    departmentEn: 'Noorani & Nazera Department',
    profileBn: 'শিশুদের স্নেহ ও যত্নের সাথে মৌলিক কুরআন ও প্রাথমিক ইসলামিয়াত শিক্ষা দেন।',
    profileEn: 'Nurturing young minds in fundamental Quranic reading and manners.',
    avatarSeed: 'noorani',
  },
  {
    id: 'teacher-5',
    nameBn: 'শিক্ষকের নাম',
    nameEn: "Teacher's Name",
    designationBn: 'উস্তাদ / শিক্ষক',
    designationEn: 'Instructor / Faculty',
    departmentBn: 'কিতাব ও আরবি সাহিত্য বিভাগ',
    departmentEn: 'Kitab & Arabic Language Division',
    profileBn: 'আরবি ভাষা, ব্যাকরণ ও শাস্ত্রীয় কিতাবাদির তাত্ত্বিক পাঠদানে নিবেদিত।',
    profileEn: 'Focused on Arabic language, grammar, and foundational Islamic texts.',
    avatarSeed: 'kitab',
  },
  {
    id: 'teacher-6',
    nameBn: 'শিক্ষকের নাম',
    nameEn: "Teacher's Name",
    designationBn: 'শিক্ষক',
    designationEn: 'Teacher',
    departmentBn: 'সাধারণ শিক্ষা বিভাগ',
    departmentEn: 'General Education Department',
    profileBn: 'বাংলা, ইংরেজি ও গণিতসহ আধুনিক প্রয়োজনীয় বিষয়সমূহের পাঠদান পরিচালনা করেন।',
    profileEn: 'Instructing essential modern subjects including Bangla, English, and Math.',
    avatarSeed: 'general',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '০১',
    stepEn: '01',
    titleBn: 'ভর্তি ফরম সংগ্রহ ও পূরণ',
    titleEn: 'Obtain & Fill Application Form',
    descBn: 'মাদরাসা অফিস থেকে নির্ধারিত ভর্তি ফরম সংগ্রহ করে প্রয়োজনীয় তথ্য দিয়ে পূরণ করুন।',
    descEn: 'Collect the official application form from the office and complete all student information.',
  },
  {
    step: '০২',
    stepEn: '02',
    titleBn: 'যোগ্যতা যাচাই ও সাক্ষাৎকার',
    titleEn: 'Evaluation & Interview',
    descBn: 'শিক্ষার্থীর মেধা ও বিভাগ নির্ধারণের লক্ষ্যে প্রাথমিক তিলাওয়াত বা মৌখিক সাক্ষাৎকার।',
    descEn: 'Brief recitation check or conversational interview to determine appropriate department placement.',
  },
  {
    step: '০৩',
    stepEn: '03',
    titleBn: 'কাগজপত্র জমা ও নিবন্ধন',
    titleEn: 'Document Submission & Registration',
    descBn: 'জন্ম নিবন্ধন সনদ, ছবি ও প্রয়োজনীয় কাগজপত্র জমা দিয়ে চূড়ান্ত ভর্তি সম্পন্ন করুন।',
    descEn: 'Submit birth certificate, photographs, and required documents to finalize formal admission.',
  },
];
