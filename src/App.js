import React from "react";
import "./App.css";
import Title from "./components/Title";
import ListCharacters from "./components/ListCharacters";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
import { Route, Switch } from "react-router-dom";
import home from './components/pages/home';
import rules from './components/pages/rules';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" component={'home'}/>
        <Route path="/rules" component={'rules'}/>
      </Switch>
      <Title />
      <ListCharacters />
      <Ratings/>
      </div>
  );
};

export default App;
