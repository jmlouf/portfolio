import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/index';

function App() {
  return (<>
    <Header />

    <Outlet />

    {/* Footer */}
  </>);
}

export default App;