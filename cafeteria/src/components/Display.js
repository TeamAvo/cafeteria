import React from 'react'
import Weekly from './module/Weekly.js'
import Meal from './module/Meal.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class Display extends React.Component {
  render() {
    const category = this.props.category
    return (
      <>
        {category === 0 ? <Weekly /> : ''}
        {category === 0 ? (
          <Meal data={this.props.mealWeek} day={this.props.dayOfWeek} />
        ) : (
          ''
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  dayOfWeek: state.status.dayOfWeek,
  category: state.status.category,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Display)
