import { parseWithOptions } from 'date-fns/fp';
import React from 'react';
import Nav from '../Nav';

const Layout = props => {
  return (
    <>
      <Nav />
      {props.children}
      {/* <Footer /> */}
      <p>Footer</p>
    </>
  );
};

export default Layout;
