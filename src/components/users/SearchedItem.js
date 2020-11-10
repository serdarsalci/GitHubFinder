import React from 'react';
import PropTypes from 'prop-types';


const SearchedItem = ({ searched, clearUsers }) => {

  return (
    searched !== '' && (
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
