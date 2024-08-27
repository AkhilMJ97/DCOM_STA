'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Footer from '@/layouts/footers/Footer';
import Header from '@/layouts/headers/Header';
import ServiceTeam from '@/components/service/ServiceTeam';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import TeamDetailsArea from '@/components/details/TeamDetailsArea';


// export const metadata = {
//   title: "Team Details Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamDetailsArea />
            <ServiceTeam />
            <AboutHomeFour />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;