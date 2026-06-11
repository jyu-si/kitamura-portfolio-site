type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ index, eyebrow, title, description }: Props) {
  return (
    <div className="section-title">
      <p className="eyebrow">
        {index} / {eyebrow}
      </p>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
