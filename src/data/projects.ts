import entryGroupPhoto from "../assets/entry-group-photo.png";
import figmaWadai1 from "../assets/figma-wadai-1.png";
import figmaWadai2 from "../assets/figma-wadai-2.png";

export type GalleryItem = {
  image: string;
  title: string;
  caption: string;
  fit?: "cover" | "contain";
};

export type ProjectSection = {
  label: string;
  title: string;
  text: string;
  points?: string[];
  gallery?: GalleryItem[];
};

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  note: string;
  categories: string[];
  roles: string[];
  technologies?: string[];
  team: string;
  period: string;
  summary: string;
  result?: string;
  resultLabel?: string;
  resultDetail?: string;
  hero: string;
  heroSecondary?: string;
  heroFit?: "cover" | "contain";
  sections: ProjectSection[];
  learning: string;
};

export const projects: Project[] = [
  {
    id: "wadai-de-wadai",
    number: "01",
    title: "和大DE話題",
    subtitle: "新入生のための団体を知る新歓アプリ",
    note: "2024 新入生歓迎実行委員会主催「新歓まつり」で使用",
    categories: ["Webアプリ", "新歓支援", "体験設計"],
    roles: ["PM", "要件定義", "画面設計", "フロントエンド"],
    technologies: ["Vue.js", "Firebase", "JavaScript", "Figma", "Adobe Illustrator"],
    team: "新入生歓迎実行委員会との協働",
    period: "2024年 新歓まつりに向けて制作",
    summary:
      "新歓情報を一元化し、新入生が部活・サークルを知り、参加行動につなげるためのアプリです。",
    result: "650+",
    resultLabel: "新入生の7割超が利用",
    resultDetail: "新入生歓迎実行委員会主催「新歓まつり」で使用",
    hero: figmaWadai1,
    heroSecondary: figmaWadai2,
    heroFit: "contain",
    sections: [
      {
        label: "Background",
        title: "情報の分散を、参加のきっかけに変える",
        text: "SNS、掲示物、各団体の発信に分散していた新歓情報を1か所に集約。比較しやすさだけでなく、スタンプや特典によって実際の参加につながる仕組みを設計しました。",
        gallery: [
          {
            image: "/assets/wadai-de-wadai/reward.jpg",
            title: "アプリから実際の参加へ",
            caption: "参加記録を食券などの特典につなげ、利用の先に行動が生まれる設計にしました。",
          },
        ],
      },
      {
        label: "Persona & Design",
        title: "3つのユーザー像を、機能判断の基準に",
        text: "複数の新入生ペルソナを設定し、それぞれの目的に応じて必要な機能を整理しました。",
        points: [
          "情報探索型：カレンダー、団体詳細、検索性",
          "参加促進型：スタンプ、ランキング、集める楽しさ",
          "きっかけ重視型：特典、進捗、分かりやすい条件提示",
        ],
        gallery: [
          {
            image: "/assets/wadai-de-wadai/persona.png",
            title: "ペルソナ設計",
            caption: "ユーザー像を具体化し、チームで判断基準を共有しました。",
            fit: "contain",
          },
        ],
      },
      {
        label: "Features",
        title: "迷わず探せて、楽しく参加できる",
        text: "情報の確認、参加前の理解、参加後の達成感までをひと続きの体験として設計しました。",
        gallery: [
          {
            image: "/assets/wadai-de-wadai/calendar.jpg",
            title: "新歓カレンダー",
            caption: "今日のイベントと団体情報へすぐアクセスできます。",
            fit: "contain",
          },
          {
            image: "/assets/wadai-de-wadai/detail.jpg",
            title: "団体詳細",
            caption: "日時、場所、概要を整理し、参加前の不安を減らします。",
            fit: "contain",
          },
          {
            image: "/assets/wadai-de-wadai/stamp.jpg",
            title: "スタンプ",
            caption: "参加を記録し、集める楽しさをつくりました。",
            fit: "contain",
          },
        ],
      },
    ],
    learning:
      "複数のユーザー像を具体化し、機能判断の共通基準を作ることで、チーム内の方向性を揃えながら体験を設計できました。",
  },
  {
    id: "wara-angel",
    number: "02",
    title: "わらえんじぇる",
    subtitle: "子供が表情による感情の出し方を知るアプリ",
    note: "学部3年生 デザイン情報総合演習課題",
    categories: ["UI/UX Design", "感情理解", "体験型アプリ"],
    roles: ["PM", "フロント・バックエンド実装", "企画", "体験設計"],
    technologies: ["企画設計", "UI/UXデザイン", "フロントエンド", "バックエンド"],
    team: "チーム制作 / 全32チーム参加",
    period: "学部3年 デザイン情報総合演習",
    summary:
      "表情を通じて、子供が感情の理解や表出を楽しく学べるオンライン対戦ゲームアプリです。",
    result: "3位",
    resultLabel: "全32チーム中",
    resultDetail: "デザイン情報総合演習 最終成果",
    hero: "/assets/wara-angel/mockup.png",
    heroFit: "contain",
    sections: [
      {
        label: "Background",
        title: "表情を知り、伝える機会をつくる",
        text: "表情は感情を伝える重要な手段です。一方で、子供が自分の表情を理解し、感情を表出する機会は十分ではありません。その課題を、遊びながら学べる体験に変えました。",
        gallery: [
          {
            image: "/assets/wara-angel/back.png",
            title: "企画背景",
            caption: "表情理解と感情表出に関する課題を整理しました。",
            fit: "contain",
          },
        ],
      },
      {
        label: "Concept & Flow",
        title: "演じる、読み取る、振り返る",
        text: "表現者は感情語を含むお題に沿って表情を作り、回答者は相手の表情から感情を読み取ります。最後に他者とAIからのフィードバックを受け取ります。",
        gallery: [
          {
            image: "/assets/wara-angel/wara-flow.png",
            title: "体験の流れ",
            caption: "表現と理解を往復しながら学べるゲームフローです。",
            fit: "contain",
          },
        ],
      },
      {
        label: "Design Point",
        title: "客観性と楽しさを両立する",
        text: "AI画像認識による回答例と、家族間でも使えるトレーニングモードを設計。子供が続けたくなる親しみやすさにもこだわりました。",
        points: [
          "AI画像認識による客観的な回答例",
          "家族間でも使えるトレーニングモード",
          "ゲーム性と親しみやすいキャラクター",
        ],
        gallery: [
          {
            image: "/assets/wara-angel/design-point.png",
            title: "体験を支える工夫",
            caption: "フィードバックと継続利用の仕組みをまとめました。",
            fit: "contain",
          },
        ],
      },
    ],
    learning:
      "感情や表情のような抽象的なテーマでも、ゲーム性やフィードバックを組み合わせることで、子供が楽しく学べる体験として設計できることを学びました。",
  },
  {
    id: "research",
    number: "03",
    title: "和歌山大学での研究",
    subtitle: "VRによる生体計測を用いたユーザビリティ提案のための分析",
    note: "視線と表情計測を用いた心理状態推定",
    categories: ["Research", "VR", "生体計測", "ユーザビリティ"],
    roles: ["研究計画", "実験設計", "VR環境構築", "データ分析", "考察"],
    technologies: ["Unity", "C#", "Python", "Eye Tracking", "Facial Tracking"],
    team: "個人研究",
    period: "学部研究",
    summary:
      "VRショッピング環境で視線・瞳孔径・表情情報を取得し、体験中の心理状態を推定する研究です。",
    result: "複合分析",
    resultLabel: "視線・瞳孔径・表情・主観評価",
    resultDetail: "心理状態を考慮したユーザビリティ提案を検討",
    hero: "/assets/research/vr-measurement.jpg",
    sections: [
      {
        label: "Experiment",
        title: "ユーザーが「どう感じたか」を捉える",
        text: "商品を鑑賞・比較できるVRショッピング環境を構築。行動だけでなく、視線、瞳孔径、表情情報、主観評価を組み合わせて分析しました。",
        gallery: [
          {
            image: "/assets/research/vr-shopping-room.jpg",
            title: "VRショッピング環境",
            caption: "ユーザーが商品を鑑賞・比較する場面を再現しました。",
          },
          {
            image: "/assets/research/vr-measurement.jpg",
            title: "生体情報の計測",
            caption: "HMDとフェイシャルトラッカーを用いて体験中のデータを取得しました。",
          },
        ],
      },
      {
        label: "Measurement & Analysis",
        title: "複数のデータを、心理状態の理解へ",
        text: "視線・瞳孔径・ブレンドシェイプ情報を前処理し、表情特徴量と主観評価を組み合わせて心理状態間の違いを比較しました。",
        points: [
          "VR環境構築と計測設計",
          "視線・瞳孔径・表情情報の前処理",
          "特徴量算出と主観評価との比較",
        ],
        gallery: [
          {
            image: "/assets/research/facial-tracking.jpg",
            title: "Facial Tracking",
            caption: "Eye Expression と Lip Expression を心理状態推定に活用しました。",
            fit: "contain",
          },
          {
            image: "/assets/research/analysis-flow.jpg",
            title: "分析フロー",
            caption: "取得から特徴量算出、心理状態間比較までを整理しました。",
            fit: "contain",
          },
        ],
      },
      {
        label: "Result",
        title: "表情変化から、体験改善の手がかりを得る",
        text: "Squeeze特徴量の分布などから、VR体験中の表情変化が心理状態によって異なる可能性を確認しました。",
        gallery: [
          {
            image: "/assets/research/result-squeeze.png",
            title: "分析結果の一例",
            caption: "心理状態別にSqueeze特徴量を比較した分布図です。",
            fit: "contain",
          },
        ],
      },
    ],
    learning:
      "生体情報を用いることで、ユーザーの行動だけでなく心理状態の違いまで考慮したユーザビリティ提案につなげられる可能性を学びました。",
  },
  {
    id: "student-union",
    number: "04",
    title: "学生自治委員会での活動",
    subtitle: "学生生活の課題を、仕組みとして改善する活動",
    note: "2023年度 委員長 / 以後役員",
    categories: ["Student Union", "課題整理", "共創", "改善活動"],
    roles: ["委員長", "企画運営", "課題整理", "関係者調整", "個人制作"],
    technologies: ["Adobe Illustrator", "PowerPoint"],
    team: "150人規模の学生自治組織",
    period: "2023年度 委員長 / 以後役員",
    summary:
      "学生の声を受け止め、大学との対話や委員会活動を通じて、学生生活の課題改善に取り組みました。",
    result: "150人規模",
    resultLabel: "学生自治組織の委員長",
    resultDetail: "異なる立場の声を整理し、大学との対話・改善活動を推進",
    hero: entryGroupPhoto,
    sections: [
      {
        label: "Role & Process",
        title: "声を集め、対話し、具体的な改善へ",
        text: "学生大会での意見交換や大学側との交流を通じて、立場の異なる人の意見を整理し、実行可能な改善へつなげました。",
        gallery: [
          {
            image: "/assets/student-union/convention.jpg",
            title: "学生大会での意見交換",
            caption: "多様な意見を共有し、学生生活の課題を整理しました。",
          },
          {
            image: "/assets/student-union/talk.jpg",
            title: "大学側との対話",
            caption: "学生と大学をつなぐ役割として、改善策を検討しました。",
          },
        ],
      },
      {
        label: "Cases",
        title: "困りごとを、目に見える仕組みにする",
        text: "バス待ち列の整理など、日常の小さな困りごとにも着目。現場で使える具体的な改善として形にしました。",
        gallery: [
          {
            image: "/assets/student-union/tile.jpg",
            title: "バス待ち列の整理",
            caption: "学生の困りごとを、環境改善として具体化した事例です。",
          },
          {
            image: "/assets/student-union/union.jpg",
            title: "委員会活動",
            caption: "周囲と協力し、活動を前へ進めました。",
          },
        ],
      },
      {
        label: "VR Lab Tour",
        title: "研究室との出会いを、VRで支援する",
        text: "研究室配属で雰囲気が分からないという声から、研究室を事前に体験できるVRラボツアーを個人制作。研究室のホームページへの導線も設計しました。",
        gallery: [
          {
            image: "/assets/student-union/VRlabtour.png",
            title: "VRラボツアー",
            caption: "研究室の雰囲気をVRで体験できるコンテンツです。",
            fit: "contain",
          },
          {
            image: "/assets/student-union/VRlabtour2.png",
            title: "情報への導線",
            caption: "体験後に研究室の詳細へ進める構成にしました。",
            fit: "contain",
          },
        ],
      },
    ],
    learning:
      "学生の声を受け止めるだけでなく、課題を整理し、大学との対話や個人制作を通じて、改善を具体的な仕組みとして形にする重要性を学びました。",
  },
];
