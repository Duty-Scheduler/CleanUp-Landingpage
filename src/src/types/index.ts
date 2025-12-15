export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}
