import React from 'react'
import VoteInfo from './module/VoteInfo.js'
import Loading from './module/Loading.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import { GoogleLogin } from 'react-google-login'
import ReactStars from 'react-rating-stars-component'

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return new Date(date)
}

var rate = 2.5

class Vote extends React.Component {
  sendVote(rate) {
    var date = new Date()
    var mealType
    if (date.getHours() < 11) mealType = 0
    else if (date.getHours() < 17) mealType = 1
    else mealType = 2

    const data = {
      time: date.toDateString(),
      meal: mealType,
      email: this.props.gData.data.profileObj.email,
      vote: rate
    }
    return data
  }

  getMealType() {
    var date = new Date()
    if (date.getHours() < 11) return 'Breakfast'
    else if (date.getHours() < 17) return 'Lunch'
    else return 'Dinner'
  }

  ratingChanged(newRating) {
    rate = newRating
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
      this.props.getVote(new Date())
    }

    var loginText
    var meal = this.getMealType()
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
