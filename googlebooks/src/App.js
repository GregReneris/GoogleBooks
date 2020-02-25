import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import PageHeading from "./components/PageHeader"
import Search from "./components/Search"
import Saved from "./components/saved"


function App() {
















  return (
    <div>

    <Router>
      <NavBar/>
      <PageHeading/>
    
      <Route exact path ="/saved"> 
        <Saved></Saved>
      </Route>


      <Route exact path = "/">
        <Search/>
      </Route>
    </Router>
  
  
  
    </div>
    );
}

export default App;
