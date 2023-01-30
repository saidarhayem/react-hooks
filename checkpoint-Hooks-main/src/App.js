import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [text, SetText] = useState('');
  console.log("text",text)
  return (
    <div className="App">
      <Navbar SetText={SetText}/>
      <MovieList text={text}/>
      
     
    </div>
  );
}

export default App;
