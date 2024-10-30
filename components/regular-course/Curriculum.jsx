import React from "react";
import Point from "./Point";
import DropoutCriteria from "./DropoutCriteria";

const ScheduleItem = ({ text, bgColor = "bg-yellow-100" }) => (
  <div className={`${bgColor} rounded-sm p-[2px] text-[0.5rem] text-center`}>
    {text}
  </div>
);

export default function Curriculum() {
  const days = ["월", "화", "수", "목", "금", "토"];
  const schedule = [
    {
      items: ["필수 1문제", "모각코"],
    },
    {
      items: ["필수 1문제", "모각코", "개념노트"],
    },
    {
      items: ["필수 1문제", "모각코"],
    },
    {
      items: ["필수 1문제", "모각코"],
    },
    {
      items: ["필수 1문제"],
    },
    {
      items: ["코드리뷰", "오답노트"],
    },
  ];

  const points = [
    {
      number: 1,
      title: "월화수목금 아침 9시\n핵심 유형 문제 제공",
      descriptions: [
        "문제는 필수, 추천, 도전문제로 구성",
        "하루에 2~4문제 제공",
        "문제 공개 당일 24:00전까지 문제인증",
      ],
      image: "/point1.png",
    },
    {
      number: 2,
      title: "화수목 모각코\n(오전 9시~10시 or 저녁 9시~10시)",
      descriptions: [
        "모각코(모여서 각자 코딩) 손캠 필수",
        "아침 9:00 ~10:00 or 저녁 21:00 ~22:00 중 택 1",
        "한 기수 당 총 12회, 실시간으로 문제 풀이 진행",
      ],
      image: "/point2.png",
    },
    {
      number: 3,
      title: "토요일 코드리뷰\n토요일 오전 10:00 ~ 11:00",
      descriptions: [
        "토요일 오전 10:00 ~ 11:00",
        "팀원들과 함께 내 코드와 알고리즘 풀이 방법 공유",
        "한 기수 당 총 3회, ZEP에서 진행",
      ],
      image: "/point3.png",
    },
    {
      number: 4,
      title: "화요일 개념노트\n기초부터 탄탄하게",
      descriptions: [
        "매주 월요일 제공하는 길라잡이 노트를 보고 직접 개념노트를 작성합니다. 기초를 다질 때는 직접 쓰는 개념노트가 아주 큰 도움이 됩니다.",
      ],
      image: "/point4.png",
    },
    {
      number: 5,
      title: "토요일 오답&알고리즘 노트",
      descriptions: [
        "오답노트: 기초가 부족할 때는 많은 문제를 푸는것보다 핵심 문제를 풀고 복습하면서 오답노트를 작성하는게 중요합니다. (양식제공)",
        "알고리즘노트: 시간이 오래 지나고 봐도 바로 핵심 파악이 가능하게 기록해놓은 알고리즘 정리 노트",
      ],
      image: "/point5.png",
    },
    {
      number: 6,
      title: "중간고사와 기말고사",
      descriptions: [
        "2주차, 4주차에 중간고사, 기말고사 진행",
        "9:00~12:00 or 20:00~23:00 중 택 1",
        "구글 밋에서 손캠 키고 진행",
      ],
      image: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-[#F2F8FF]">
      <h2 className="text-xl font-bold mb-8 text-center">콜럼버스 커리큘럼</h2>

      {/* 일주일 커리큘럼 */}
      <div className="bg-white rounded-lg p-4 shadow-lg mb-12">
        <h3 className="text-sm font-bold text-[#0F81E5] mb-4 pl-[10px]">
          일주일 커리큘럼
        </h3>
        <div className="h-[1px] bg-gray-200 mb-4"></div>
        <div className="grid grid-cols-6 gap-4">
          {days.map((day, index) => (
            <div key={day} className="space-y-2">
              <div className="text-center font-xs font-normal opacity-50">
                {day}
              </div>
              {schedule[index].items.map((item, itemIndex) => (
                <ScheduleItem
                  key={itemIndex}
                  text={item}
                  bgColor={
                    item === "필수 1문제"
                      ? "bg-[#FFF3CA]"
                      : item === "모각코"
                      ? "bg-[#FFE5E5]"
                      : item === "개념노트"
                      ? "bg-[#EBEFF0]"
                      : item === "코드리뷰"
                      ? "bg-[#D2ECFF]"
                      : "bg-[#EBEFF0]"
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Points 섹션 */}
      <div className="space-y-8">
        {points.map((point) => (
          <Point
            key={point.number}
            number={point.number}
            title={point.title}
            descriptions={point.descriptions}
            imageUrl={point.image}
          />
        ))}

        <DropoutCriteria />
      </div>
    </div>
  );
}
