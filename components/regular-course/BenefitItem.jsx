export default function BenefitItem({
  number,
  title,
  description,
  icon,
  color = "white",
  numberColor = "#F4B700",
}) {
  return (
    <div
      className={`text-sm rounded-[0.625rem] p-6 shadow-[0_0_15px_rgba(0,0,0,0.15)]`}
      style={{ backgroundColor: color }}
    >
      <div style={{ color: numberColor }} className="font-bold mb-3">
        0{number}
      </div>
      <div className="flex items-start gap-1 mb-4">
        <span className={`${icon.color}`}>{icon.emoji}</span>
        <h3 className="font-bold">{title}</h3>
      </div>
      <div style={{ color: color === "white" ? "#828282" : "#454545" }}>
        {description}
      </div>
    </div>
  );
}
