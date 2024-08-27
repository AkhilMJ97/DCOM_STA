 
 'use client'


import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import Service from '@/components/service/Service';
import Testimonial from '@/components/testimonial/Testimonial';
import Wrapper from '@/layouts/Wrapper';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import React from 'react';


// export const metadata = {
//   title: "Service Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroService />
            <Service />
            <Testimonial style_service={true} />
            <AboutHomeFour />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;