export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <h1>
          <span>SHUJI</span>
          <span>KITAMURA</span>
        </h1>
        <p className="hero-name">北村 周仁</p>
        <p className="hero-lead">
          ものづくりを通して
          <strong>「ユーザーの体験を豊かにできる」</strong>
          エンジニア
        </p>
        <p className="hero-sub">人の困りごとを、技術と仕組みで形にする。</p>
        <a className="text-link" href="#projects">
          Projectsを見る <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-visual">
        <div className="hero-index" aria-hidden="true">
          01 — 04
        </div>
        <img src="/assets/profile/profile.jpg" alt="北村周仁のプロフィール写真" />
        <p>Engineer / UX / XR</p>
      </div>
    </section>
  );
}
