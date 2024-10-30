import Image from "next/image";

function ChatBubble({ message, isReversed, backgroundColor }) {
  return (
    <div
      className={`relative p-4 rounded-[0.625rem]`}
      style={{ backgroundColor, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}
    >
      <p className="text-xs font-bold md:text-lg">{message}</p>
      <div
        className={`absolute top-4 ${
          isReversed ? "right-[-8px]" : "left-[-8px]"
        } w-4 h-4 transform rotate-45`}
        style={{ backgroundColor }}
      ></div>
    </div>
  );
}

export default function ChatIntro() {
  const chats = [
    {
      type: "male",
      message: "일 하면서 코테 준비 혼자하기 힘들다..",
      avatar: "/avatars/male-avatar.png",
      color: "#F2F8FF",
    },
    {
      type: "female",
      message: "알고리즘 공부 어디서부터 어떻게 해야하지?",
      avatar: "/avatars/female-avatar.png",
      color: "#FFFCE2",
    },
    {
      type: "engineer",
      message: "기초부터 다시 천천히 배우고 싶어!!",
      avatar: "/avatars/engineer-avatar.png",
      color: "rgba(255, 204, 250, 0.2)",
    },
  ];

  return (
    <section className="py-16 px-2 md:px-8">
      <h2 className="text-center text-xl md:text-4xl font-bold mb-4">
        항해를 함께해요
      </h2>
      <p className="text-center text-[#4E4E4E] text-base md:text-xl mb-12">
        이런 생각 해본 적 있으신가요?
      </p>

      <div className="max-w-2xl mx-auto space-y-6">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 ${
              chat.type === "female" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="w-[76px] flex-shrink-0">
              <Image
                src={chat.avatar}
                alt="아바타"
                width={76}
                height={76}
                className="rounded-full"
              />
            </div>
            <ChatBubble
              message={chat.message}
              isReversed={chat.type === "female"}
              backgroundColor={chat.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
