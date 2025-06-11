import { Container } from "@mui/system";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/screens/contact";
import Development from "./components/screens/development";
import Home from "./components/screens/home";
import Research from "./components/screens/research";
import Teaching from "./components/screens/teaching";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/development" element={<Development />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
    </Fragment>
  );
}

export default App;