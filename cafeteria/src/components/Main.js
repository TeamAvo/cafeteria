import React from 'react'
import CategoryBar from './module/CategoryBar.js'
import Display from './Display.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class Main extends React.Component {
  render() {
    if (!this.props.status.callingAPI && !this.props.mealWeek.isLoaded) {
      this.props.getWeekMeal('2020/03/01')
    }
    return (
      <>
        <header>
          <div className='title'>Avo Food</div>
        </header>
        <CategoryBar />
        <Display />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Main)
