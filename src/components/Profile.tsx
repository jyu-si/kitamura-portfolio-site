import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="container">
        <SectionTitle
          index="01"
          eyebrow="PROFILE"
          title="人と向き合い、課題を形にする。"
          description="実装と課題整理を行き来しながら、使う人に届く体験を考えています。"
        />

        <div className="profile-grid">
          <figure className="profile-portrait">
            <img src="/assets/profile/profile.jpg" alt="北村周仁" />
            <figcaption>
              <span>{profile.nameEn}</span>
              <strong>{profile.name}</strong>
            </figcaption>
          </figure>

          <div className="profile-info">
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
        </div>

        <div className="life-grid">
          <article className="life-story">
            <div>
              <p className="story-label">CLUB / LEADERSHIP</p>
              <h3>{profile.club.title}</h3>
              <p>{profile.club.text}</p>
            </div>
            <div className="story-images story-images-wide">
              {profile.club.images.map((image, index) => (
                <img key={image} src={image} alt={`学生自治委員会での活動 ${index + 1}`} />
              ))}
            </div>
          </article>
          <article className="life-story">
            <div>
              <p className="story-label">OFF TIME</p>
              <h3>{profile.favorite.title}</h3>
              <p>{profile.favorite.text}</p>
            </div>
            <div className="story-images">
              {profile.favorite.images.map((image, index) => (
                <img key={image} src={image} alt={`旅行先での写真 ${index + 1}`} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
