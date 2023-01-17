import { Footer } from "antd/lib/layout/layout";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Router } from "./Routes/Router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
