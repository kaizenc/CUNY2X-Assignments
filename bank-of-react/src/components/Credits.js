import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CredDeb from './CredDeb';

class Credits extends Component{
  render(){
    let items = this.props.Credits.map(item =>
      <CredDeb description={item.description} amount={item.amount} date={item.date}/>
    );
    return(
      <div>
        <h1>Credits</h1>

        <div>Credits: {this.props.totalCredits}</div><br/>
        {items}
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Credits;
