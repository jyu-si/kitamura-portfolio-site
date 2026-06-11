import { assetUrl } from "../utils/assetUrl";

export default function Vision() {
  return (
    <section className="section vision-section" id="vision">
      <div className="vision-frame">
        <a href={assetUrl("/assets/vision/vision-layout.png")} target="_blank" rel="noreferrer">
          <img
            src={assetUrl("/assets/vision/vision-layout.png")}
            alt="Can・Will・Mustの重なりから、ユーザーの体験を豊かにできるエンジニアを目指すVision図"
          />
        </a>
      </div>
    </section>
  );
}
