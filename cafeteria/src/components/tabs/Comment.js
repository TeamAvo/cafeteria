import React from 'react'
import CommentBox from './module/CommentBox.js'
import Loading from './module/Loading.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

var md5 = require('md5')

class Comment extends React.Component {
  sendComment() {
    var date = new Date()
    var name = 'admin'
    var email = 'test2@test.com'
    var pw = md5('1234')
    var mealType = 'Lunch'
    var menu = 'apple'
    var like = true
    var comment = 'Hi there! this is a test!'

    const data = {
      date: date.toDateString(),
      name: name,
      email: email,
      pw: pw,
      meal_type: mealType,
      menu: menu,
      like: like,
      comment: comment
    }
    return data
  }

  deleteComment() {
    var _id = ''
    var pw = md5('1234')

    const data = {
      _id: _id,
      pw: pw
    }
    return data
  }

  render() {
    var items
    if (this.props.status.commentData.isLoaded) {
      items = []
      const comment = this.props.status.commentData.data.data
      for (var i = 0; i < comment.length; i++) {
        console.log(comment[i])
        items.push(<CommentBox data={comment[i]} key={i} />)
      }
    } else {
      items = <Loading />
      this.props.getComment({ date: new Date() })
    }
    return (
      <>
        <div className='textbox'>
          <h1>Comment</h1>
          <h2>This section is under development.</h2>
          {items}
          <div
            className='categoryitem enable'
            onClick={() => {
              this.props.postComment(this.sendComment())
            }}>
            Submit
          </div>

          <div
            className='categoryitem enable'
            onClick={() => {
              this.props.deleteComment(this.deleteComment())
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
