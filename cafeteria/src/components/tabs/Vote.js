import React from 'react'
import VoteInfo from './module/VoteInfo.js'
import Loading from './module/Loading.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import { GoogleLogin } from 'react-google-login'
import ReactStars from 'react-rating-stars-component'

//import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return new Date(date)
}

var rate = 2.5

class Vote extends React.Component {
  req() {
    const date1 = new Date().toDateString()
    const date2 = new Date().addDays(1).toDateString()
    return {
      date1: date1,
      date2: date2
    }
  }

  sendVote(rate) {
    var date = new Date()
    var mealType
    if (date.getHours() < 5) mealType = 2
    else if (date.getHours() < 11) mealType = 0
    else if (date.getHours() < 16) mealType = 1
    else mealType = 2

    const data = {
      time: date.toDateString(),
      meal: mealType,
      email: this.props.gData.data.profileObj.email,
      vote: rate
    }
    return data
  }

  ratingChanged(newRating) {
    rate = newRating
    console.log(rate)
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
        <ReactStars
          value={2.5}
          count={5}
          onChange={this.ratingChanged}
          size={50}
          isHalf={true}
          emptyIcon={<i className='far fa-star color1'></i>}
          halfIcon={<i className='fa fa-star-half-alt color1'></i>}
          fullIcon={<i className='fa fa-star color1'></i>}
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
