import React from "react";
import BenefitItem from "./BenefitItem";

export default function Event() {
  const benefits = [
    {
      number: 1,
      title: "친구 이벤트",
      description: "친구를 콜럼버스 스터디에 참여하게 하면 ",
      boldText: "10% 할인",
      restText: "해드려요 (본인할인, 최초 1명만 가능)",
      icon: {
        emoji: "👭",
        color: "text-red-500",
      },
    },
    {
      number: 2,
      title: "스타벅스 이벤트",
      description: "",
      boldText: "선착순 5명",
      restText: " 에게 스타벅스 커피 쿠폰을 드려요!",
      icon: {
        emoji: "☕️",
        color: "text-yellow-500",
      },
    },
    {
      number: 3,
      title: "콜럼버스 데이 시상",
      description: "기수가 끝나는 날 개인랭킹 TOP 3 & 개근상 시상",
      boldText: "(1등 배민 2만원권, 개근상 스타벅스 쿠폰)",
      icon: {
        emoji: "🎁",
        color: "text-yellow-500",
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-block bg-[#FF6EB4] text-white rounded px-5 py-2 text-sm font-bold mb-4">
          Event
        </div>
        <h2 className="text-xl font-bold">신나는 이벤트들</h2>
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
                  {benefit.description}{" "}
                  <span className="font-bold">{benefit.boldText}</span>{" "}
                  {benefit.restText}
                </div>
              ) : (
                benefit.description
              )
            }
            icon={benefit.icon}
            color="#FFF8FC"
            numberColor="#FF6EB4"
          />
        ))}
      </div>
    </div>
  );
}
