import React, { useContext, useState } from 'react';
import './App.css';
import { Container, Row, } from 'reactstrap';
import Home from "./Components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MarvelList from "./Components/MarvelList"
import ContextApiMarvel from "./ContextApi/ContextApiMarvel"
import PersonMarvel from "./Components/PersonMarvel"
import NotFound from "./Components/NotFound"

function App() {
  
  const [arrayMarvel,setArrayMarvel]=useState([])
  
  return (<>
  <ContextApiMarvel.Provider value={{arrayMarvel,setArrayMarvel}}>
      <Router>
        <Switch>

        <Route path ="/personajes/:id">
            <Container fluid={true}>
              <Row>
                <PersonMarvel />
              </Row>
            </Container>
          </Route>

          <Route path ="/personajes">
            <Container fluid={true}>
              <Row>
                <MarvelList />
              </Row>
            </Container>
          </Route>

          <Route exact path ="/">
            <Container fluid={true}>
              <Row>
                <Home/>
              </Row>
            </Container>
          </Route>

          <Route path ="*">
            <Container fluid={true}>
              <Row>
                <NotFound/>
              </Row>
            </Container>
          </Route>

        </Switch>
      </Router>
    
  </ContextApiMarvel.Provider>
 
  </>);
}

export default App;
