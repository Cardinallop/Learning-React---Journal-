
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './components/Router';

function App() {
  return (

    <BrowserRouter>
    <div>
      <header>
        <Header />
        <Router/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
