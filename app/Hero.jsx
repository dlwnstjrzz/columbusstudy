// Hero.js
import { Abril_Fatface } from "next/font/google";
import Button from "@/components/commons/Button";

const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative pb-[66.66%]">
        {" "}
        {/* 1024:570 비율 유지 */}
        <video
          src="/ship_final.mp4"
          alt="콜럼버스 배"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="relative z-10 w-1/2 px-4 md:px-8">
          <h1
            className={`text-3xl md:text-5xl font-bold mb-2 md:mb-4 ${abrilFatface.className} text-black`}
          >
            Columbus Algorithm
          </h1>
          <p className="text-xs md:text-lg mb-4 md:mb-6 text-[#4E4E4E]">
            콜럼버스 스터디는 4주 단위의 집중 스터디를 통해 코딩테스트 빈출
            유형에 대비하는 알고리즘 스터디입니다.
          </p>
          <Button content="더 알아보기" />
        </div>
      </div>
    </section>
  );
}
