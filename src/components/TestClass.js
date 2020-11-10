import React, { Component } from 'react';

class TestClass extends Component {
  render() {
    return (
      <div>

        <div>
          <h2>TestClass</h2>
        </div>
        { this.props.alert !== null && (
          <div className={`alert alert-${this.props.alert.type}`}>
            <i className="fas fa-info-circle"></i>{this.props.alert.msg}
            <i onClick={this.props.unSetAlarm} className='fa fa-times btn btn-danger text-right' />
          </div>)}
      </div>
    )

  }
}

export default TestClass;