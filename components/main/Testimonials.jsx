"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Slick 캐러셀의 CSS 파일을 import 합니다
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      content:
        "퇴근 후 무의미한 시간을 보내던 직장인들에게 정말 최고의 선택이라고 생각합니다.",
      author: "김**님",
      description: "1기 콜럼버스 수강생",
    },
    {
      content:
        "분업이 있어 스터디에 많은 시간을 투자하기 어려운 제게는 현재의 익명성과 참여 강도가 매우 잘 맞아 종종합니다. 코딩 테스트 공부에 흥미를 얻지 못도록 해주는 점이 정말 만족스럽습니다.",
      author: "김**님",
      description: "1기 콜럼버스 수강생",
    },
    {
      content: "또 다른 후기 내용",
      author: "박**님",
      description: "2기 콜럼버스 수강생",
    },
  ];

  return (
    <div className="mt-12 md:mt-24 bg-[rgba(249,249,249,1)] px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">수강생 후기</h2>
      <p className="text-base md:text-xl text-[#828282] mb-8">
        콜럼버스와 항해를 마치고 난 후 이야기
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-base md:text-lg mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src="/testimonial_avatar.png" // 사용자 아바타 이미지 경로
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
