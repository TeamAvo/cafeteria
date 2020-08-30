import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

var md5 = require('md5')

class Comment extends React.Component {
  sendComment() {
    var date = new Date()
    var name = 'admin'
    var email = 'admin@test.com'
    var pw = md5('1234')
    var mealType = 'Breakfast'
    var like = true
    var comment = '12345678910'

    const data = {
      date: date.toDateString(),
      name: name,
      email: email,
      pw: pw,
      meal_type: mealType,
      like: like,
      comment: comment
    }
    return data
  }

  deleteComment() {
    var _id = '5f4bdaf002c9182a54bb1a66'
    var pw = md5('1234')

    const data = {
      _id: _id,
      pw: pw
    }
    return data
  }

  render() {
    return (
      <>
        <div className='textbox'>
          <h1>Comment</h1>
          <h2>This section is under development.</h2>
          <div
            className='categoryitem enable'
            onClick={() => {
              //this.props.postComment(this.sendComment())
            }}>
            Submit
          </div>

          <div
            className='categoryitem enable'
            onClick={() => {
              //this.props.deleteComment(this.deleteComment())
            }}>
            Delete
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Comment)
