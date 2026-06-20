import { profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";

export default function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="container">
        <header className="profile-title">
          <span />
          <h2>Profile</h2>
        </header>

        <div className="profile-layout">
          <div className="profile-main">
            <div className="profile-focus">
              <p>関心領域</p>
              <h3>UX・人間中心設計</h3>
              <strong>人の声を整理し、体験を設計し、実装まで進める。</strong>
            </div>

            <div className="profile-identity">
              <h4>{profile.name} <span>/ {profile.nameEn}</span></h4>
              <dl>
                <div>
                  <dt>Current</dt>
                  <dd>{profile.affiliation[0]}<br />{profile.affiliation[1]}</dd>
                </div>
                <div>
                  <dt>Education</dt>
                  <dd>{profile.education[0]}<br />{profile.education[1]}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="profile-side">
            <section className="profile-skills">
              <h3>My Skills</h3>
              <div className="skill-grid">
                <article>
                  <span aria-hidden="true">&lt;/&gt;</span>
                  <div>
                    <h4>エンジニアリング</h4>
                    <p>Web・アプリ開発を通して、アイデアを実際に使える形へ落とし込む。</p>
                  </div>
                </article>
                <article>
                  <span aria-hidden="true">!</span>
                  <div>
                    <h4>課題整理力</h4>
                    <p>異なる立場の意見を整理し、目的と課題を明確にする。</p>
                  </div>
                </article>
              </div>
            </section>

            <div className="profile-personal">
              <section>
                <h3>Club</h3>
                <img src={assetUrl(profile.club.images[1])} alt="学生自治会での意見交換" />
                <h4>学生自治会</h4>
                <p>{profile.club.text}</p>
              </section>
              <section>
                <h3>Favorite</h3>
                <div className="favorite-images">
                  {profile.favorite.images.map((image, index) => (
                    <img
                      key={image}
                      src={assetUrl(image)}
                      alt={index === 0 ? "旅先で撮影した海の景色" : "旅先で楽しんだ食事"}
                    />
                  ))}
                </div>
                <h4>{profile.favorite.title}</h4>
                <p>{profile.favorite.text}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
