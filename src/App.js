import './App.css';
import React,{ useEffect, useMemo, useRef, useState, useTransition } from 'react';
import Quize from './components/main/quize';

function App() {
  return (
    <div className='App'>
       <Quize/>
    </div>
  );
}

export default App;