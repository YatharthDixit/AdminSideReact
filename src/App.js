import Home from "./pages/home/Home";
import * as ReactDOM from "react-dom/client";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
