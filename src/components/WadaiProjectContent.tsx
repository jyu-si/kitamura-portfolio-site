import { useEffect, useState } from "react";
import { assetUrl } from "../utils/assetUrl";

type PersonaKey = "information" | "motivation" | "circulation";

type Persona = {
  key: PersonaKey;
  label: string;
  requirement: string;
  challenge: string;
  need: string;
  features: string;
  image: string;
};

const personas: Persona[] = [
  {
    key: "information",
    label: "情報探索型",
    requirement: "探しやすい",
    challenge: "情報が分散し、日程や団体を比較しにくい",
    need: "情報を一か所で確認し、参加する団体を選べる",
    features: "カレンダー / 日程一覧 / 団体詳細 / 検索",
    image: "/assets/wadai-de-wadai/persona-information.webp",
  },
  {
    key: "motivation",
    label: "参加きっかけ型",
    requirement: "一歩を踏み出しやすい",
    challenge: "新歓への関心が弱く、参加する理由やメリットが見えにくい",
    need: "参加するメリットと条件が分かり、最初の一歩を踏み出しやすい",
    features: "特典表示 / スタンプ / 進捗表示 / 条件提示",
    image: "/assets/wadai-de-wadai/persona-motivation.webp",
  },
  {
    key: "circulation",
    label: "複数参加型",
    requirement: "次の参加につなげやすい",
    challenge: "団体ごとの違いが分かりにくく、参加後の記録や達成感が残りにくい",
    need: "団体の個性や参加記録が見え、次に参加する団体を選びやすい",
    features: "団体ごとの表現 / スタンプ / 達成状況 / ランキング",
    image: "/assets/wadai-de-wadai/persona-circulation.webp",
  },
];

const processSteps = [
  "行動タイプの整理",
  "As-Isジャーニー",
  "つまずきの抽出",
  "上位課題",
  "To-Be状態",
  "ユーザーニーズ",
];

type DesignDecision = {
  requirement: string;
  title: string;
  text: string;
  image: string;
};

const designDecisions: DesignDecision[] = [
  {
    requirement: "探しやすい",
    title: "新歓カレンダー",
    text: "分散していた開催情報を日付ごとに集約し、情報探索の負担を減らしました。開催日を起点に、参加できる団体を判断できる構成です。",
    image: "/assets/wadai-de-wadai/calendar.jpg",
  },
  {
    requirement: "比較して判断できる",
    title: "団体詳細",
    text: "団体の特徴、日時、場所を同じ形式で提示し、比較や参加するかどうかの判断に必要な情報を確認しやすくしました。",
    image: "/assets/wadai-de-wadai/detail.jpg",
  },
  {
    requirement: "次の参加につなげやすい",
    title: "スタンプ・ランキング",
    text: "参加記録と達成状況を可視化し、参加後の達成感と、次の団体へ向かうきっかけをつくりました。",
    image: "/assets/wadai-de-wadai/stamp.jpg",
  },
  {
    requirement: "参加を実際の体験につなげる",
    title: "参加特典",
    text: "アプリ内の参加記録を特典の受け取りにつなげ、画面上の達成感を実際の体験へ広げました。",
    image: "/assets/wadai-de-wadai/reward.jpg",
  },
];

type LightboxImage = {
  src: string;
  alt: string;
};

function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="wadai-section-heading">
      <p>
        {number} / {label}
      </p>
      <h3>{title}</h3>
      <div className="wadai-section-lead">{children}</div>
    </header>
  );
}

function ZoomableImage({
  src,
  alt,
  className = "",
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  onOpen: (image: LightboxImage) => void;
}) {
  return (
    <button
      className={`wadai-zoomable ${className}`}
      type="button"
      onClick={() => onOpen({ src, alt })}
      aria-label={`${alt}を拡大表示`}
      title="画像を拡大"
    >
      <img src={assetUrl(src)} alt={alt} />
      <span aria-hidden="true">＋</span>
    </button>
  );
}

