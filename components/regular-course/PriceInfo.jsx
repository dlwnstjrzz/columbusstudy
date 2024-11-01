import { FaCheck } from "react-icons/fa6";

export default function PriceInfo() {
  const benefit = [
    "매일 핵심 유형 알고리즘 문제 제공",
    "문제허브 노션페이지 평생 제공",
    "알고리즘 공부 꿀팁 압축 길라잡이 노트 제공",
    "함께 써보는 개념 & 오답 & 알고리즘 노트",
    "모각코를 통한 알고리즘 공부 습관 형성",
    "매주 토요일 팀원들과 함께하는 코드리뷰",
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-[rgba(248,253,255,1)] to-[rgba(168,207,251,1)] text-center">
      <h2 className="text-xl md: text-2xl font-bold mb-4">참여비 안내</h2>
      <div className="bg-white rounded-[0.625rem] border border-[#DDEFFF] text-center p-6">
        <h2 className="text-xl font-bold">콜럼버스 알고리즘 정규반 4주 코스</h2>
        <div className="h-[1px] bg-[#E7E7E7] mt-4" />
        <div className="space-y-2 mt-4">
          {benefit.map((content, index) => {
            return (
              <div
                className="flex items-center text-[#454545] text-sm"
                key={content}
              >
                <FaCheck />
                &nbsp;{content}
              </div>
            );
          })}
        </div>
        <div className="h-[1px] bg-[#E7E7E7] mt-4" />
        <div className="mt-4 flex justify-between text-sm text-[#828282]">
          <p>정가</p>
          <p style={{ textDecoration: "line-through" }}>99,000원</p>
        </div>
        <div className="mt-2 flex justify-between items-end text-sm font-bold">
          <p>할인금액</p>
          <p className="text-xl">66,000원</p>
        </div>
        <button
          className={
            "bg-[#0F81E5] font-bold text-white px-4 py-2 w-full rounded-[0.3125rem] mt-6"
          }
        >
          지금 바로 신청하기
        </button>
      </div>
      <div className="text-left mt-4 space-y-1">
        <p className="text-sm">*기수 별로 가격이 인상될 수 있음</p>
        <p className="text-sm font-bold">
          *스터디 시작 전 까지 100% 환불 가능, 이후 환불 불가
        </p>
      </div>
    </div>
  );
}
