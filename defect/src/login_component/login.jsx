import React, { Component } from 'react';
import './login.css';
import img_avatar2 from '../img_avatar2.png';
import { pipelineTopicExpression } from '@babel/types';
class Login  extends Component {
    state = {  }
    render() { 
        return (   <div>
<h2>Login Form</h2>


  <div class="imgcontainer">
   <img src= {img_avatar2} class="avatar"/>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>


    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</div>

        );
    }
}
 
export default Login;