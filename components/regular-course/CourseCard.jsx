export default function CourseCard({
  step,
  level,
  recommendation,
  description,
  curriculum,
}) {
  return (
    <div className="px-4 mb-6">
      <div
        className="bg-white rounded-xl p-8 text-sm text-[#454545]"
        style={{
          border: "1px solid rgba(247, 247, 247, 1)",
          boxShadow: "-4px 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-[#0F81E5] font-bold mb-4">Step {step}</div>
        <h3 className="text-xl text-black font-bold mb-4">{level}</h3>
        <p className="font-bold">{recommendation}</p>
        <p className="mb-6">{description}</p>
        <div className="space-y-2">
          {curriculum.map((item, index) => (
            <div key={index} className="text-sm text-gray-700">
              • {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
