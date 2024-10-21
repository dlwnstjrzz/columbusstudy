"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      mainContent:
        "퇴근 후 무의미한 시간을 보내던 직장인들에게 정말 최고의 선택이라고 생각합니다.",
      content:
        "분업이 있어 스터디에 많은 시간을 투자하기 어려운 제게는 현재의 익명성과 참여 강도가 매우 잘 맞아 종종합니다. 코딩 테스트 공부에 흥미를 얻지 못도록 해주는 점이 정말 만족스럽습니다.",
      author: "김**님",
      description: "1기 콜럼버스 수강생",
    },
    {
      mainContent:
        "퇴근 후 무의미한 시간을 보내던 직장인들에게 정말 최고의 선택이라고 생각합니다.",
      content:
        "분업이 있어 스터디에 많은 시간을 투자하기 어려운 제게는 현재의 익명성과 참여 강도가 매우 잘 맞아 종종합니다. 코딩 테스트 공부에 흥미를 얻지 못도록 해주는 점이 정말 만족스럽습니다.",
      author: "김**님",
      description: "1기 콜럼버스 수강생",
    },
    {
      mainContent:
        "퇴근 후 무의미한 시간을 보내던 직장인들에게 정말 최고의 선택이라고 생각합니다.",
      content:
        "분업이 있어 스터디에 많은 시간을 투자하기 어려운 제게는 현재의 익명성과 참여 강도가 매우 잘 맞아 종종합니다. 코딩 테스트 공부에 흥미를 얻지 못도록 해주는 점이 정말 만족스럽습니다.",
      author: "김**님",
      description: "1기 콜럼버스 수강생",
    },
  ];

  return (
    <div className="mt-32 md:mt-32 bg-[rgba(249,249,249,1)] px-4 py-8 md:py-16 md:px-16">
      <h2 className="text-mobile-heading md:text-desktop-heading font-bold mb-2">
        수강생 후기
      </h2>
      <p className="text-base md:text-xl text-[#828282] mb-8">
        콜럼버스와 항해를 마치고 난 후 이야기
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2" style={{ maxWidth: "410px" }}>
            <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between h-full mx-2 mb-8">
              <div>
                <p className="text-mobile-heading md:text-desktop-paragraph2 mb-4">
                  {testimonial.mainContent}
                </p>
                <p className="text-mobile-paragraph1 md:text-desktop-description mb-4">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <Image
                  src="/testimonial_avatar.png"
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
