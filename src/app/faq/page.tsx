 
'use client'

import FaqArea from '@/components/faq/FaqArea';
import Wrapper from '@/layouts/Wrapper';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import React from 'react';



// export const metadata = {
//   title: "Faq Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;