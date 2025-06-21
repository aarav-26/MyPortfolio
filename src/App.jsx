import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import PortfolioHome from '@/pages/PortfolioHome';
import CertificateDetailPage from '@/pages/CertificateDetailPage';
import AchievementDetailPage from '@/pages/AchievementDetailPage';

function App() {
  return (
    <Router>
      <PortfolioLayout>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/certificate/:id" element={<CertificateDetailPage />} />
          <Route path="/achievement/:id" element={<AchievementDetailPage />} />
        </Routes>
        <Toaster />
      </PortfolioLayout>
    </Router>
  );
}

export default App;