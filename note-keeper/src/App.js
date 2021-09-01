// starting our App.js file
import React from 'react';

//our components....
import NotesApp from './components/Notes';
import Main from './components/ToDo';
import CalendarApp from './components/Calendar';
import FavoriteLinks from './components/Favorites';
import Header from './layout/Header';
import Clip from './layout/Clips';

// Our Router components for DOM navigation.
import { BrowserRouter, Route } from 'react-router-dom';

// Our React-BootStrap components
import {Container, Col, Row} from 'react-bootstrap';

// main App component
function App() {
    return (
      <div className="App">
        <Container>
          <Row>
          <header className="App-header">
                //will show our clip image (optional add-in)
                <Clip /> 
            </header>
            <header className="App-header">
                //will show our page title
                <Header /> 
            </header>
          </Row>
          <Row>
              <Col className="col-12 col-md-6 col-lg-6"> 
                //will show our notes section
                <BrowserRouter>
                  <Route path="/" component={NotesApp}/> 
                </BrowserRouter>
              </Col>
              <Col className="col-12 col-md-6 col-lg-6">  
                //will show our to-do section              
                <BrowserRouter>
                  <Route path="/" component={Main}/> 
                </BrowserRouter>
              </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 col-lg-6"> 
              //will show our favorites section
              <BrowserRouter>
                <Route path="/" component={FavoriteLinks}/> 
              </BrowserRouter>
            </Col>
            <Col className="col-12 col-md-6 col-lg-6"> 
              //will show our calender section
              <BrowserRouter>
                  <CalenderApp />  
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
//exports the App component to be used in index.js
export default App;