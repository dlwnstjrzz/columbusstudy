import { Abril_Fatface } from "next/font/google";
import Button from "@/components/commons/Button";
import Image from "next/image";

const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });

export default function Thumbnail() {
  return (
    <section className="relative w-full">
      <div className="relative pb-[126.66%]">
        <video
          src="/manGesture_final.mp4"
          alt="콜럼버스 배"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 md:px-8">
          <p className="text-white text-xl md:text-4xl font-bold mb-8">
            Columbus Study
            <br />
            알고리즘 정규반
          </p>
          <p className="text-white text-4xl md:text-5xl mb-6 font-bold">
            알고리즘 유형별
            <br />
            완벽 정복
          </p>
        </div>
      </div>
    </section>
  );
}
