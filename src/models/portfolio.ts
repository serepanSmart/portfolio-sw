// ─── Navigation ─────────────────────────────

export type NavItem = {
  readonly id: string;
  readonly label: string;
};

// ─── Personal Info ──────────────────────────

export type PersonalInfo = {
  readonly name: string;
  readonly title: string;
  readonly subtitle: string;
  readonly tagline: string;
  readonly description: string;
  readonly location: string;
  readonly avatar: string;
};

// ─── Contact ────────────────────────────────

export type ContactInfo = {
  readonly phone: string;
  readonly email: string;
  readonly skype: string;
  readonly viber: string;
  readonly telegram: string;
  readonly whatsapp: string;
};

export type SocialLink = {
  readonly id: string;
  readonly label: string;
  readonly url: string;
  readonly icon: string;
};

// ─── Skills ─────────────────────────────────

export type Skill = {
  readonly name: string;
  readonly level: number;
};

export type SkillCategory = {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly skills: readonly Skill[];
};

// ─── Experience ─────────────────────────────

export type ExperienceEntry = {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly description: string;
  readonly achievements: readonly string[];
  readonly tech: readonly string[];
  readonly client?: string;
  readonly url?: string;
};

// ─── Clients ────────────────────────────────

export type Client = {
  readonly id: string;
  readonly name: string;
  readonly url: string;
};

// ─── Portfolio ──────────────────────────────

export type PortfolioFilter = {
  readonly id: string;
  readonly label: string;
};

export type PortfolioItem = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly tags: readonly string[];
  readonly filter: string;
  readonly image: string;
};

// ─── Certifications ─────────────────────────

export type Certification = {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
};

// ─── Stats ──────────────────────────────────

export type Stat = {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  readonly suffix: string;
};

// ─── Soft Skills ────────────────────────────

export type SoftSkill = {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
};

// ─── Languages ──────────────────────────────

export type Language = {
  readonly id: string;
  readonly name: string;
  readonly level: string;
};

// ─── Testimonials ───────────────────────────

export type Testimonial = {
  readonly id: string;
  readonly name: string;
  readonly company: string;
  readonly role: string;
  readonly text: string;
  readonly avatar: string;
};

// ─── Star Wars Quotes ───────────────────────

export type SWQuote = {
  readonly text: string;
  readonly author: string;
};

// ─── Section Titles ─────────────────────────

export type SectionTitle = {
  readonly title: string;
  readonly subtitle: string;
};

export type SectionTitles = {
  readonly [key: string]: SectionTitle;
};
