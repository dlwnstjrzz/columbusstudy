import Button from "../commons/Button";

export default function CurrentNotice() {
  return (
    <div className="mt-12 md:mt-24">
      <h2 className="text-mobile-headline md:text-subtitle1 mb-2 md:mb-4">
        콜럼버스 스터디 6기 정규반 모집
      </h2>
      <p className="text-base md:text-xl text-[#828282] mb-6 md:mb-8">
        한 기수 당 월요일~토요일에 진행되며 총 28일, 4주간 진행됩니다.
      </p>
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <div className="flex justify-end mb-2">
          <span className="bg-yellow-400 text-sm md:text-base px-2 py-1 rounded text-white">
            모집 중
          </span>
        </div>
        <h3 className="text-mobile-subtitle md:text-subtitle1 mb-2">
          콜럼버스와 함께 유형별로 코딩테스트를 준비해요!
        </h3>
        <p className="text-sm md:text-base mb-4">
          모집 기간 2024년 7월 27일(토) 12:00 - 2024년 8월 4일(일) 23:59
        </p>
        <p className="text-[#0F81E5] font-[700]">더 자세히 보러가기</p>
      </div>
    </div>
  );
}
