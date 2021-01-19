import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'


const SearchedItem = () => {

  const githubContext = useContext(GithubContext);

  const { searched, clearUsers } = githubContext;


  return (
    githubContext.users.length > 0 && (
      <div className="" style={style1}>
        Search results for <span style={useStyle}>{searched}</span>
        <button onClick={clearUsers} className="btn btn-danger text-right">Clear</button>
      </div>
    )
  )
};

const useStyle = {
  fontWeight: 'bolder',
  fontStyle: 'italic'
  // fontSize: 22,
};

const style1 = {
  marginTop: '10px'
}

SearchedItem.propTypes = {
  searched: PropTypes.string.isRequired
}

export default SearchedItem
