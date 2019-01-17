import React, { Component } from "react";

class Button extends Component{
  render(){
    let arrStudents = !this.props.viewStudents ? null : this.props.studentResponse.map(student => (
      <div key={student.id}>
        <p>Name: {student.firstName} {student.lastName}</p>
        <p>Email: {student.email}</p>
        <p>Picture: <img src={student.imageUrl}></img></p>
        <p>GPA: {student.gpa}</p>
      </div>
    ));
    let arrCampuses = !this.props.viewCampuses ? null : this.props.campusResponse.map(campus => (
      <div key={campus.id}>
        <p>Name: {campus.name}</p>
        <p>Address: {campus.address}</p>
        <p>Picture: <img src={campus.imageUrl}></img></p>
        <p>Description: {campus.description}</p>
      </div>
    ));
    return(
      <div className="form-group">
        <button onClick={this.props.handleClick}>View Students</button>
        <button onClick={this.props.handleClick2}>View Campuses</button>
        <div className="response">
          {arrStudents}
          {arrCampuses}
        </div>
      </div>
    );
  }
}

export default Button;