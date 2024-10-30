import React from "react";

const BenefitItem = ({ number, title, description, icon }) => (
  <div className="bg-white text-sm rounded-[0.625rem] p-6 shadow-[0_0_15px_rgba(0,0,0,0.15)]">
    <div className="text-[#F4B700] font-bold mb-3">0{number}</div>
    <div className="flex items-start gap-3 mb-4">
      <span className={`${icon.color}`}>{icon.emoji}</span>
      <h3 className="font-bold">{title}</h3>
    </div>
    <div className="text-[#828282]">{description}</div>
  </div>
);

export default function Benefit() {
  const benefits = [
    {
      number: 1,
      title: "매주 유형별로 제공되는 길라잡이 노트",
      description:
        "매주 월요일 콜럼버스 자체 제작 알고리즘 개념 요약과 꿀팁이 가득 담긴 ",
      boldText: "[Columbus Times] 4주치 내용 제공",
      icon: {
        emoji: "💌",
        color: "text-red-500",
      },
    },
    {
      number: 2,
      title: "유형별 핵심 문제 풀이",
      description: "",
      boldText: "4주간 50+문제",
      restText:
        " 풀이하며 기초 자료구조부터 심화 알고리즘까지 단계적인 문제풀이를 통해 자연스레 코딩 테스트를 마스터",
      icon: {
        emoji: "🔑",
        color: "text-yellow-500",
      },
    },
    {
      number: 3,
      title: "문제허브 제공",
      description: "스터디에서 제공한 문제들과 별도의 추천 문제들까지 ",
      boldText: "150+문제를 정리한 노션페이지 평생 제공",
      restText: " (상/중/하 모두 수강 시 150+)",
      icon: {
        emoji: "📝",
        color: "text-yellow-500",
      },
    },
    {
      number: 4,
      title: "콜럼버스와 함께 작성해나가는 나만의 노트",
      description:
        "콜럼버스와 함께 장해를 마치며 나만의 개념 요약, 알고리즘노트로 코딩테스트 준비할 때 매우 유용하게 활용 가능",
      icon: {
        emoji: "📚",
        color: "text-red-500",
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-[#FFFDF3]">
      <div className="text-center mb-12">
        <div className="inline-block bg-[#F4B700] text-white rounded px-4 py-1 text-sm font-bold mb-4">
          Benefit
        </div>
        <h2 className="text-xl font-bold">콜럼버스와 스터디를 끝내면?</h2>
      </div>

      <div className="grid gap-8">
        {benefits.map((benefit) => (
          <BenefitItem
            key={benefit.number}
            number={benefit.number}
            title={benefit.title}
            description={
              benefit.boldText ? (
                <div>
                  {benefit.description}
                  <div className="font-bold">{benefit.boldText}</div>
                  {benefit.restText}
                </div>
              ) : (
                benefit.description
              )
            }
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  );
}
