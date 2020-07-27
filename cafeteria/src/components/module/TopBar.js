import React from 'react'

class TopBar extends React.Component {
  render() {
    return (
      <>
        <div className='topbox'>
          <div className='headeritem enable'>This Week</div>
          <div className='headeritem disable'>Selected Period</div>
          <div className='headeritem disable'>Vote</div>
        </div>
      </>
    )
  }
}

export default TopBar
