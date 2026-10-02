function SectionTitle({ title, subtitle, small }) {
  return (
    <div className="section-title text-center">
      {small && <p className="section-small">{small}</p>}
      <h2>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
