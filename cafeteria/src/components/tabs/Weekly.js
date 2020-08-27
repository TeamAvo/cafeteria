import React from 'react'
import Day from './module/Day.js'
import Meal from './module/Meal.js'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

const ExampleCustomInput = ({ value, onClick }) => (
  <div className='datepicker color6' onClick={onClick}>
    Select Period <br />
    {value}
  </div>
)

class Weekly extends React.Component {
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
    return (
      <>
        <div className='datebox'>
          <DatePicker
            selected={this.props.status.date}
            onChange={this.handleChange}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <div className='weeklybox'>
          <Day text='Sun' index={0} />
          <Day text='Mon' index={1} />
          <Day text='Tue' index={2} />
          <Day text='Wed' index={3} />
          <Day text='Thu' index={4} />
          <Day text='Fri' index={5} />
          <Day text='Sat' index={6} />
        </div>
        <Meal />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status
})
export default compose(connect(mapStateToProps, actions))(Weekly)
