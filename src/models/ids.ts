import type {
  NAV_ITEMS,
  SOCIAL_LINKS,
  SKILL_CATEGORIES,
  PORTFOLIO_FILTERS,
} from '@/data';

export type NavItemId = (typeof NAV_ITEMS)[number]['id'];

export type SocialIconId = (typeof SOCIAL_LINKS)[number]['icon'];

export type SkillCategoryId = (typeof SKILL_CATEGORIES)[number]['id'];

export type PortfolioFilterId = (typeof PORTFOLIO_FILTERS)[number]['id'];
