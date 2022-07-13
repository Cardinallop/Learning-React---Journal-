
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Router from './components/Router';
import {User } from './components/UserContext';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div >

          <Header />
          <Router />
          <User/>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
