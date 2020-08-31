import React from 'react'

import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CommentBox extends React.Component {
  render() {
    return (
      <>
        <div className='commentbox'>
          <div className='userinfo color8'>
            {this.props.data.name} ({this.props.data.email})
          </div>
          <div className='text'>
            <h5>
              {this.props.data.like}
              <br />
              {this.props.data.meal_type}, {this.props.data.menu}
            </h5>
            <h4>{this.props.data.comment}</h4>
          </div>
          <div className='statusbox'>
            <div className='timebox color5'> {this.props.data.date} </div>
            <div className='sectionbox color6'></div>
          </div>
        </div>
      </>
    )
  }
}

export default CommentBox
