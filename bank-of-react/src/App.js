import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile'
import LogIn from './components/Login'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance: 999,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      totalCredits: 0,
      totalDebits: 0,
    }
  }
  fetchData(){
    const reducer = (accumulator, currentItem) => accumulator + currentItem.amount;
    axios.get("https://moj-api.herokuapp.com/credits")
      .then(response => {
        var result = response.data.reduce(reducer, 0);
        console.log(result);
        this.setState({totalCredits:result});
      })
      .catch(err => console.log(err));
    axios.get("https://moj-api.herokuapp.com/debits")
      .then(response => {
        var result = response.data.reduce(reducer, 0);
        console.log(result);
        this.setState({totalDebits:result});
      })
      .catch(err => console.log(err));
  }

  //Lifecycle Methods
  componentDidMount(){
    this.fetchData();
    this.setState({
      accountBalance: this.state.totalCredits - this.state.totalDebits,
    });
  }
  render() {
    let mockLogIn = (logInInfo) => {
      const newUser = {...this.state.currentUser};
      newUser.userName = logInInfo.userName;
      this.setState({currentUser: newUser});
    }
    //Passing in components with props requires creating a const before passing
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={mockLogIn} {...this.props}/>);

    //And also using "render" instead of "component"
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
