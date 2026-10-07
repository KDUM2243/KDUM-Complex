export type Language = 'bn' | 'en';

export interface NavItem {
  id: string;
  labelBn: string;
  labelEn: string;
  href: string;
}

export interface AcademicProgram {
  id: string;
  titleBn: string;
  titleEn: string;
  durationBn: string;
  durationEn: string;
  summaryBn: string;
  summaryEn: string;
  featuresBn: string[];
  featuresEn: string[];
  eligibilityBn: string;
  eligibilityEn: string;
  curriculumBn: string;
  curriculumEn: string;
}

export interface WhyChooseItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  iconName: string;
}

export interface NoticeItem {
  id: string;
  titleBn: string;
  titleEn: string;
  categoryBn: string;
  categoryEn: 'admission' | 'academic' | 'exam' | 'holiday';
  dateBn: string;
  dateEn: string;
  summaryBn: string;
  summaryEn: string;
  contentBn: string;
  contentEn: string;
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  titleBn: string;
  titleEn: string;
  category: 'campus' | 'students' | 'academic' | 'events' | 'islamic';
  imageUrl: string;
  captionBn: string;
  captionEn: string;
}

export interface TeacherItem {
  id: string;
  nameBn: string;
  nameEn: string;
  designationBn: string;
  designationEn: string;
  departmentBn: string;
  departmentEn: string;
  profileBn: string;
  profileEn: string;
  avatarSeed: string;
}
