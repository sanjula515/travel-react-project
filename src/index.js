import React from 'react';
import ReactDOM from 'react-dom';



  import{
    BrowserRouter as Router,
    Route,
    Link,
   NavLink,
    Switch

  } from "react-router-dom";
  import Home from "./Home";
  import Form from "./Contact";
  
  const routing =(
    <Router>
     <div>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Contact" component={Form}/>
        </Switch>
    </div>
    </Router>
 );

ReactDOM.render(routing,document.getElementById("root"));
