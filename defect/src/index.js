import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Project from './project_component/project';
import Login from './login_component/login';
import Projectlist from './projectlist_component/projectlist';
import Defect from './defect_component/defect';
import Profile from './profile_component/profile';
import EditProList from './projectlist_component/editprolist';
ReactDOM.render( <BrowserRouter>
   <Switch>
  <Route exact path='/' component={App}/>
  
  <Route path='/add' component={Project}/>
  <Route path='/login' component={Login}/>
  <Route path='/viewprojectlist' component={Projectlist}/>
  <Route path='/defect' component={Defect}/>
  <Route path='/profile' component={Profile}/>
  <Route path='/update/:id' component={EditProList}/>
</Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
