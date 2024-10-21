// Hero.js
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import Button from "@/components/commons/Button";

const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative w-full h-0 pb-[66.66%]">
      {" "}
      {/* 1024:570 비율 유지 (570/1024 ≈ 55.66%) */}
      <div className="absolute inset-0">
        <Image
          src="/heroShips_cropped.gif"
          alt="Columbus ship"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
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
