import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionTitle
          index="04"
          eyebrow="CONTACT"
          title="Thank you for viewing."
          description="最後までご覧いただき、ありがとうございます。"
        />
        <div className="contact-panel">
          <p>
            GitHub・メール・ポートフォリオPDFのリンクは、
            <br />
            公開時にここへ追加できます。
          </p>
          <div className="contact-links" aria-label="連絡先リンク">
            <span>GitHub / Coming soon</span>
            <span>Mail / Coming soon</span>
            <span>Portfolio PDF / Coming soon</span>
          </div>
        </div>
        <footer className="site-footer">
          <span>© 2026 SHUJI KITAMURA</span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  );
}
