"use client";

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function DropoutCriteria() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className="bg-[#08467D] text-white rounded-lg cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <h3 className="font-bold">퇴출 기준</h3>
        {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
      </div>
      {isOpen && <div className="mx-6 mb-4 h-[1px] bg-[#FFFFFF]"></div>}

      {isOpen && (
        <div className="px-6 pb-6 space-y-4 text-sm">
          <div>
            <strong>1. 문제 인증 5회 이상 하지 않을 경우&nbsp;</strong>
            경고 후 지속될 시 퇴출 조치
          </div>
          <div>
            <strong>2. 모각코 3회, 코드리뷰 1회 이상 결석 시&nbsp;</strong>퇴출
            조치
            <p className="text-sm opacity-80 mt-2">
              (스터디 시작 전 미리 얘기한 결석 예정일만 면제)
            </p>
          </div>
          <div>
            <p>
              코드리뷰의 경우 한 기수에 3회 진행되기도 하고, 결석 시 팀에 피해가
              가기에 더 엄격하게 관리하고 있습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
