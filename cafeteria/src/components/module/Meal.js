import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import Item from './Item.js'

//https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/lunch/2020/03/01/

class Meal extends React.Component {
  render() {
    const j = this.props.data
    if (j.loaded) {
      const data = j.data.data
      const day = data.days[this.props.day]
      return (
        <>
          <Item data={day.menu_items} />
        </>
      )
    } else {
      return <>loading data...</>
    }
  }
}

const mapStateToProps = (state) => ({
  day: state.day,
  date: state.date
})
export default compose(connect(mapStateToProps, actions))(Meal)
