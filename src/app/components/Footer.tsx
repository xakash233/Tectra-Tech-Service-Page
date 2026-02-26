import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const footerNav = {
  services: [
    { label: 'SEO for Education', href: '#services' },
    { label: 'PPC Advertising', href: '#services' },
    { label: 'Social Media Marketing', href: '#services' },
    { label: 'Website Development', href: '#services' },
    { label: 'CRM Automation', href: '#services' },
  ],
  connect: [
    { label: 'General: info@tectratechnologies.com', href: 'mailto:info@tectratechnologies.com' },
    { label: 'Sales: sales@tectratechnologies.com', href: 'mailto:sales@tectratechnologies.com' },
    { label: 'Careers: hr@tectratechnologies.com', href: 'mailto:hr@tectratechnologies.com' },
    { label: 'Media: info@tectratechnologies.com', href: 'mailto:info@tectratechnologies.com' },
  ]
};

export function Footer() {
  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#111111]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              aria-label="Tectra Technologies – Home"
              className="mb-4 inline-block bg-white p-2 rounded-md"
            >
              <img
                src="/tectra-logo-black.png"
                alt="Tectra Technologies"
                className="h-8 w-auto"
              />
            </a>
            <p
              className="text-[#666666] mb-7"
              style={{ fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '260px' }}
            >
              India's leading digital marketing agency built exclusively for educational institutions.
            </p>
            {/* Contact info */}
            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-[#666666]" style={{ fontSize: '0.875rem' }}>
                <MapPin size={15} aria-hidden="true" className="shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Tectra Technologies<br />
                  301-B3, 3rd Floor, Alpha Block<br />
                  SSPDL Alphacity, Navalur, OMR<br />
                  Tamil Nadu, Chennai - 600130
                </span>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white mb-5"
              style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-1">
              {footerNav.services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#666666] hover:text-white transition-colors inline-flex items-center min-h-[36px]"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-white mb-5"
              style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Let's Connect
            </h3>
            <ul className="flex flex-col gap-1">
              {footerNav.connect.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#666666] hover:text-white transition-colors inline-flex items-center min-h-[36px]"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {label.split(': ')[1]}
                  </a>
                  <p className="text-[#3a3a3a] text-[10px] uppercase font-bold tracking-tight -mt-1 ml-0.5">{label.split(': ')[0]}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Column */}
          <div className="flex flex-col justify-start">
            <h3
              className="text-white mb-5"
              style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Location
            </h3>
            <div className="w-full h-40 rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-[#222]">
              <iframe
                src="https://maps.google.com/maps?q=SSPDL%20Alphacity%20Navalur%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/maps?q=SSPDL+Alphacity+Navalur+OMR+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-white text-xs mt-3 flex items-center justify-center gap-1.5 font-medium"
            >
              Open in Google Maps
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="border-t border-[#111111]">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#444444] text-center sm:text-left"
            style={{ fontSize: '0.8125rem' }}
          >
            © {new Date().getFullYear()} Tectra Technologies. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-5">
              <li key="privacy">
                <a href="#privacy" className="text-[#444444] hover:text-white transition-colors" style={{ fontSize: '0.8125rem' }}>Privacy Policy</a>
              </li>
              <li key="terms">
                <a href="#terms" className="text-[#444444] hover:text-white transition-colors" style={{ fontSize: '0.8125rem' }}>Terms of Service</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
