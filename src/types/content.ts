export type Secretary = {
  name: string;
  full_name: string;
  /** Role / council address shown in UI (e.g. sec_acad@smail.iitpkd.ac.in) */
  email: string;
  /** Student smail used for `/student/<id>/photo.webp`; falls back to `email` if omitted */
  studentEmail?: string;
};

export type CouncilData = {
  council_name: string;
  council_title: string;
  council_email: string;
  secretary: Secretary | null;
  deputies: Secretary[];
};

export type CouncilConvenor = {
  councilTitle: string;
  name: string;
  email: string;
};

export type CouncilPageContent = {
  aboutTitle: string;
  aboutParagraphs: string[];
  galleryTitle: string;
  galleryImages: string[];
  convenors?: CouncilConvenor[];
};

export type CouncilBundle = {
  council: CouncilData;
  page: CouncilPageContent;
};

export type Announcement = {
  id: number;
  title: string;
  body: string;
  priority: string;
  created_at: string;
  author: string;
  author_role: string;
};

export type CalendarEvent = {
  organizer: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  council: string;
  council_name: string;
  council_title: string;
};

export type HomeSecretaryCard = {
  name: string;
  title: string;
  email: string;
  image: string;
};

export type HomeContent = {
  aboutUs: string;
  councilsIntro: string;
  aboutGallery: string[];
  councilGallery: string[];
  deanOffice: HomeSecretaryCard[];
  secretariesDisplayYear: string;
  secretariesByYear: Record<string, HomeSecretaryCard[]>;
};

export type DeveloperCard = {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
};

export type DevelopersContent = {
  coordinator: DeveloperCard[];
  leads: DeveloperCard[];
  developers: DeveloperCard[];
  designers: DeveloperCard[];
};

export type RacScholar = {
  name: string;
  department: string;
  contactUrl: string;
  interests: string[];
  skills: string[];
  latex: boolean;
};
