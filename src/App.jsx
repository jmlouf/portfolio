import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/index';

function App() {
  return (
    <>
      <Header />
      {/* Conditionally render pages according to URL. */}
      <Outlet />
    </>
  );
}

export default App;