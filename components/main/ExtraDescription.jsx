"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExtraDescription() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "한달에 약 60문제의 양질의 문제를 풀며 매일매일 알고리즘 푸는 습관을 만들 수 있어요!",
    "자료구조와 알고리즘 기초를 탄탄하게 다지게 돼요!",
    "네카라쿠배 코딩테스트 유형을 완벽히 숙지하게 돼요!",
  ];
  const colors = ["#FFF9E5", "#F2F2F2", "#E6F7FF"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIndex = Math.floor(scrollPosition / 200) % texts.length;
      setCurrentTextIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-12 md:mt-24">
      <h2 className="text-mobile-heading md:text-4xl font-bold mb-6">
        항해를 마치면
      </h2>
      <div className="flex">
        <div className="flex flex-col space-y-6">
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-6 mb-4 relative"
                style={{
                  backgroundColor: colors[currentTextIndex],
                  boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",
                }}
              >
                <p className="text-base md:text-lg">
                  {texts[currentTextIndex]}
                </p>
                <div
                  className="absolute -bottom-4 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] transform rotate-[-30deg]"
                  style={{ borderTopColor: colors[currentTextIndex] }}
                ></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hidden md:block">
            {texts.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className="rounded-2xl p-6 mb-4 relative"
                  style={{
                    backgroundColor: colors[index],
                    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <p className="text-base md:text-lg">{text}</p>
                  <div
                    className="absolute -bottom-4 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] transform rotate-[-30deg]"
                    style={{ borderTopColor: colors[index] }}
                  ></div>
                </div>
                {index < texts.length - 1 && <div className="h-3" />}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-[100px]" />
        <div className="mt-12 md:mt-0 w-[156px] md:w-[300px] flex-shrink-0">
          <Image
            src="/parrot_final.gif"
            alt="Parrot"
            width={300}
            height={300}
            className="w-full h-full object-cover transform scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}
