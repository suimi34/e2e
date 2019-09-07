import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h2>home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>about</h2>
  </div>
);

export default App;
