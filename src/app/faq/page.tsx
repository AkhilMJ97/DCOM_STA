 
'use client'

import FaqArea from '@/components/faq/FaqArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
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
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;