import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import FormText from './component/FormText';
// import React,{useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
  
// } from "react-router-dom";


function App() {
  return (
    <>
    {/* <Router> */}
    <div className=' container bg-success text-white my-5 text-center'>
    <h1>WORD CONVERTER AND WORD COUNTER</h1>
    </div>
    <div className='container'>
    <Navbar jiban='saroj'/>
    </div>
    <div className='container'>
      <p>
      As the name goes, ConceptServe Technologies delivers your concepts in the best possible manner. Our highly talented professional team makes sure you get well designed
      software or website for your business needs. We are goal oriented company, focusing on client needs and delivering it within time frame. We look forward to new challenges
      and strive to get the result which will satisfy our clients. ConceptServe Technologies has earned its name as an outstanding IT service company that can be relied and trusted.
      Our transparent business dealings and professionalism will help you achieve the best IT needs for your business in this global marketing era.
      </p>
      
      {/* <Switch>
          <Route path="/" component={<Navbar />}>
            <FormText />
          </Route>
        
      </Switch> */}
    </div>
    <div className='container'>
<FormText />
    </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
