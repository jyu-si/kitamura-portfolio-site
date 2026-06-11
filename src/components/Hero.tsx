import { assetUrl } from "../utils/assetUrl";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">UX / HUMAN-CENTERED DESIGN PORTFOLIO</p>
          <p className="hero-name">北村 周仁 <span>SHUJI KITAMURA</span></p>
          <h1>
            人の困りごとを捉え、
            <strong>体験として形にする。</strong>
          </h1>
          <p className="hero-lead">
            人間中心設計の視点と実装力を行き来しながら、
            ユーザーの行動や心理を理解し、より良い体験につなげます。
          </p>
          <div className="hero-focus" aria-label="専門領域">
            <span>Human-Centered Design</span>
            <span>UX Design</span>
            <span>XR / Research</span>
            <span>Web Development</span>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">4つの取り組みを見る</a>
            <a className="secondary-link" href="#vision">Visionを見る</a>
          </div>
        </div>
        <aside className="hero-summary" aria-label="プロフィール概要">
          <img src={assetUrl("/assets/profile/profile.jpg")} alt="北村周仁のプロフィール写真" />
          <div className="hero-summary-copy">
            <p>奈良先端科学技術大学院大学 修士1年</p>
            <strong>ユーザー理解から設計・実装・検証まで</strong>
            <span>課題整理 / 人間工学 / UX / XR / Webアプリ開発</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
