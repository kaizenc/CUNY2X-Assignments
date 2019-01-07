import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class MyComp extends Component {
  render() {
    let startval_ = 10;
    let mobile1 = 3457270234;
    let mobile2 = 4517270284;
    let mobile3 = 9307270283;
    let work1 = 2928358374;
    return (
      <div>
        <ContactCard name="Kaizen" mobile={mobile1} email="test1@test.com"/><br/>
        <ContactCard name="Amy" mobile={mobile2} work = {work1} email="test2@test.com"/><br/>
        <ContactCard name="Putang" mobile={mobile3} email="test3@test.com"/>
        <Decrement startVal={startval_}/>
      </div>
    );
  }
}

class ContactCard extends Component{
  render(){
    let work_num = null;
    if(this.props.work != null){
      work_num = <p>Work: {this.props.work}</p>;
    }
    return (
      <div className="card">
      <div className="container">
        <h4><b>{this.props.name}</b></h4>
        <p>Mobile: {this.props.mobile}</p>
        {work_num}
        <p>E-Mail: {this.props.email}</p>
      </div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  work: PropTypes.number,
};

class Decrement extends Component{
  constructor(props){
    super(props);
    this.state = {
      curr: this.props.startVal,
    };
  }
  changeVal(){
    if(this.state.curr === 0){
      alert('Cannot be less than zero');
      return;
    }
    this.setState({
      curr: this.state.curr-1,
    });
  }
  render(){
    return (
      <div className = "center_and_margin">
        <button onClick = {() => this.changeVal()}>Decrement</button>
        <p className = "inline"> {this.state.curr}</p>
      </div>
    );
  }
}

Decrement.propTypes = {
  startVal: PropTypes.number.isRequired,
};

// ========================================

ReactDOM.render(
  <MyComp />,
  document.getElementById('root')
);
