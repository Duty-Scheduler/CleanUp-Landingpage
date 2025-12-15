import { Icon } from '../ui';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-700">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/Logo.png" alt="CleanUp" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-gray-400 text-sm">
              Simplify duty management for your team. Assign, track, and complete tasks effortlessly.
            </p>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <span className="text-sm text-gray-400">
              © 2025 CleanUp. All rights reserved.
            </span>
            <a href="#privacy" className="text-sm text-gray-400 hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-blue-400">
              Terms of Service
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label={social.label}
              >
                <Icon name={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
