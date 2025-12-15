import type { NavItem, Feature, FooterSection, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Products', href: '#products', hasDropdown: true },
  { label: 'Business Solutions', href: '#solutions', hasDropdown: true },
  { label: 'Help Center', href: '#help', hasDropdown: true },
  { label: 'Pricing', href: '#pricing' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Real-time Task Tracking',
    description: 'Monitor task progress instantly and effortlessly.',
  },
  {
    id: 2,
    title: 'Secure Workspace',
    description: 'A safe and organized workspace with fine access control.',
  },
  {
    id: 3,
    title: 'Flexible Task Options',
    description: 'Customize tasks to fit your teams workflow.',
  },
  {
    id: 4,
    title: 'Performance Feedback',
    description: 'Evaluate performance to improve productivity.',
  },
];

export const ORGANIZE_FEATURES = [
  {
    icon: 'mail',
    title: 'Real-time Tracking',
    description: 'Stay updated as tasks move from start to finish.',
  },
  {
    icon: 'shield',
    title: 'Secure Workspace',
    description: 'Protected, reliable and seamless collaboration.',
  },
  {
    icon: 'settings',
    title: 'Smart Task Options',
    description: 'Create, assign, and customize tasks to fit your workflow.',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'About Taskly',
    links: [
      { label: "What's behind the boards", href: '#' },
    ],
  },
  {
    title: 'Jobs',
    links: [
      { label: 'Learn about open roles on the team', href: '#' },
    ],
  },
  {
    title: 'Apps',
    links: [
      { label: 'Download the Taskly App', href: '#' },
    ],
  },
  {
    title: 'Contact us',
    links: [
      { label: 'Need anything? Get in touch and we can help', href: '#' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'instagram', href: '#', label: 'Instagram' },
  { icon: 'facebook', href: '#', label: 'Facebook' },
  { icon: 'youtube', href: '#', label: 'YouTube' },
  { icon: 'twitter', href: '#', label: 'Twitter' },
  { icon: 'linkedin', href: '#', label: 'LinkedIn' },
];
