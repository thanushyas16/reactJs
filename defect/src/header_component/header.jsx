import React, { Component } from 'react';
import pic from '../pic1.png';
import './header.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
          <div class="header"> 




<div class="header-left">
<a href="#default" class="logo"> Defect Tracker</a>

<img src ={pic}/>
</div>
<div class="header-right">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

<a  class="btn-pad"  href="#home"><i class="fa fa-home"></i> Home</a> 
<a class="btn-pad" href="/login" ><i  class="fa fa-user icon"></i> Login</a>


</div>
</div>
        </div>
         );
    }
}
 
export default Header ;