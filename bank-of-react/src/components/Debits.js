import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CredDeb from './CredDeb';

class Debits extends Component{
  render(){
    let items = this.props.Debits.map(item =>
      <CredDeb description={item.description} amount={item.amount} date={item.date}/>
    );
    return(
      <div>
        <h1>Debits</h1>

        <div>Debits: {this.props.totalDebits}</div>
        {items}
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Debits;
