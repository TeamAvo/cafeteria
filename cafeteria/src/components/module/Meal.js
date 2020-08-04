import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

//https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/lunch/2020/03/01/

class Meal extends React.Component {
  render() {
    return (
      <>
        {this.props.day}
        {JSON.stringify(this.props.data)}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  day: state.day,
  date: state.date,
  mealDaily: state.mealDaily
})
export default compose(connect(mapStateToProps, actions))(Meal)
