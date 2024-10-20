"use client";
import { useState, useEffect } from "react";
import Description from "./Description";
import Image from "next/image";
import Button from "../commons/Button";

export default function Classes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-12 md:mt-24">
      <Description
        title={"알고리즘 반 소개"}
        content={"정규반과 유형반 중 나에게 더 맞는 반은?"}
      />
      {isMobile ? <MobileClasses /> : <DesktopClasses />}
    </div>
  );
}

function DesktopClasses() {
  return (
    <>
      <div className="mt-16 flex items-stretch">
        <ContentSection
          title="정규반"
          content={
            "28일 동안 함께하는 체계적인 \n알고리즘 공부\n매일 핵심 문제 제공,\n모각코 그리고 코드리뷰"
          }
          className="w-1/2 flex flex-col justify-between"
        />
        <ImageSection imgUrl="man_gesture.gif" className="w-1/2" />
      </div>
      <div className="mt-16 flex items-stretch">
        <ImageSection imgUrl="shipocean.gif" className="w-1/2" />
        <div className="w-[50px]"></div>
        <ContentSection
          title="유형반"
          content={
            "내가 듣고 싶은 알고리즘\n핵심 유형 골라 듣기\n강의와 개념노트 제공"
          }
          className="w-1/2 flex flex-col justify-between"
        />
      </div>
    </>
  );
}

function MobileClasses() {
  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-2">정규반</h2>
        <ImageSection imgUrl="man_gesture.gif" />
        <p className="text-[#828282] text-base leading-6 my-4 whitespace-pre-line">
          28일 동안 함께하는 체계적인 알고리즘 공부 매일 핵심 문제 제공, 모각코
          그리고 코드리뷰
        </p>
        <Button content="신청하기" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-2">유형반</h2>
        <ImageSection imgUrl="shipocean.gif" />
        <p className="text-[#828282] text-base leading-6 my-4 whitespace-pre-line">
          내가 듣고 싶은 알고리즘 핵심 유형 골라 듣기 강의와 개념노트 제공
        </p>
        <Button content="신청하기" />
      </div>
    </div>
  );
}

function ContentSection({ title, content, className }) {
  return (
    <div className={`${className} p-4`}>
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <p className="text-[#828282] text-xl leading-8 mb-8 whitespace-pre-line">
        {content}
      </p>
      <div className="inline-block">
        <Button content="신청하기" />
      </div>
    </div>
  );
}

function ImageSection({ imgUrl, className }) {
  return (
    <div className={`${className} relative pb-[67%] md:pb-[33.5%]`}>
      <Image
        src={`/${imgUrl}`}
        alt="수업 이미지"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
    </div>
  );
}
