import Container from "@/components/commons/Container";
import Header from "./(common)/Header";
import Hero from "../components/main/Hero";
import CurrentNotice from "@/components/main/CurrentNotice";
import Classes from "@/components/main/Classes";
import ExtraDescription from "@/components/main/ExtraDescription";
import Testimonials from "@/components/main/Testimonials";
import FreeNoteSignup from "@/components/main/FreeNoteSignup";
import FAQ from "@/components/main/FAQ";
import Footer from "./(common)/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <CurrentNotice />
        <Classes />
        <ExtraDescription />
      </Container>
      <Testimonials />
      <Container>
        <FreeNoteSignup />
        <FAQ />
      </Container>
      <Footer />
    </>
  );
}
