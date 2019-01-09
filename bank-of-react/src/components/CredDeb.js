import React, {Component} from 'react';

class CredDeb extends Component{
  render(){
    return(
      <div>
        <p>Description: {this.props.description}</p>
        <p>Amount: {this.props.amount}</p>
        <p>Date: {this.props.date}</p>
      </div>
    );
  }
}

export default CredDeb;
