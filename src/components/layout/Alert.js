import React from 'react'
import { Component, useContext } from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alert/alertContext'

export const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { alert, unSetAlert } = alertContext;

  return (

    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>{alert.msg}
        <i onClick={unSetAlert} className='fa fa-times btn btn-danger text-right' />
      </div>
    )

  )
}

export default Alert;
