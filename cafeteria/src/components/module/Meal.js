import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import Item from './Item.js'

//https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/lunch/2020/03/01/

class Meal extends React.Component {
  render() {
    const d = this.props.data
    if (this.props.status.weekLoaded) {
      const breakfast = d.breakfast.data.days[this.props.dayOfWeek]
      const lunch = d.lunch.data.days[this.props.dayOfWeek]
      const dinner = d.dinner.data.days[this.props.dayOfWeek]
      return (
        <div className='center'>
          <div className='meal'>
            <Item
              data={breakfast.menu_items}
              title='Breakfast'
              color='color1'
            />
            <Item data={lunch.menu_items} title='Lunch' color='color2' />
            <Item data={dinner.menu_items} title='Dinner' color='color3' />
          </div>
        </div>
      )
    } else {
      return <>loading data...</>
    }
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  dayOfWeek: state.status.dayOfWeek
})
export default compose(connect(mapStateToProps, actions))(Meal)
