import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      {/* Conditionally render pages according to URL. */}
      <Outlet />
    </>
  );
}

export default App;