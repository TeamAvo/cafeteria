import React from 'react'
import Loading from './Loading.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'

import Item from './Item.js'

class Meal extends React.Component {
  render() {
    const d = this.props.mealWeek
    if (!this.props.status.callingAPI && d.isLoaded) {
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
      return <Loading />
    }
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  dayOfWeek: state.status.dayOfWeek,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Meal)

/*
<h4 className='center'>
  *Since we are using a random keyword image search API, some of the
  images might not display properly.
</h4>
*/