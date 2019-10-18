import React, { Component } from 'react';
import './defect.css'
class Project extends Component {
    state = {  }
    render() { 
        return ( 
<div class="form-style-6">
<h1>Project Details</h1>
<form>
<input type="text" name="field1" placeholder="Defect ID" />
<input type="text" name="field2" placeholder="Defect Description" />
<input type="text" name="field3" placeholder="Project ID" />
<input type="text" name="field4" placeholder="Project Description" />

</form>
</div>
         );
    }
}
 
export default Project;