import Container from "@/components/commons/Container";
import Header from "./Header";
import Hero from "./Hero";
import CurrentNotice from "@/components/main/CurrentNotice";
import Classes from "@/components/main/Classes";
import ExtraDescription from "@/components/main/ExtraDescription";
import Testimonials from "@/components/main/Testimonials";

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
    </>
  );
}
