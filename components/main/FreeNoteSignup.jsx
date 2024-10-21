"use client";
import { useState } from "react";
import Image from "next/image";

export default function FreeNoteSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기에 이메일 발송 로직을 추가합니다.
    console.log("이메일 발송:", email);
    // 실제 이메일 발송 API 호출 로직이 들어갈 자리입니다.
  };

  return (
    <div className="mt-12 md:mt-24 bg-gradient-to-b from-[rgba(250,247,228,0.73)] to-[rgba(198,241,255,0.73)] rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center w-full max-w-full overflow-hidden">
      <div className="flex items-center mb-8 w-full">
        <Image
          src="/flower.png"
          alt="꽃 이미지"
          width={100}
          height={40}
          className="rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-left w-full">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            개념노트 무료로 받아보기
          </h2>
          <p className="text-sm md:text-base text-[#828282] mb-6">
            신청하시면 이메일 수신에 동의하는 것으로 간주됩니다.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <p className="text-xs md:text-sm mb-2">이메일 주소</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pigCat@pig.com"
              className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <button
              type="submit"
              className="bg-[#2378C2] text-sm md:text-base hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 mb-6 w-full"
            >
              이메일 보내고 자료 받기
            </button>
          </form>
          <p className="text-sm text-[#4A5568]">
            이미 <span className="font-bold">1,234명</span>의 개발자가
            받아보았어요!
          </p>
        </div>
      </div>
    </div>
  );
}
