import { profile } from "../data/profile";
import { assetUrl } from "../utils/assetUrl";
import SectionTitle from "./SectionTitle";

export default function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="container">
        <SectionTitle
          index="01"
          eyebrow="PROFILE"
          title="ユーザー理解と実装を、ひと続きに。"
          description="人間中心設計・人間工学を軸に、アプリ開発、XR研究、組織活動を通じて体験改善に取り組んでいます。"
        />

        <div className="profile-grid">
          <div className="profile-info">
            <div className="profile-intro">
              <span>応募領域</span>
              <h3>UX・人間中心設計</h3>
              <p>
                ユーザーの声や行動、生体情報から課題を整理し、
                必要な体験と仕組みを考え、実装まで進めることを強みとしています。
              </p>
            </div>
            <div className="profile-fact">
              <span>Current</span>
              <p>{profile.affiliation[0]}</p>
              <p>{profile.affiliation[1]}</p>
            </div>
            <div className="profile-fact">
              <span>Education</span>
              <p>{profile.education[0]}</p>
              <p>{profile.education[1]}</p>
            </div>
            <div className="profile-fact">
              <span>Focus</span>
              <div className="tag-list">
                {profile.interests.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="profile-fact">
              <span>Skills & Tools</span>
              <div className="tag-list tag-list-muted">
                {[...profile.strengths, ...profile.tools].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="profile-activity">
            <figure className="profile-activity-main">
              <img src={assetUrl("/assets/profile/club1.jpg")} alt="学生自治委員会で説明する北村周仁" />
              <figcaption>
                <span>LEADERSHIP</span>
                <strong>異なる立場の声を整理し、周囲と前へ進める</strong>
              </figcaption>
            </figure>
            <div className="profile-activity-sub">
              <img src={assetUrl("/assets/profile/club2.jpg")} alt="大学関係者との意見交換" />
              <p>{profile.club.text}</p>
            </div>
          </div>
        </div>

        <div className="profile-principles">
          <article><span>01</span><strong>観察・対話</strong><p>利用者や関係者の声を受け止め、背景にある課題を捉える。</p></article>
          <article><span>02</span><strong>設計・実装</strong><p>課題を機能や仕組みに落とし込み、自ら形にする。</p></article>
          <article><span>03</span><strong>検証・改善</strong><p>利用実績やデータから体験を確かめ、次の改善へつなげる。</p></article>
        </div>
      </div>
    </section>
  );
}
