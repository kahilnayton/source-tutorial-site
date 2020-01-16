import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';


function Layout({ children }) {
  return (
    <div className="wrapper">
      <main className="main">
        <Header />

        {children}

        <Footer />
      </main>
    </div>
  );
}

export default Layout;
