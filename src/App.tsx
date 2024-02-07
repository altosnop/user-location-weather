import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SavedCardsPage from './pages/SavedCardsPage';
import NotFoundPage from './pages/NotFoundPage';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/saved-cards" element={<SavedCardsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
