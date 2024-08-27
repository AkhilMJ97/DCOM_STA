 
'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import Portfolio from '@/components/portfolio/Portfolio';
import Wrapper from '@/layouts/Wrapper';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import React from 'react';



// export const metadata = {
//   title: "Portfolio Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Portfolio />
            <AboutHomeFour />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;