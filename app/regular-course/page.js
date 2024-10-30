import Container from "../(regular-course)/Container";
import Header from "@/app/(common)/Header";
import Footer from "@/app/(common)/Footer";
import Thumbnail from "@/components/regular-course/Thumbnail";
import ChatIntro from "@/components/regular-course/ChatIntro";
import Curriculum from "@/components/regular-course/Curriculum";
import Benefit from "@/components/regular-course/Benefit";
import LevelCourses from "@/components/regular-course/LevelCourses";

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
      <Footer />
    </>
  );
}
