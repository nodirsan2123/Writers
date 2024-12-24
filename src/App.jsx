import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    </div>
  );
}

export default App;
