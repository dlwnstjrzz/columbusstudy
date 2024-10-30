"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LevelCourses() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  const courses = [
    {
      step: "01",
      level: "상반",
      recommendation: "추천: 백준 🏅 브론즈",
      description: "비전공자 혹은 자료구조/알고리즘을 공부한 적이 없어요.",
      curriculum: [
        "1주차 - 문자열 & 기초수학",
        "2주차 - 스택 & 큐 & 연결리스트",
        "3주차 - 해쉬 & 덱 & 투포인터",
        "4주차 - 그리디",
      ],
    },
    {
      step: "02",
      level: "중반",
      recommendation: "추천: 백준 🥈 실버",
      description: "자료구조는 알지만 알고리즘은 자신이 없어요.",
      curriculum: [
        "1주차 - DFS & BFS",
        "2주차 - 이진탐색 & 분할정복",
        "3주차 - DP",
        "4주차 - 최단경로",
      ],
    },
    {
      step: "03",
      level: "하반",
      recommendation: "추천: 백준 🥇 골드",
      description: "기본적인 알고리즘은 알지만 더 높은 수준으로 가고 싶어요.",
      curriculum: [
        "1주차 - 트리 & 세그먼트 트리",
        "2주차 - 위상정렬 & MST",
        "3주차 - 고급 DP",
        "4주차 - 문자열 알고리즘",
      ],
    },
  ];

  if (!mounted) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
            단계별 반 소개
          </h2>
          <p className="text-center text-gray-600 mb-8">
            상, 중, 하 반으로 갈수록 어려운 유형을 다루게 됩니다.
            <br />
            한 반당 28일, 총 4주동안 진행됩니다.
            <br />
            운영방식은 세 반 모두 동일합니다.
          </p>
          <div className="flex justify-center">
            <CourseCard {...courses[0]} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
          단계별 반 소개
        </h2>
        <p className="text-center text-gray-600 mb-8">
          상, 중, 하 반으로 갈수록 어려운 유형을 다루게 됩니다.
          <br />
          한 반당 28일, 총 4주동안 진행됩니다.
          <br />
          운영방식은 세 반 모두 동일합니다.
        </p>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
