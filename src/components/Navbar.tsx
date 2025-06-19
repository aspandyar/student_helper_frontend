import React, { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC<NavbarProps> = ({
  logo = 'MyApp',
  navItems = defaultNavItems
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false);
    // You can add navigation logic here
    console.log(`Navigating to: ${href}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleNavClick('#home')}>
            {logo}
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name} className="navbar-item">
              <a
                href={item.href}
                className="navbar-link"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`navbar-toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`navbar-toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-mobile-list">
            {navItems.map((item) => (
              <li key={item.name} className="navbar-mobile-item">
                <a
                  href={item.href}
                  className="navbar-mobile-link"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
