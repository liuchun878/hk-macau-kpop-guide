const { useState, useEffect } = React;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#venues', label: '演唱会场馆' },
    { href: '#photomap', label: '打卡地图' },
    { href: '#guide', label: '新手必读' },
    { href: '#itinerary', label: '行程模板' },
    { href: '#faq', label: '快问快答' },
  ];

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="navbar" style={{
      padding: scrolled ? '12px 32px' : '16px 32px',
      background: scrolled ? 'rgba(10, 10, 26, 0.9)' : 'rgba(10, 10, 26, 0.7)',
    }}>
      <div className="nav-logo">
        <span className="nav-logo-dot"></span>
        <span style={{
          background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>FAN GUIDE</span>
        <span className="nav-badge">HK · MACAU</span>
      </div>

      <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={handleNavClick}>{link.label}</a>
          </li>
        ))}
      </ul>

      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="菜单"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

Object.assign(window, { Navbar });
