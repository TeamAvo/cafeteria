import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class CategoryBar extends React.Component {
  btn = this.props.category

  render() {
    const btn = this.props.category
    return (
      <>
        <div className='category'>
          <div
            className={`categoryitem ${btn === 0 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(0)
              console.log(btn)
            }}>
            Today
          </div>
          <div
            className={`categoryitem ${btn === 1 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(1)
            }}>
            This Week
          </div>
          <div
            className={`categoryitem ${btn === 2 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(2)
            }}>
            Selected Period
          </div>
          <div
            className={`categoryitem ${btn === 3 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(3)
            }}>
            Vote
          </div>
          <div
            className={`categoryitem ${btn === 4 ? 'enable' : 'disable'}`}
            onClick={() => {
              this.props.setCategory(4)
            }}>
            info
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  category: state.category
})
export default compose(connect(mapStateToProps, actions))(CategoryBar)
