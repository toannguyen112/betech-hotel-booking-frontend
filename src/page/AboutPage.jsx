import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

function AboutPage() {
  useEffect(() => {
    document.title = "About";
  }, [])
  return (
    <div>
      <Header />
      <Slider />
      <section>
        <div className="text-center font-bold text-[32px] py-[60px]">
          Về chúng tôi
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
