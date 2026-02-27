import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Company', href: '#company' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Blockchain', href: '#blockchain' },
      { label: 'Web Development', href: '#web-development' },
      { label: 'Mobile App Development', href: '#mobile-app-development' },
      { label: 'UI/UX', href: '#ui-ux' },
      { label: 'QA Automation', href: '#qa-automation' },
      { label: 'Cloud Computing', href: '#cloud-computing' },
      { label: 'DevOps', href: '#devops' },
      { label: 'Digital 360', href: '#digital-360' },
    ]
  },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Our Process', href: '#process' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact Us', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-[0_1px_0_0_#e5e5e5]' : ''
        }`}
      role="banner"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="/"
            aria-label="Tectra Technologies – Home"
            className="flex items-center shrink-0"
          >
            <img
              src="/tectra-logo-black.png"
              alt="Tectra Technologies"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href, dropdown }) => (
              <div
                key={label}
                className="relative group"
                onMouseEnter={() => dropdown && setActiveDropdown(label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={href}
                  className="text-[#1a1a1a] hover:text-black transition-colors duration-150 inline-flex items-center gap-1 min-h-[72px] text-[15px] relative group overflow-hidden"
                  style={{ fontWeight: 600 }}
                >
                  {label}
                  {dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === label ? 'rotate-180' : ''}`} />}

                  {/* Hover line animation */}
                  <span className="absolute bottom-4 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left"></span>
                </a>

                {/* Dropdown Menu */}
                {dropdown && (
                  <div className={`absolute top-full left-0 w-64 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 rounded-b-xl overflow-hidden transition-all duration-200 origin-top transform ${activeDropdown === label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="py-2">
                      {dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-6 py-3 text-[14px] text-gray-600 hover:text-black hover:bg-gray-50 transition-colors font-medium border-l-2 border-transparent hover:border-black"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center bg-black text-white px-6 min-h-[44px] hover:bg-[#1a1a1a] transition-colors duration-150 text-[15px] shrink-0"
            style={{ fontWeight: 600 }}
          >
            Book Strategy Call
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-black -mr-2"
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end pr-1" aria-hidden="true">
                <span className="h-[2px] w-4 bg-black rounded-full transition-all"></span>
                <span className="h-[2px] w-6 bg-black rounded-full transition-all"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!isMenuOpen}
        className="md:hidden border-t border-[#e5e5e5] bg-white max-h-[80vh] overflow-y-auto"
        aria-label="Mobile navigation"
      >
        <nav className="max-w-[1100px] mx-auto px-6 py-2">
          {navLinks.map(({ label, href, dropdown }) => (
            <div key={label} className="border-b border-[#f0f0f0] last:border-0">
              <div className="flex items-center justify-between">
                <a
                  href={href}
                  onClick={() => !dropdown && setIsMenuOpen(false)}
                  className="flex items-center text-[#333333] hover:text-black min-h-[52px] transition-colors flex-1"
                  style={{ fontWeight: 500 }}
                >
                  {label}
                </a>
                {dropdown && (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === label ? null : label)}
                    className="p-4"
                  >
                    <ChevronDown size={18} className={`transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {dropdown && activeDropdown === label && (
                <div className="bg-gray-50 px-4 pb-4">
                  {dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-[14px] text-gray-500 hover:text-black transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="py-4">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center bg-black text-white w-full min-h-[48px] hover:bg-[#1a1a1a] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Book Strategy Call
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

