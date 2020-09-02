import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../reducers/actions'

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var password
var md5 = require('md5')

class PostComment extends React.Component {
  render() {
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const dislike = <FontAwesomeIcon icon={faThumbsDown} />
    return (
      <>
        <div className='postbox'>
          <div className='userinfo color8'>
            {/*this.props.gData.data.profileObj.name*/ 'test name'} (
            {/*this.props.gData.data.profileObj.email*/ 'test email'})
          </div>
          <div className='text'>
            <h4>text</h4>
          </div>
          <div className='statusbox'></div>
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
