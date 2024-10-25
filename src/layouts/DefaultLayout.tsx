import React from 'react';
import Nav from '../components/Nav';

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Nav />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default DefaultLayout;
