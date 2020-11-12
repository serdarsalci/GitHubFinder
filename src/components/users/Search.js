import React, { useState, useContext } from 'react'
import propTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, clearUsers } = githubContext;

  const [text, setText] = useState('');
  const [searched, setSeached] = useState('');
  const [alert, setAlrt] = useState({ alert: null });
  const [submitted, setSubmitted] = useState(true);
  const [abc, setABC] = useState('abc is set by useState');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alertContext.setAlert('Please enter something setAlert', 'light');
      console.log(alert)
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChan = (e) => {
    setText(e.target.value);
    alertContext.unSetAlert();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text"
          name="text" placeholder="Search Users"
          value={text}
          onChange={onChan} />
        <input type="submit" value="Search"
          className="btn btn-dark btn-block" />
      </form>
      {users.length > 0 && (<button
        className="btn btn-light btn-block"
        onClick={clearUsers}>Clear
      </button>
      )}
    </div>
  )
}

Search.propTypes = {

  clearUsers: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,

  unSetAlarm: propTypes.func.isRequired,
}

export default Search
