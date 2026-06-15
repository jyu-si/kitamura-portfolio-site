import { assetUrl } from "../utils/assetUrl";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-name" aria-label="Shuji Kitamura">
          <span>SHUJI</span>
          <span className="hero-last-name">
            <span>KITAMU</span>
            <span className="hero-ra">RA</span>
          </span>
        </div>
        <div className="hero-name hero-name-overlay" aria-hidden="true">
          <span>SHUJI</span>
          <span className="hero-last-name">
            <span>KITAMU</span>
            <span className="hero-ra">RA</span>
          </span>
        </div>
        <img
          className="hero-person"
          src={assetUrl("/assets/profile/hero-subject.png")}
          alt="北村周仁"
        />
        <p className="hero-slogan">FAST ALONE, FAR TOGETHER.</p>
        <a className="hero-scroll" href="#profile">
          <span>SCROLL</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
