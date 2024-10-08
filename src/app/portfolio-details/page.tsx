
 
'use client'

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import PortfolioDetailsArea from '@/components/details/PortfolioDetailsArea';


// export const metadata = {
//   title: "Portfolio Details Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsArea />
            <AboutHomeFour />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;