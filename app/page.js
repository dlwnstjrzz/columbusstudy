import Container from "@/components/commons/Container";
import Header from "./Header";
import Hero from "./Hero";
import CurrentNotice from "@/components/main/CurrentNotice";
import Classes from "@/components/main/Classes";
import ExtraDescription from "@/components/main/ExtraDescription";
import Testimonials from "@/components/main/Testimonials";
import FreeNoteSignup from "@/components/main/FreeNoteSignup";
import FAQ from "@/components/main/FAQ";
import Footer from "@/app/Footer";

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
