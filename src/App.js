import { Container } from "@mui/system";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/screens/contact";
import Experience from "./components/screens/Experience";
import Home from "./components/screens/home";
import Research from "./components/screens/research";
import Teaching from "./components/screens/Teaching";

function App() {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}

export default App;
