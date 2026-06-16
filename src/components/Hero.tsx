import { assetUrl } from "../utils/assetUrl";
import heroSubject from "../assets/hero-subject.webp";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-name" aria-label="Shuji Kitamura">
          <span>SHUJI</span>
          <span>KITAMURA</span>
        </div>
        <img
          className="hero-person"
          src={assetUrl(heroSubject)}
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
