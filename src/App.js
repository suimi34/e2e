import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/top" component={Main} />
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h2>もりけんサイズ</h2>
  </div>
);
const Main = () => (
  <div>
    <h2>Main</h2>
  </div>
);

export default App;
