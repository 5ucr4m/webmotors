import React from 'react';
import './App.css';

import Header from './components/Header'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
        <div className="Content">
        <Header />
        <Main />
        </div>
    </div>
  );
}

export default App;
