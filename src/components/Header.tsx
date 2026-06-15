const navItems = [
  ["WORKS", "#projects"],
  ["VISION", "#vision"],
  ["ABOUT", "#profile"],
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="トップへ">
        <span />
        <strong>UX DESIGNER / ENGINEER</strong>
      </a>
      <nav aria-label="メインナビゲーション">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
