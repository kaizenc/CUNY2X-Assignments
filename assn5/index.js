import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComp extends Component {
  render() {
    return (
      <div>
        <p>Form Exercises</p>
        <FirstLast />
        <br/>
        <Folder />
      </div>
    );
  }
}

class FirstLast extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: "FirstName",
      firstNameTemp: "FirstName",
      lastName: "LastName",
      lastNameTemp: "LastName",
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnClick(e){
    this.setState({
      isEditing: !this.state.isEditing,
      firstNameTemp: this.state.firstName,
      lastNameTemp: this.state.lastName
    });
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      isEditing: !this.state.isEditing,
      firstName: this.state.firstNameTemp,
      lastName: this.state.lastNameTemp
    });
  }
  render(){
    if(this.state.isEditing){
      return (
        <div className="card">
          <form onSubmit={this.handleSubmit}>
            <input name='firstNameTemp' type='text' value={this.state.firstNameTemp} onChange={this.handleChange}/>
            <input name='lastNameTemp' type='text' value={this.state.lastNameTemp} onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
            <button onClick={ (e) => this.handleOnClick(e) }>Cancel</button>
          </form>
        </div>
      );
    }
    return (
      <div className="card">
        <h4>{this.state.firstName}</h4>
        <h4>{this.state.lastName}</h4>
        <button onClick={ (e) => this.handleOnClick(e) }>Edit</button>
      </div>
    );
  }
}

class Folder extends Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: true
    }
  }
  handleOnClick(e){
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  render(){
    if(this.state.isVisible){
      return(
        <div>
          <h3>Folder</h3> <button onClick={ (e) => this.handleOnClick(e) }>See</button>
          <ul>
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        </div>
      );
    }
    return(
      <div>
        <h3>Folder</h3> <button onClick={ (e) => this.handleOnClick(e) }>See</button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MyComp />,
  document.getElementById('root')
);
