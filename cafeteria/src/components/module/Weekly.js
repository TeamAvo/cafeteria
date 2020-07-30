import React from 'react'
import Day from './Day.js'

class Weekly extends React.Component {
  render() {
    return (
      <>
        <div className='weeklybox'>
          <Day day='Sun' color='color1' />
          <Day day='Mon' color='disable' />
          <Day day='Tue' color='color3' />
          <Day day='Wed' color='color4' />
          <Day day='Thu' color='color5' />
          <Day day='Fri' color='color6' />
          <Day day='Sat' color='color7' />
        </div>
      </>
    )
  }
}

export default Weekly
