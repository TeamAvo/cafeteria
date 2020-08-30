import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class Info extends React.Component {
  render() {
    return (
      <>
        <div className='textbox'>
          <h1>Info</h1>
          <h2>
            The official application is pending approval from Google Play Store!
            Coming soon!
          </h2>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Info)
