import React from 'react'

class Day extends React.Component {
  render() {
    return (
      <>
        <div className={`day ${this.props.color}`}>{this.props.day}</div>
      </>
    )
  }
}

export default Day
