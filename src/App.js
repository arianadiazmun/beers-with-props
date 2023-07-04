import { useState } from 'react';
import './App.css';
import BeerList from './components/BeerList';
import Header from './components/Header';


function App() {
  const [showBeers, setShowBeers] = useState (true);
  return (
  <>
  <Header/>
  {showBeers&& <BeerList/>}
  <button onClick={() => setShowBeers(!showBeers)}>Boss Mode</button>
  </>
  );
}

export default App;
