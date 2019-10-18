import React, { Component } from 'react';
import '../projectlist_component/projectlist.css'
import './projectlist.css'
import Axios from 'axios';

class Projectlist extends Component {
    state = { data:[] }

    handleDelete=(id)=>{
        Axios.delete('http://localhost:8081/test/api/v1/project/'+id)
        .then(res => console.log(res));
        alert("Deleted");
        window.location.reload();
    }

    refreshProject() {
        Axios.get("http://localhost:8081/test/api/v1/project")
        .then(res => {
       
          this.setState({ data:res.data });
        });
      }
    componentDidMount() {
        Axios.get('http://localhost:8081/test/api/v1/project')
        .then(res=>{
            this.setState({ data:res.data});
        })
    }
    
    render() { 
        console.log("this is state",this.state.data);
        return ( <div className="prl">

<h2>Project Table</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Delete</th>
    <th>Edit</th>
  </tr>
  
  {this.state.data.map(d=>{
      return(
  <tr>
    <td>{d.projectName}</td>
    <td>{d.projectDescription}</td>
    <td><button onClick={()=>this.handleDelete(d.id)}>Delete</button></td>
    <td> <a href={`/update/${d.id}`}><input type="button"   value="Edit" /></a>
  </td>

  </tr>

      )
  })}
  
</table>


        </div> );
    }
}
 
export default Projectlist;