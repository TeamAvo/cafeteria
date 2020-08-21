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
            day === this.props.index
              ? `color${this.props.index + 1}`
              : `disable`
          }`}
          onClick={() => {
            this.props.setDayOfWeek(this.props.index)
          }}>
          {this.props.text}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  day: state.status.dayOfWeek
})
export default compose(connect(mapStateToProps, actions))(Day)
