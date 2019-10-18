import React, { Component } from 'react';
import Axios from 'axios';
class EditProList extends Component {
    state = { 
        projectName:'',
        projectDescription:'',

     }

     handleChangepname=(e)=>{
         this.setState({ projectName:e.target.value});
         
        }
        
        handleChangepdes=(e)=>{
            this.setState({ projectDescription:e.target.value})
        }
        
        handleSave=(e)=>{
            console.log(this.state)
            e.preventDefault();

             Axios.put('http://localhost:8081/test/api/v1/updateproject/'+this.props.match.params.id, this.state)
             .then(res => console.log(res));
             this.props.history.push('/viewprojectlist')


     }



     componentDidMount() {
        Axios
          .get(
            " http://localhost:8081/test/api/v1/geProjectById/" + this.props.match.params.id
          )
          .then(result => { 
    
            this.setState({
             
              projectName: result.data.projectName,
              projectDescription: result.data.projectDescription
              
            });
          });
      }
    render() { 
        // console.log(this.props.match.params.id)
        return ( 
            <div className="form-style-6">
<h1>Edit Project</h1>
<input type="text" name="projectName" placeholder="Project Name" value={this.state.projectName} onChange={this.handleChangepname} />
<input type="text" name="projectDescription" placeholder="Project Description" value={this.state.projectDescription} onChange={this.handleChangepdes}/>
<input type="button" value="Update"  onClick={this.handleSave}/>


</div>
         );
    }
}
 
export default EditProList;