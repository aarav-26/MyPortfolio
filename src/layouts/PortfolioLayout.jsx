import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PortfolioLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;