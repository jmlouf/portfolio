import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section>
        <Outlet />
      </section>

      <Footer />
    </>
  );
}

export default App;
