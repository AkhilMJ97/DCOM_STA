'use client'

import ContactArea from '@/components/contact/ContactArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import Header from '@/layouts/headers/Header';
import React from 'react';

// export const metadata = {
//   title: "Contact Vixan - Digital  Creative Agency Next js Template",  
// };


const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
        <ContactArea />
        </main>
        <FooterOne />
      </div>
      </div>
    </Wrapper>
  );
};

export default index;