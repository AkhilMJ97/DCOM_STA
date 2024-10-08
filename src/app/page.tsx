"use client";
import React, { useState } from "react";
import Header from "@/layouts/headers/Header";
import HeroHome from "@/components/hero/HeroHome";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import ServiceHomeOne from "@/components/service/ServiceHomeOne";
import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import Testimonial from "@/components/testimonial/Testimonial";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import Footer from "@/layouts/footers/Footer";
import Wrapper from "@/layouts/Wrapper";
import VideoPopup from "@/components/modals/VideoPopup";

// export const metadata = {
//   title: "Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHome />
            <MarqueeAreaHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            <PortfolioHomeOne />
            <AwardsHomeOne />
            <Testimonial />
            <FunFactHomeOne />
            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
            <SubscribeHomeOne />
            <BrandHomeOne style_2={false} />
          </main>
          <Footer />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
