import React from "react";
import Image from "next/image";

export default function Point({ number, title, descriptions, imageUrl }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-sm">
      <h3 className="font-bold text-[#0F81E5] mb-4">Point {number}</h3>
      <div className="space-y-4">
        <h4 className="text-xl font-bold whitespace-pre-line">{title}</h4>
        <div>
          {descriptions.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <div className="overflow-hidden w-full max-w-[500px] max-h-[270px] mt-6">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`Point ${number}`}
              // layout="fill"
              width={500}
              height={500}
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
