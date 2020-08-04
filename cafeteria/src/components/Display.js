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
          <Meal data={this.props.mealDaily} day={this.props.day} />
        ) : (
          ''
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  day: state.day,
  category: state.category,
  mealDaily: state.mealDaily
})
export default compose(connect(mapStateToProps, actions))(Display)
