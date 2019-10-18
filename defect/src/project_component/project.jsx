import React, { Component } from 'react';
import './project.css'
import Axios from 'axios';
// import { thisExpression } from '@babel/types';
// import { start } from 'repl';
class Project extends Component {
    state = {data:[],
   
        projectName:'',
        projectDescription:'',
      }
      
      handleChangepname =(e)=>{
        this.setState({projectName:e.target.value});
       }
       handleChangepdes =(e)=>{
        this.setState({projectDescription:e.target.value});
       }
    
      
      componentDidMount() {
        // Axios.get('http://localhost:8081/test/api/v1/project')
        // .then(res=>console.log(res))
          Axios.get("http://localhost:8081/test/api/v1/project")
          .then(res=>{
            this.setState({ data:res.data  });
            console.log(this.state.data);
          }
            )
        
        }
      
      handleAdd=(e)=>{ 
        
        Axios.post("http://localhost:8081/test/api/v1/project",this.state)
        .then(res=>
         {
        //  console.log(res);
         }
        ) 
        
      }
    
    render() { 
        // console.log(this.state);
        return ( 
<div className="form-style-6">
<h1>Project Details</h1>
<form onSubmit={this.handleAdd}>
 
<input type="text" name="projectName" placeholder="Project Name" value={this.state.projectName}onChange={this.handleChangepname} />
<input type="text" name="projectDescription" placeholder="Project Description" value={this.state.projectDescription}onChange={this.handleChangepdes}/>

  <input type="submit" value="Create" />
  <input type="submit" value="Clear" />

</form>
</div>
         );
    }
}
 
export default Project;