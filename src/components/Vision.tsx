import SectionTitle from "./SectionTitle";

const visions = [
  {
    key: "Can",
    title: "解決策を形にする主体性と実装力",
    text: "課題を整理し、必要な機能や仕組みを考えたうえで、実装まで自ら進めます。",
  },
  {
    key: "Will",
    title: "技術と発想による価値創出",
    text: "技術と発想を掛け合わせ、人の行動や体験をより良くするものづくりに携わります。",
  },
  {
    key: "Must",
    title: "人間中心設計・UX",
    text: "分かりやすく安心して利用でき、価値を感じられるところまで含めて設計します。",
  },
];

export default function Vision() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container">
        <SectionTitle
          index="02"
          eyebrow="VISION"
          title="私が目指す人材"
          description="できること、したいこと、求められること。その重なりを広げていきます。"
        />
        <div className="vision-map">
          <div className="vision-center">
            <span>MY VISION</span>
            <strong>
              ユーザーの体験を
              <br />
              豊かにできるエンジニア
            </strong>
          </div>
          {visions.map((vision) => (
            <article className={`vision-item vision-${vision.key.toLowerCase()}`} key={vision.key}>
              <p>{vision.key}</p>
              <h3>{vision.title}</h3>
              <span>{vision.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
