import React from 'react'
import CategoryBar from './CategoryBar.js'
import Weekly from './tabs/Weekly.js'
import Vote from './tabs/Vote.js'
import Info from './tabs/Info.js'
import Comment from './tabs/Comment.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class Main extends React.Component {
  render() {
    const category = this.props.status.category
    if (!this.props.status.callingAPI && !this.props.mealWeek.isLoaded) {
      this.props.getWeekMeal('2020/03/01')
    }
    return (
      <>
        <header>
          <div className='title'>Avon Food</div>
        </header>
        <CategoryBar />
        <div>
          {category === 0 ? <Weekly /> : ''}
          {category === 1 ? <Vote /> : ''}
          {category === 2 ? <Comment /> : ''}
          {category === 3 ? <Info /> : ''}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Main)
