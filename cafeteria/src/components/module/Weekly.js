import React from 'react'
import Day from './Day.js'

class Weekly extends React.Component {
  render() {
    return (
      <>
        <div className='weeklybox'>
          <Day text='Sun' index={1} />
          <Day text='Mon' index={2} />
          <Day text='Tue' index={3} />
          <Day text='Wed' index={4} />
          <Day text='Thu' index={5} />
          <Day text='Fri' index={6} />
          <Day text='Sat' index={7} />
        </div>
      </>
    )
  }
}
export default Weekly
