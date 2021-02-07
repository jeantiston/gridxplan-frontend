import './App.css';

import React from 'react';
import TopBar from './components/TopBar'
import BottomMenu from './components/BottomMenu'
import GridGallery from './components/GridGallery'



function App() {
  return (
    <div className="App">
      <TopBar />
      <GridGallery />
      <BottomMenu />
    </div>
  );
}

export default App;
