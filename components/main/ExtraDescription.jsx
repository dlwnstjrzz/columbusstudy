import Image from "next/image";

export default function ExtraDescription() {
  return (
    <div className="mt-12 md:mt-24">
      <h2 className="text-mobile-heading md:text-4xl font-bold mb-6">
        항해를 마치면
      </h2>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-6">
          <div
            className="bg-[#FFF9E5] rounded-2xl p-6 mb-4 relative"
            style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)" }}
          >
            <p className="text-base md:text-lg">
              한달에 약 60문제의 양질의 문제를 풀며 매일매일 알고리즘 푸는
              습관을 만들 수 있어요
            </p>
            <div className="absolute -bottom-4 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] border-t-[#FFF9E5] transform rotate-[-30deg]"></div>
          </div>
          <div className="bg-[#F2F2F2] rounded-2xl p-4 relative">
            <p className="text-base md:text-lg">
              자료구조와 알고리즘 기초를 탄탄하게 다지게 돼요
            </p>
            <div className="absolute -bottom-4 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] border-t-[#F2F2F2] transform rotate-[-30deg]"></div>
          </div>
          <div className="h-3" />
          <div className="bg-[#F2F2F2] rounded-2xl p-4 relative">
            <p className="text-base md:text-lg">
              네카라쿠배 코딩테스트 유형을 완벽히 숙지하게 돼요
            </p>
            <div className="absolute -bottom-4 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] border-t-[#F2F2F2] transform rotate-[-30deg]"></div>
          </div>
        </div>
        <div className="w-[100px]" />
        <div className="mt-12 md:mt-0 w-[156px] h-[156px] md:w-[300px] md:h-[300px] flex-shrink-0">
          <Image
            src="/parrot-unscreen.gif"
            alt="Parrot"
            width={300}
            height={300}
            className="transform scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}
