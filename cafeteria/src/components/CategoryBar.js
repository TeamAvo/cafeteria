import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class CategoryBar extends React.Component {
  render() {
    const btn = this.props.category
    return (
      <>
        <div className='category'>
          <div
            className={`categoryitem ${btn === 0 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(0)
            }}>
            Meal
          </div>
          <div
            className={`categoryitem ${btn === 1 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(1)
            }}>
            Vote
          </div>
          <div
            className={`categoryitem ${btn === 2 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(2)
            }}>
            Information
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  category: state.status.category
})
export default compose(connect(mapStateToProps, actions))(CategoryBar)
