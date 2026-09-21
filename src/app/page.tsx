import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import MenuBoard from "@/components/MenuBoard";
import OrderBuilder from "@/components/OrderBuilder";
import Catering from "@/components/Catering";
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
        <OrderBuilder />
        <Catering />
      </main>
      <Story />
      <Footer />
    </>
  );
}
