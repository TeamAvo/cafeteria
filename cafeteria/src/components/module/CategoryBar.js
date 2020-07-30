import React from 'react'
import store from '../store.js'

class CategoryBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      today: true,
      thisWeek: false,
      selectedPeriod: false,
      vote: false
    }
  }

  resetBtn() {
    this.setState({
      today: false,
      thisWeek: false,
      selectedPeriod: false,
      vote: false
    })
  }

  render() {
    return (
      <>
        <div className='category'>
          <div
            className={`categoryitem ${
              this.state.today ? 'enable' : 'disable'
            }`}
            onClick={() => {
              this.resetBtn()
              this.setState({ today: true })
            }}>
            Today
          </div>
          <div
            className={`categoryitem ${
              this.state.thisWeek ? 'enable' : 'disable'
            }`}
            onClick={() => {
              this.resetBtn()
              this.setState({ thisWeek: true })
            }}>
            This Week
          </div>
          <div
            className={`categoryitem ${
              this.state.selectedPeriod ? 'enable' : 'disable'
            }`}
            onClick={() => {
              this.resetBtn()
              this.setState({ selectedPeriod: true })
            }}>
            Selected Period
          </div>
          <div
            className={`categoryitem ${this.state.vote ? 'enable' : 'disable'}`}
            onClick={() => {
              this.resetBtn()
              this.setState({ vote: true })
            }}>
            Vote
          </div>
        </div>
      </>
    )
  }
}

export default CategoryBar
