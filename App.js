import React from "react";
import AdminLogin  from './AdminLogin';
import AdminRegister from "./AdminRegister";
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import  Home  from "./Home";
import Feedback from "./Feedback";
import Button from "./Button";
import Responses from "./Responses";
import FrontPage from './FrontPage';
import AfterUserLogin from './AfterUserLogin';
import End from './End';
import GoogleForm from './GoogleForm';
import ButtonMain from './ButtonMain';

import AddRadio from './AddRadio';
import GetRadio from './GetRadio';
import UpdateRadio from './UpdateRadio';
import DeleteRadio from './DeleteRadio';

import AddComment from './AddComment';
import GetComment from './GetComment';
import UpdateComment from './UpdateComment';
import DeleteComment from './DeleteComment';

import AddLikert from './AddLikert';
import GetLikert from './GetLikert';
import UpdateLikert from './UpdateLikert';
import DeleteLikert from './DeleteLikert';

import ShowRadio from './ShowRadio';

import ButtonMainComment from './ButtonMainComment';
import ButtonMainLikert from './ButtonMainLikert';

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
        <Route exact path="/FrontPage"component={FrontPage}></Route>
        <Route exact path="/UserLogin"component={UserLogin}></Route>
        <Route exact path="/UserRegister"component={UserRegister}></Route>
        <Route exact path="/Responses"component={Responses}></Route>
        <Route exact path="/AfterUserLogin"component={AfterUserLogin}></Route>

        <Route exact path="/AddRadio"component={AddRadio}></Route>
        <Route exact path="/GetRadio"component={GetRadio}></Route>
        <Route exact path="/DeleteRadio"component={DeleteRadio}></Route>
        <Route exact path="/UpdateRadio"component={UpdateRadio}></Route>
        
        <Route exact path="/AddComment"component={AddComment}></Route>
        <Route exact path="/GetComment"component={GetComment}></Route>
        <Route exact path="/UpdateComment"component={UpdateComment}></Route>
        <Route exact path="/DeleteComment"component={DeleteComment}></Route>

        <Route exact path="/AddLikert"component={AddLikert}></Route>
        <Route exact path="/GetLikert"component={GetLikert}></Route>
        <Route exact path="/UpdateLikert"component={UpdateLikert}></Route>
        <Route exact path="/DeleteLikert"component={DeleteLikert}></Route>

        <Route exact path="/End"component={End}></Route>
        <Route exact path="/GoogleForm"component={GoogleForm}></Route>

        <Route exact path="/ShowRadio"component={ShowRadio}></Route>

        <Route exact path="/Button"component={Button}></Route>
        <Route exact path="/ButtonMain"component={ButtonMain}></Route>
        <Route exact path="/ButtonMainComment"component={ButtonMainComment}></Route>
        <Route exact path="/ButtonMainLikert"component={ButtonMainLikert}></Route>

        </Switch>
      </Router>
      
  );
}

export default App;