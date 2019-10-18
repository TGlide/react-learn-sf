// React
import React from "react";
import "./App.css";
// Components
import InfosCredito from "./components/InfosCredito";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faMoneyCheckAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faMoneyCheckAlt, faUser);

function App() {
  return (
    <div className="App">
      <InfosCredito></InfosCredito>
    </div>
  );
}

export default App;
