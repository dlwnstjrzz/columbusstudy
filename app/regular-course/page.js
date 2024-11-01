import Container from "../(regular-course)/Container";
import Header from "@/app/(common)/Header";
import Footer from "@/app/(common)/Footer";
import Thumbnail from "@/components/regular-course/Thumbnail";
import ChatIntro from "@/components/regular-course/ChatIntro";
import Curriculum from "@/components/regular-course/Curriculum";
import Benefit from "@/components/regular-course/Benefit";
import LevelCourses from "@/components/regular-course/LevelCourses";
import PriceInfo from "@/components/regular-course/PriceInfo";
import Event from "@/components/regular-course/Event";
import FAQ from "@/components/main/FAQ";

export default function RegularCoursePage() {
  return (
    <>
      <Header />
      <Thumbnail />
      <Container>
        <ChatIntro />
      </Container>
      <Curriculum />
      <Benefit />
      <LevelCourses />
      <PriceInfo />
      <Event />
      <Container>
        <FAQ />
      </Container>
      <Footer />
    </>
  );
}
