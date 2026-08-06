export type PortfolioType = "web" | "games";
export type PortfolioLang = "en" | "es";

export type Navigation = {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  education: string;
  contact: string;
};

export type About = {
  index: string;
  title: string;
  introduction: string;
  approach: string;
  basedIn: string;
  availability: string;
  oportunities: string;
  languages: string;
};

export type NameSection = {
  role: string;
  statement: string;
  contactButton: string;
  viewWorkButton: string;
};

export type ContactSection = {
  text: string;
  phone: string;
  name: string;
  message: string;
  button: string;
};

export type FooterSection = {
  madeBy: string;
  button: string;
}

export type Skill = {
  number: number;
  title: string;
  skills: string[];
};

export type Project = {
  number: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: number;
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  description: string[];
};

export type AcademicExperience = {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
};

export type Section = {
  header: string;
  title: string;
}

export type PortfolioContent = {
  about: About;
  sections: Section[];
  skills: Skill[];
  projects: Project[];
  workExperience: Experience[];
  academicExperience: AcademicExperience[];
  nameSection: NameSection;
  contactSection: ContactSection;
  footerSection: FooterSection;
};

export type LocalizedPortfolioContent = {
  navigation: Navigation;
  web: PortfolioContent;
  games: PortfolioContent;
};