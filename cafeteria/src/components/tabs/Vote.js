import React from 'react'
import * as func from '../Functions.js'
import VoteInfo from './module/VoteInfo.js'
import Loading from './module/Loading.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import { GoogleLogin, GoogleLogout } from 'react-google-login'
import ReactStars from 'react-rating-stars-component'

var rate = 2.5
class Vote extends React.Component {
  sendVote(rate) {
    const data = {
      time: func.getEST(),
      meal: func.getMealType(),
      email: this.props.gData.data.profileObj.email,
      vote: rate
    }
    return data
  }

  render() {
    var items
    if (this.props.status.voteInfo.isLoaded) {
      items = []
      const voteData = this.props.status.voteInfo.info.data
      for (var i = 0; i < voteData.length; i++) {
        console.log(voteData[i])
        items.push(<VoteInfo data={voteData[i]} key={i} />)
      }
    } else {
      items = <Loading />
      this.props.getVote(func.getEST())
    }

    var loginText
    var meal = func.getMealName(func.getMealType())
    if (this.props.gData.isAOF) {
      loginText = (
        <h2>
          Hi, {this.props.gData.data.profileObj.name}! How was {meal} at Avon
          today?
        </h2>
      )
    } else {
      loginText = (
        <h3>
          It seems like you are not logged in with AOF Google account.
          <br />
          Please login with the AOF account to vote for your meal today.
          <br />
          test
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

    const googleLogout = (
      <GoogleLogout
        clientId={this.props.gData.id}
        buttonText='Logout'
        theme='dark'
        onLogoutSuccess={this.props.googleLogout}
      />
    )

    const voteBtn = (
      <>
        <ReactStars
          value={2.5}
          count={5}
          onChange={(r) => {
            rate = r
          }}
          size={50}
          isHalf={true}
          emptyIcon={<i className='far fa-star color1'></i>}
          halfIcon={<i className='fa fa-star-half-alt color1'></i>}
          fullIcon={<i className='fa fa-star color1'></i>}
          color='#303030'
          activeColor='#fff'
        />
        <div
          className='categoryitem enable'
          onClick={() => {
            this.props.postVote(this.sendVote(rate))
          }}>
          Submit
        </div>
      </>
    )

    return (
      <>
        <div className='textbox'>
          <div className='subtitle'>Vote</div>
          <h1>How was the meal today?</h1>
          {loginText}
          {this.props.gData.isAOF ? googleLogout : googleLogin}
          {this.props.gData.isAOF ? voteBtn : ''}
          <div
            className='categoryitem enable'
            onClick={() => {
              this.props.getVote(func.getEST())
            }}>
            Reload Vote
          </div>
          <h1>
            <br />
            Today's vote result 🗳️
            <div>{items}</div>
          </h1>
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
export default compose(connect(mapStateToProps, actions))(Vote)
