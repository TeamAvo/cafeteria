import React from 'react'
import PostComment from './module/PostComment.js'
import CommentBox from './module/CommentBox.js'
import Loading from './module/Loading.js'

import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class Comment extends React.Component {
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

    var loginText
    if (this.props.gData.isAOF) {
      loginText = (
        <h2>
          Hi, {this.props.gData.data.profileObj.name}! Please share your
          thoughts with us!
        </h2>
      )
    } else {
      loginText = (
        <h3>
          Share your thoughts with other students and faculties!
          <br />
          You can use this function to give back them feedback.
          <br /> <br />
          It seems like you are not logged in with AOF Google account.
          <br />
          Please login with the AOF account to leave your comment.
        </h3>
      )
    }

    const googleLogin = (
      <GoogleLogin
        clientId={this.props.gData.id}
        buttonText={this.props.gData.text}
        onSuccess={this.props.getGoogleID}
        onFailure={this.props.getGoogleID}
        cookiePolicy={this.props.gData.cookiePolicy}
        isSignedIn={true}
        theme='dark'
        uxMode='redirect'
      />
    )

    return (
      <>
        <div className='textbox'>
          <div className='subtitle'>Comment</div>
          {loginText}
          {this.props.gData.isAOF ? '' : googleLogin}
          <br />
          <div className='comment'>
            {this.props.gData.isAOF ? <PostComment /> : ''}
            {items}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek,
  gData: state.googleData
})
export default compose(connect(mapStateToProps, actions))(Comment)
