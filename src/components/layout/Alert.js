import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

export const Alert = ({ alert, unSetAlarm }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>{alert.msg}
        <i onClick={unSetAlarm} className='fa fa-times btn btn-danger text-right' />
      </div>
    )
  )
}

export default Alert;




// export class Alert extends Component {
//   static propTypes = {
//     alert: PropTypes.object.isRequired,
//     unSetAlarm: PropTypes.func.isRequired

//   }

//   render() {

//     return (
//       alert !== null && (
//         <div className={`alert alert-${this.props.alert.type}`}>
//           <i className="fas fa-info-circle"></i>{this.props.alert.msg}
//           <i onClick={this.props.unSetAlarm} className='fa fa-times btn btn-danger text-right' />
//         </div>
//       )
//     )
//   }
// }

// export default Alert


