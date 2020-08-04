import React from 'react'
import Day from './Day.js'

class Weekly extends React.Component {
  render() {
    return (
      <>
        <div className='weeklybox'>
          <Day text='Sun' index={0} />
          <Day text='Mon' index={1} />
          <Day text='Tue' index={2} />
          <Day text='Wed' index={3} />
          <Day text='Thu' index={4} />
          <Day text='Fri' index={5} />
          <Day text='Sat' index={6} />
        </div>
      </>
    )
  }
}
export default Weekly
