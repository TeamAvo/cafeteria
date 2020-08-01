import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class Day extends React.Component {
  render() {
    const day = this.props.day
    return (
      <>
        <div
          className={`day ${
            day === this.props.index ? `color${this.props.index}` : `disable`
          }`}
          onClick={() => {
            this.props.setDay(this.props.index)
          }}>
          {this.props.text}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  day: state.day
})
export default compose(connect(mapStateToProps, actions))(Day)
