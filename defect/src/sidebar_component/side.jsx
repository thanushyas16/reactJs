import React, { Component } from 'react';
import './side.css';
class Side extends Component {
    state = {  }
    render() { 
        return (
            <div> 
            <div class="sidebar">
               
            <div class="dropdown">

  <a> Project</a>
  <div class="dropdown-content">
  <a href="/add">Add Project</a>
  <a href="/viewprojectlist">Project List</a>
  <div/>
  </div>
  
 </div>

    <a href="/defect">defect</a>
 
    <div class="dropdown">

<a> User</a>
<div class="dropdown-content">
<a href="/profile">Profile</a>
<a href="#">Privillages</a>
<a href="#">Experiences</a>
<div/>
</div>

    </div>
    <a href="#">settings</a>
</div>

</div>
         );
    }
}
 
export default Side;