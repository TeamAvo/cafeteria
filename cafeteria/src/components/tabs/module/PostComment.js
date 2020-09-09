import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'
import * as func from '../../Functions.js'

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var menu = null
var password = null
var comment = null
var md5 = require('md5')
class PostComment extends React.Component {
  sendComment() {
    if (
      menu == null ||
      password == null ||
      comment == null ||
      this.props.status.commentUpVote == null
    ) {
      alert('One of the fields does not meet the requirements.')
      return null
    }
    const data = {
      date: func.getEST(),
      name: this.props.gData.data.profileObj.name,
      email: this.props.gData.data.profileObj.email,
      pw: md5(password),
      meal: func.getMealType(),
      menu: menu,
      like: this.props.status.commentUpVote,
      comment: comment
    }
    return data
  }

  render() {
    const v = this.props.status.commentUpVote
    const like = (
      <FontAwesomeIcon
        icon={faThumbsUp}
        size='2x'
        onClick={() => {
          this.props.setCommentVote(true)
        }}
        color={v == null ? '#f650a0' : v ? '#64e8de' : '#505050'}
      />
    )
    const dislike = (
      <FontAwesomeIcon
        icon={faThumbsDown}
        size='2x'
        onClick={() => {
          this.props.setCommentVote(false)
        }}
        color={v == null ? '#f650a0' : v ? '#505050' : '#64e8de'}
      />
    )

    return (
      <>
        <div className='postbox'>
          <div className='userinfo color8'>
            {this.props.gData.data.profileObj.name} (
            {this.props.gData.data.profileObj.email})
          </div>
          <form className='textbox'>
            <h4>
              Like / Dislike: {like} {dislike}
            </h4>
            <h4>
              Menu:
              <input
                type='text'
                className='textarea menu'
                minLength='3'
                maxLength='35'
                placeholder="Today's Menu"
                onChange={(e) => {
                  menu = e.target.value
                }}
              />
            </h4>
            <h4>Comment:</h4>
            <textarea
              className='textarea'
              minLength='10'
              maxLength='500'
              placeholder='Share your thoughts with friends and give feedback to faculties!'
              onChange={(e) => {
                comment = e.target.value
              }}
            />
            <h5 className='center'>
              Minimum of 10 characters up to 500 characters allowed.
              <br />
              Please respect others, inappropriate comments can be removed.
            </h5>
            <div className='statusbox'>
              <input
                className='pw'
                type='password'
                placeholder='Password'
                minLength='3'
                onChange={(e) => {
                  password = e.target.value
                }}
              />
              <button
                type='button'
                className='submit color6'
                onClick={() => {
                  this.props.postComment(this.sendComment())
                }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  gData: state.googleData
})
export default compose(connect(mapStateToProps, actions))(PostComment)
