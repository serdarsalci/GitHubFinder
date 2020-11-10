import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import SearchedItem from './components/users/SearchedItem';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import propTypes from 'prop-types';
import TestClass from './components/TestClass';

class App extends Component {
  state = {
    users: [],
    loading: false,
    searchedItem: '',
    alert: null,
    user: {},
    repos: []
  }
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)

  //   // axios.get('https://api.github.com/users')
  //   //   .then(res => console.log(res.data))
  //   // Above code refactored
  //   const res = await axios.get(`https://api.github.com/users?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(res.data)
  //   this.setState({ users: res.data, loading: false });
  // }
  // Search Github user
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data)
    this.setState({ users: res.data.items, loading: false, searchedItem: text });
    // this.setState({ searchedItem: text })
  }

  //Get a single github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false });
  }

  // Get User repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false });
  }



  //Clear users from the this.state.
  clearUsers = () => this.setState({ users: [], loading: false, searchedItem: '' })

  onMore = (e) => {
    e.preventDefault();
    console.log('oNMore clicked')
  }

  // show Alert i search is empty
  setAlert = (msg, type) => {
    console.log('setAlert called')
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000)
  };

  unSetAlarm = () => {
    this.setState({ alert: null });
    console.log('unSet Alarm called')
  }
  // removeAlert = () => this.setState({ alert: null })

  render() {

    const { users, loading, user, repos } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className="container">
            <Alert unSetAlarm={this.unSetAlarm} alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsersProp={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                    unSetAlarm={this.unSetAlarm} />
                  <SearchedItem clearUsers={this.clearUsers} searched={this.state.searchedItem} />
                  <Users onMore={this.onMore} loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:logi' render={
                props => (
                  <User {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user} loading={loading} repos={repos} />)
              } />
            </Switch>

            {/* <Test clear={this.clearUsers} /> */}
            {/* <TestClass unSetAlarm={this.unSetAlarm} alert={this.state.alert} /> */}

            {/* <SearchedItem searched={this.searched}></SearchedItem> */}

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
