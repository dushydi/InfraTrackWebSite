import { Hero, Team, Footer, Features, GetInTouch } from "./sections/index";
import Nav from "./componets/Nav";
import React from "react";
import MoreInfo from "./sections/MoreInfo";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Team />
      </section>
      <section className="padding">
        <Features />
      </section>
      <section className="padding-x py-10">
        <MoreInfo />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <GetInTouch />
      </section>
      <section className="bg-[#2e4052] padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  );
};

export default App;