export default function WadaiProjectContent() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("information");
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);
  const persona = personas.find((item) => item.key === activePersona) ?? personas[0];

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <div className="wadai-story">
        <section className="wadai-section wadai-background">
          <SectionHeading
            number="02"
            label="Background & Goal"
            title="分散した新歓情報を、参加につながる体験へ"
          >
            <p>
              新歓情報はSNS、掲示物、各団体の発信など複数の場所に分散しており、新入生にとって日程や団体を比較し、参加する団体を選ぶ負担が大きい状態でした。そこで、情報を一か所に集約するだけでなく、興味を持った新入生が実際の参加へ踏み出し、その後も複数の団体へ参加しやすくなる体験を目指しました。
            </p>
          </SectionHeading>

          <figure className="wadai-background-figure">
            <img
              src={assetUrl("/assets/wadai-de-wadai/reward.jpg")}
              alt="アプリの参加記録を新歓まつりの特典へつなげた仕組み"
            />
            <figcaption>
              <strong>アプリから実際の参加へ</strong>
              <span>
                参加記録を食券などの特典につなげ、情報を見るだけで終わらず、実際の行動が生まれる仕組みを設計しました。
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="wadai-section wadai-understanding">
          <SectionHeading
            number="03"
            label="User Understanding & User Needs"
            title="新入生のつまずきを、3つのユーザーニーズへ"
          >
            <p>
              新入生を一括りにせず、新歓参加までの行動とつまずきを「情報探索」「参加のきっかけ」「複数団体への参加」の3タイプに整理しました。各タイプのAs-Isジャーニーから困りごとを抽出し、上位課題へ抽象化したうえでTo-Be状態を定義。そこからユーザーニーズを整理し、機能の優先順位を判断しました。
            </p>
          </SectionHeading>

          <ol className="wadai-process" aria-label="ユーザーニーズを整理したプロセス">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>

          <div className="wadai-overview-document">
            <div>
              <p>3 TYPE OVERVIEW</p>
              <h4>行動の違いを、機能を選ぶ共通基準に</h4>
              <span>
                表面的な悩みをそのまま機能化せず、上位課題と必要な状態まで整理した統合シートです。
              </span>
            </div>
            <ZoomableImage
              src="/assets/wadai-de-wadai/persona-overview.webp"
              alt="新入生3タイプのペルソナと要件を整理した統合シート"
              onOpen={setLightbox}
            />
          </div>

          <div className="wadai-persona-explorer">
            <div className="wadai-persona-tabs" role="tablist" aria-label="新入生タイプ">
              {personas.map((item) => (
                <button
                  id={`persona-tab-${item.key}`}
                  key={item.key}
                  className={`tone-${item.key}`}
                  type="button"
                  role="tab"
                  aria-selected={activePersona === item.key}
                  aria-controls={`persona-panel-${item.key}`}
                  tabIndex={activePersona === item.key ? 0 : -1}
                  onClick={() => setActivePersona(item.key)}
                >
                  <span>{item.label}</span>
                  <strong>{item.requirement}</strong>
                </button>
              ))}
            </div>

            <div
              className={`wadai-persona-panel tone-${persona.key}`}
              id={`persona-panel-${persona.key}`}
              role="tabpanel"
              aria-labelledby={`persona-tab-${persona.key}`}
            >
              <div className="wadai-persona-summary">
                <p>{persona.label}</p>
                <h4>{persona.requirement}</h4>
                <dl>
                  <div>
                    <dt>課題</dt>
                    <dd>{persona.challenge}</dd>
                  </div>
                  <div>
                    <dt>ユーザーニーズ</dt>
                    <dd>{persona.need}</dd>
                  </div>
                  <div>
                    <dt>優先機能</dt>
                    <dd>{persona.features}</dd>
                  </div>
                </dl>
              </div>
              <ZoomableImage
                src={persona.image}
                alt={`${persona.label}のAs-Isジャーニー、To-Be状態、要件整理`}
                onOpen={setLightbox}
              />
            </div>
          </div>

          <p className="wadai-decision-note">
            すべてのアイデアを同列に実装するのではなく、複数タイプに共通するニーズと、実際の参加につながるかどうかを基準に機能を優先しました。
          </p>
        </section>

        <section className="wadai-section wadai-design">
          <SectionHeading
            number="04"
            label="Design Decisions"
            title="ユーザーニーズを、実際に使える機能へ"
          >
            <p>
              画面を先に考えるのではなく、整理したユーザーニーズに対応する形で、情報探索・参加するかどうかの判断・複数団体への参加を支える機能を設計しました。
            </p>
          </SectionHeading>

          <div className="wadai-design-grid">
            {designDecisions.map((decision) => (
              <article key={decision.title}>
                <div className="wadai-phone-image">
                  <img
                    src={assetUrl(decision.image)}
                    alt={
                      decision.title === "参加特典"
                        ? "アプリの参加記録を確認し、特典の食券を渡す様子"
                        : `${decision.title}の画面`
                    }
                  />
                </div>
                <p>{decision.requirement}</p>
                <h4>{decision.title}</h4>
                <span>{decision.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="wadai-section wadai-adoption">
          <SectionHeading
            number="05"
            label="Stakeholder Collaboration & Adoption"
            title="つくるだけで終わらせず、実際に使ってもらう導線まで整える"
          >
            <p>
              アプリを新入生へ確実に届けるため、大学広報担当者と掲載・周知方法を調整しました。さらに、新入生向けガイダンスの時間を借りて、アプリの目的や利用方法を直接案内しました。開発だけでなく、学内関係者との合意形成から導入、利用促進まで一貫して取り組みました。
            </p>
          </SectionHeading>

          <div className="wadai-adoption-grid">
            <figure>
              <div className="wadai-adoption-image">
                <img
                  src={assetUrl("/assets/wadai-de-wadai/stakeholder-pr.webp")}
                  alt="大学広報担当者とアプリの周知方法を話し合う様子"
                />
              </div>
              <figcaption>
                <p>STAKEHOLDER ALIGNMENT</p>
                <h4>大学広報との連携・調整</h4>
                <span>
                  アプリの目的と新入生への価値を説明し、学内での掲載・周知方法について協議しました。
                </span>
              </figcaption>
            </figure>
            <figure>
              <div className="wadai-adoption-image">
                <img
                  src={assetUrl("/assets/wadai-de-wadai/guidance.webp")}
                  alt="新入生向けガイダンスでアプリの登録方法を説明する様子"
                />
              </div>
              <figcaption>
                <p>ONBOARDING</p>
                <h4>新入生ガイダンスでの利用案内</h4>
                <span>
                  新入生向けガイダンスの時間を借り、登録方法や利用場面を説明しました。公開するだけでなく、実際に使い始めてもらう接点まで設計しました。
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="wadai-outcome">
          <div className="wadai-outcome-copy">
            <p>06 / Outcome & Learning</p>
            <h3>設計した体験を、実際の利用へつなげる</h3>
            <blockquote>
              良い体験は、画面だけでは成立しません。ユーザーの行動を理解し、ニーズを機能へ落とし込み、関係者と協働しながら実際に使ってもらう導線まで整えることの重要性を学びました。
            </blockquote>
          </div>
          <dl className="wadai-outcome-list">
            <div>
              <dt>650+</dt>
              <dd>650人以上が利用</dd>
            </div>
            <div>
              <dt>70%+</dt>
              <dd>新入生の7割超へ到達</dd>
            </div>
            <div>
              <dt>LIVE</dt>
              <dd>新歓まつりで実際に運用</dd>
            </div>
            <div>
              <dt>ADOPTION</dt>
              <dd>大学広報との連携・調整と直接案内を実施</dd>
            </div>
          </dl>
        </section>

        <aside className="wadai-official-link" aria-label="大学公式掲載">
          <div>
            <p>Official Feature</p>
            <h3>和歌山大学公式サイトで紹介されました</h3>
            <span>
              学生発案の新入生歓迎アプリとして、取り組みの背景や機能、学内での運用が紹介されています。
            </span>
          </div>
          <a
            href="https://www.wakayama-u.ac.jp/news/2025052300074/"
            target="_blank"
            rel="noreferrer"
          >
            大学公式記事を見る ↗
          </a>
        </aside>
      </div>

      <footer className="wadai-project-footer">
        <a href="#/">Projects一覧へ戻る ↑</a>
      </footer>

      {lightbox && (
        <div
          className="wadai-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.alt}の拡大表示`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="拡大表示を閉じる"
            title="閉じる"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={assetUrl(lightbox.src)}
            alt={lightbox.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
