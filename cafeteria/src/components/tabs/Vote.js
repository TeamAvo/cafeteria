import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import { GoogleLogin } from 'react-google-login'

const send = {
  time: {
    year: 2020,
    month: 1,
    day: 1,
    meal: 0
  },
  email: 'tesasdt@avonoldfarms.com',
  vote: true
}

const req = { y1: 2019, y2: 2021, m1: 0, m2: 11, d1: 0, d2: 30 }

const responseGoogle = (response) => {
  console.log(response)
}

class Vote extends React.Component {
  render() {
    return (
      <>
        <h1>How was meal?</h1>
        <h2>
          To vote, you should login with your Avon Old Farms School's Google
          account.
        </h2>
        <GoogleLogin
          clientId='340618285609-r6colaj22eh4tn822j4723t8bolhsobb.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <button
          onClick={() => {
            this.props.postVote(send)
          }}>
          asd
        </button>
        <button
          onClick={() => {
            this.props.getVote(req)
          }}>
          asd
        </button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Vote)
