import React from 'react'
import CategoryBar from './module/CategoryBar.js'
import Display from './Display.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class Main extends React.Component {
  //https://bashooka.com/inspiration/music-video-player-ui-designs/
  //https://www.npmjs.com/package/react-player

  render() {
    if (!this.props.status.weekLoaded) {
      this.props.getWeekMeal('2020/03/01')
    }
    return (
      <>
        <header>
          <div className='title'>Avo Food</div>
        </header>
        <body>
          <CategoryBar />
          <Display />
        </body>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Main)
