import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

function BlogPage() {
  useEffect(() => {
    document.title = "Blog";
  }, [])
  return (
    <div>
      <Header />
      <Slider />
      <section>
        <div className="container">
          <div className="text-center font-bold text-[32px] py-[60px]">
            Blog
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPage;
