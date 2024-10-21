import Container from "@/components/commons/Container";
import Header from "../Header";
import Footer from "@/app/Footer";
import Image from "next/image";
import Button from "@/components/commons/Button";

export default function RegularCoursePage() {
  return (
    <>
      <Header />
      <Container>
        <div className="py-12">
          <h1 className="text-mobile-heading md:text-desktop-heading font-bold mb-6">
            정규반 상세 정보
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/manGesture_final.gif"
                alt="정규반 이미지"
                width={500}
                height={300}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-mobile-paragraph2 md:text-desktop-paragraph2 mb-4">
                28일 동안 함께하는 체계적인 알고리즘 공부
              </h2>
              <p className="text-mobile-paragraph1 md:text-desktop-paragraph1 mb-6">
                매일 핵심 문제 제공, 모각코 그리고 코드리뷰를 통해 알고리즘
                실력을 향상시킵니다.
              </p>
              <Button content="지금 신청하기" />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-mobile-paragraph2 md:text-desktop-paragraph2 mb-4">
              커리큘럼
            </h2>
            {/* 여기에 커리큘럼 내용을 추가할 수 있습니다 */}
          </div>
          <div className="mt-12">
            <h2 className="text-mobile-paragraph2 md:text-desktop-paragraph2 mb-4">
              수강 후기
            </h2>
            {/* 여기에 수강 후기를 추가할 수 있습니다 */}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
