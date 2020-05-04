import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackToTop from './containers/header/header'
import MainWindow from './containers/center/mainWindow'

function App() {
  return (
    <div className="App">
    <BackToTop/>
    <MainWindow/>
      
    </div>
  );
}

export default App;
