import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from "../presentational/Button.jsx";
class ButtonContainer extends Component {
  constructor() {
    super();
    this.state = {
      studentResponse: [{
        "id": null,
        "firstName": null,
        "lastName": null,
        "email": null,
        "imageUrl": null,
        "gpa": null,
        "createdAt": null,
        "updatedAt": null,
        "campusId": null
      }],
      campusResponse: [{
        "id": null,
        "name": null,        
        "imageUrl": null,
        "address": null,
        "description": null,
        "createdAt": null,
        "updatedAt": null,
      }],
      viewStudents: false,
      viewCampuses: false    
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick() {
    axios.get("/api/students/")
      .then(res => {
        this.setState({ 
          studentResponse: res.data, 
          viewCampuses: false,
          viewStudents: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleClick2() {
    axios.get("/api/campuses/")
      .then(res => {
        this.setState({ 
          campusResponse: res.data, 
          viewStudents: false, 
          viewCampuses: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { studentResponse , campusResponse, viewStudents, viewCampuses} = this.state;
    return (
      <Button       
        handleClick={this.handleClick}
        handleClick2={this.handleClick2}
        studentResponse={studentResponse}
        campusResponse={campusResponse}
        viewCampuses={viewCampuses}
        viewStudents={viewStudents}
      />
    );
  }
}
export default ButtonContainer;
const wrapper = document.getElementById("create-buttons");
wrapper ? ReactDOM.render(<ButtonContainer />, wrapper) : false;