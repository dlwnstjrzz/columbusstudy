"use client";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-mobile-paragraph1 md:text-desktop-paragraph1">
          {question}
        </span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-mobile-paragraph1 md:text-desktop-paragraph1 text-[#828282]">
          {answer}
        </p>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      question: "일일 과제는 어느 정도 시간이 소요될까요?",
      answer:
        "1문제당 최대 1시간이 넘지 않게 문제를 구성해지만 넘게 될 경우 해답을 보는것을 추천드립니다.",
    },
    {
      question: "온라인으로 진행되나요?",
      answer: "네, 모든 과정은 온라인으로 진행됩니다.",
    },
    {
      question: "필수 참여시간에 일정이 있는데 어떡하죠?",
      answer:
        "필수 참여 시간에 참석하지 못할 경우, 녹화된 세션을 후에 시청하실 수 있습니다.",
    },
  ];

  return (
    <div className="mt-12 md:mt-24">
      <h2 className="text-mobile-heading md:text-desktop-heading font-bold mb-6">
        자주 물어보는 질문들
      </h2>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
