import Head from 'next/head';
import React from 'react';

import HomeLayout from '@components/common/@Layout/layouts/HomeLayout/HomeLayout';

import HomePageContent from './_fragments/HomePageContent';

function HomePage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | 메인</title>
      </Head>
      <HomeLayout content={<HomePageContent />} />
    </>
  );
}

export default HomePage;
