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
import Badmouse from 'bad-words'
import * as func from '../../Functions.js'

var password = null
var md5 = require('md5')
var filter = new Badmouse()
class CommentBox extends React.Component {
  deleteComment() {
    if (!this.props.gData.isAOF && this.props.gData.data != null) {
      alert("To delete the comment, you should log in first.")
      return null
    }
    if (password == null) {
      alert("Please enter the password")
      return null
    }

    var pw = md5(password)
    const data = {
      id: this.props.data._id,
      email: this.props.gData.data.profileObj.email,
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
          <div className='textbox'>
            <h4>{filter.clean(this.props.data.comment)}</h4>
          </div>
          <div className='statusbox'>
            <div className='timebox color5'>
              {`${this.props.data.date.split('T')[0]}, ${func.getMealName(this.props.data.meal)
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
                  /*this.props.deleteComment(this.deleteComment())*/
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
  status: state.status,
  gData: state.googleData
})
export default compose(connect(mapStateToProps, actions))(CommentBox)
