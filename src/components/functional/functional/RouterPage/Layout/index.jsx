import { parseWithOptions } from 'date-fns/fp';
import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

const Layout = props => {
  return (
    <>
      <Nav />
      {props.children}
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default Layout;
