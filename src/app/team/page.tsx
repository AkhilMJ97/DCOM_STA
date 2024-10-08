 
'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import TeamArea from '@/components/team/TeamArea';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import AboutHomeFour from '@/components/about/AboutHomeFour';


// export const metadata = {
//   title: "Team Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamArea />
            <AboutHomeFour />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;