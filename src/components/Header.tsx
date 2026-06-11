const navItems = [
  ["Profile", "#profile"],
  ["Vision", "#vision"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="トップへ">
        <span>SK</span>
        <strong>SHUJI KITAMURA</strong>
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
