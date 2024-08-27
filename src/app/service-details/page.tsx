
'use client'


import AboutHomeFour from '@/components/about/AboutHomeFour';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import ServiceAreaDetails from '@/components/service/ServiceAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import React from 'react';

// export const metadata = {
//   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails />
            <ServiceAreaDetails />
            <DetailsBanner />
            <ServiceDetailsFaq />
            <AboutHomeFour />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;