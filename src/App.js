import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert'
import NotFound from './components/pages/NotFound';
import SearchedItem from './components/users/SearchedItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import githubContext from './context/github/githubContext';
import AlertState from './context/alert/AlertState';
import AlertContext from './context/alert/alertContext';

const App = () => {

  const [alert, setAlert] = useState(null);

  const onMore = (e) => {
    e.preventDefault();
    console.log('oNMore clicked')
  }

  // show Alert i search is empty
  const unSetAlarm = () => {
    // this.setState({ alert: null });
    console.log('unSet Alarm called')
    setAlert(null);
  }

  const removeAlert = () => {
    setAlert(null);
  }

  // const { users, loading, user, repos } = this.state;
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className="container">
              <Alert unSetAlarm={unSetAlarm} alert={alert} />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;
