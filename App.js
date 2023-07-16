import React from "react";
import AdminLogin  from './AdminLogin';
import AdminRegister from "./AdminRegister";
import   Home  from "./Home";
import Feedback from "./Feedback";
import Button from "./Button";
import Radio from "./Radio";
import Rating from "./Rating";
import Comment from "./Comment";
import Likert from "./Likert";
import Start from "./Start";
import FrontPage from './FrontPage';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



const App=()=> {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={FrontPage}></Route>
        <Route exact path="/AdminLogin" component={AdminLogin}></Route>
        <Route exact path="/AdminRegister" component={AdminRegister}></Route>
        <Route exact path="/Home"component={Home}></Route>
        <Route exact path="/Feedback"component={Feedback}></Route>
        <Route exact path="/Button"component={Button}></Route>
        <Route exact path="/Radio"component={Radio}></Route>
        <Route exact path="/Rating"component={Rating}></Route>
        <Route exact path="/Comment"component={Comment}></Route>
        <Route exact path="/Likert"component={Likert}></Route>
        <Route exact path="/FrontPage"component={FrontPage}></Route>
        <Route exact path="/UserLogin"component={UserLogin}></Route>
        <Route exact path="/UserRegister"component={UserRegister}></Route>
        <Route exact path="/Start"component={Start}></Route>

        </Switch>
      </Router>
      
  );
}

export default App;