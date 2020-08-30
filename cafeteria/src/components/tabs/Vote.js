import React from 'react'
import VoteInfo from './module/VoteInfo.js'
import Loading from './module/Loading.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import { GoogleLogin } from 'react-google-login'

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

class Vote extends React.Component {
  req() {
    const date = new Date(this.props.status.dateEST)
    const date1 = new Date(date.toDateString())
    const date2 = new Date(date.addDays(1).toDateString())
    console.log(date)
    return {
      date1: date1,
      date2: date2
    }
  }

  sendVote(rate) {
    var date = new Date(this.props.status.dateEST)
    var mealType
    if (date.getHours() < 5) mealType = 2
    else if (date.getHours() < 11) mealType = 0
    else if (date.getHours() < 16) mealType = 1

    const data = {
      time: date,
      meal: mealType,
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
      this.props.getVote(this.req())
    }

    var loginText
    if (this.props.gData.isAOF) {
      loginText = (
        <h2>
          Hi, {this.props.gData.data.profileObj.name}! How was food at Avon
          today?
        </h2>
      )
    } else {
      loginText = (
        <h3>
          It seems like you are not logged in with AOF Google account.
          <br />
          Please login with the AOF account to vote for your meal today.
        </h3>
      )
    }

    const googleLogin = (
      <GoogleLogin
        clientId='340618285609-r6colaj22eh4tn822j4723t8bolhsobb.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={this.props.getGoogleID}
        onFailure={this.props.getGoogleID}
        cookiePolicy={'single_host_origin'}
      />
    )

    const voteBtn = (
      <>
        <FontAwesomeIcon
          icon={faThumbsUp}
          size='2x'
          onClick={() => {
            this.props.postVote(this.sendVote(0))
            this.props.setVote(false)
          }}
        />

        <FontAwesomeIcon
          icon={faThumbsUp}
          size='2x'
          onClick={() => {
            this.props.postVote(this.sendVote(1))
            this.props.setVote(false)
          }}
        />

        <FontAwesomeIcon
          icon={faThumbsUp}
          size='2x'
          onClick={() => {
            this.props.postVote(this.sendVote(2))
            this.props.setVote(false)
          }}
        />

        <FontAwesomeIcon
          icon={faThumbsUp}
          size='2x'
          onClick={() => {
            this.props.postVote(this.sendVote(3))
            this.props.setVote(false)
          }}
        />

        <FontAwesomeIcon
          icon={faThumbsUp}
          size='2x'
          onClick={() => {
            this.props.postVote(this.sendVote(4))
            this.props.setVote(false)
          }}
        />

        <FontAwesomeIcon
          icon={faThumbsUp}
          size='2x'
          onClick={() => {
            this.props.postVote(this.sendVote(5))
            this.props.setVote(false)
          }}
        />
      </>
    )

    return (
      <>
        <div className='textbox'>
          <h1>How was the meal today?</h1>
          {loginText}
          {this.props.gData.isAOF ? voteBtn : googleLogin}

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
