import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'

import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var password
var md5 = require('md5')
class CommentBox extends React.Component {
  deleteComment() {
    var pw = md5(password)
    const data = {
      _id: this.props.data._id,
      pw: pw
    }
    return data
  }

  render() {
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const dislike = <FontAwesomeIcon icon={faThumbsDown} />
    const trash = <FontAwesomeIcon icon={faTrashAlt} className='ico' />
    return (
      <>
        <div className='commentbox'>
          <div className='userinfo color8'>
            {this.props.data.name} ({this.props.data.email})
          </div>
          <div className='text'>
            <h4>{this.props.data.comment}</h4>
          </div>
          <div className='statusbox'>
            <div className='timebox color5'>
              {`${this.props.data.date.split('T')[0]}, ${
                this.props.data.meal_type
              }, ${this.props.data.menu} `}
              {this.props.data.like ? like : dislike}
            </div>
            <div className='sectionbox color6'>
              {trash}
              <input
                className='pw'
                type='password'
                placeholder='Password'
                onChange={(e) => {
                  password = e.target.value
                }}
              />
              <div
                className='deletebtn'
                onClick={() => {
                  this.props.deleteComment(this.deleteComment())
                }}>
                Delete
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status
})
export default compose(connect(mapStateToProps, actions))(CommentBox)
