import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

class Info extends React.Component {
  render() {
    return (
      <>
        <div className='textbox'>
          <div className='subtitle'>Information</div>
          <br />
          <div className='textarea'>
            <div>
              <h1> ● About Avon Food</h1>
              <h2>Avon Food provides more than just meal information.</h2>
              <h3>
                With Avon Food, you can share your thoughts. You can vote for
                the quality of the meals, you can share your thoughts with other
                students, and you can give feedback to school faculties.
              </h3>
            </div>
            <br />
            <div>
              <h1> ● Privacy</h1>
              <h2>Privacy Policy for TeamAvo</h2>
              <h3>
                One of our main priorities is the privacy of our visitors. You
                can read more about how we handle the user inforamtion at{' '}
                <a
                  href='https://teamavo.github.io/PrivacyPolicy.html'
                  target='_top'>
                  here.
                </a>
              </h3>
            </div>
            <br />
            <div>
              <h1> ● Support</h1>
              <h2>Need help?</h2>
              <h3>
                Ask help to our Team Avo members or join our discord server!
              </h3>
              <h3>
                <ul>
                  <li>
                    HyunJun Park:
                    <a href='mailto:parkh@avonoldfarms.com' target='_top'>
                      parkh@avonoldfarms.com
                    </a>
                  </li>
                  <li>
                    Spencer Li:
                    <a href='mailto:lis@avonoldfarms.com' target='_top'>
                      parkh@avonoldfarms.com
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.gg/RkdFjM'>Discord</a>
                  </li>
                </ul>
              </h3>
            </div>
            <h5>Last update at 9/1/2020</h5>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  mealWeek: state.mealWeek
})
export default compose(connect(mapStateToProps, actions))(Info)
