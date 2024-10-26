import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
