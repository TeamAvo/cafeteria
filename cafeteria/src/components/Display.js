import React from 'react'
import Weekly from './module/Weekly.js'
import Meal from './module/Meal.js'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class Display extends React.Component {
  handleChange = (date) => {
    if (date != null) {
      this.props.setDate(date)
      this.props.setDayOfWeek(date.getDay())
      if (!this.props.status.callingAPI) {
        this.props.getWeekMeal(date)
      }
    }
  }

  render() {
    const category = this.props.status.category
    const weekly = (
      <>
        <div className='datebox color6'>
          Select Period
          <DatePicker
            className='datepicker'
            selected={this.props.status.date}
            onChange={this.handleChange}
          />
        </div>
        <Weekly />
        <Meal data={this.props.mealWeek} day={this.props.status.dayOfWeek} />
      </>
    )

    return <>{category === 0 ? weekly : ''}</>
  }
}
const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Display)
