import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
    submitted: false,
    searched: '',
    //my code
    alert: null
  }

  componentDidMount() {
    this.setState({ searched: this.state.text });
    console.log('search mounted');
  }

  unSetAlarm = () => {
    this.props.unSetAlarm();
  }

  static propTypes = {
    searchUsersProp: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
    unSetAlarm: propTypes.func.isRequired,
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: this.state.text.trimEnd().trimStart() })
    // console.log(this.state.text.trimEnd().trimStart())
    // console.log(this.state.text)
    if (this.state.text === '') {
      this.setState({ alert: { msg: 'Please enter something', type: 'dark' } })
      this.props.setAlert('Please enter something', 'light');
      // console.log(this.state.alert.msg.value)
      // this.props.setAlert(this.state.alert);
    } else {
      this.props.searchUsersProp(this.state.text);
      this.setState({ searched: this.state.text });
      this.setState({ text: '' });
    }
  };




  onChan = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // this.setState({ searched: this.state.text });
    this.props.setAlert(null);
    this.unSetAlarm();
    console.log('search unSetAlartCallled')
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text"
            name="text" placeholder="Search Users"
            value={this.state.text}
            onChange={this.onChan} />
          <input type="submit" value="Search"
            className="btn btn-dark btn-block" />
        </form>
        {showClear && <button
          className="btn btn-light btn-block"
          onClick={clearUsers}>Clear
        </button>}

      </div>
    )
  }
}

export default Search
