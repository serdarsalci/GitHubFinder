import React, { Fragment, Component } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'

export class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.logi);
    this.props.getUserRepos(this.props.match.params.logi);

  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,

  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      follower,
      following,
      public_repos,
      public_gists,
      company,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable:{' '}
        {hireable ? (<i className="fas fa-check text-success" />) :
          (<i className="fas fa-times-circle text-danger" />)}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt=""
              className="round-img"
              alt=''
              style={{ width: '150px' }} />
            <h1>Location: {location}</h1>
          </div>
          <div>
            {bio && (<Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>)}
            <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username:</strong>{login}
                </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <strong>Website:</strong>{blog}
                </Fragment>}
              </li>

            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {follower}</div>
          <div className="badge badge-light">Following: {following}</div>
          <div className="badge badge-success">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gisys: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User
