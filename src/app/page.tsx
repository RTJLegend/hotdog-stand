import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import MenuBoard from "@/components/MenuBoard";
import { FindUs, Story, Footer } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <MenuBoard />
        <FindUs />
      </main>
      <Story />
      <Footer />
    </>
  );
}
