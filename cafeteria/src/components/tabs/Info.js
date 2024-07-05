import React from 'react'

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
              <h3>
                Join {' '}
                <a href='https://discord.gg/t2hjWXg' target='_top'>
                  Team Avo Community Server (Discord)
                </a>
              </h3>
            </div>
            <br />
            <div>
              <h1> ● Update Log</h1>
              <h3> ○ 9/14/2020 Update</h3>
              <h4> Disable community section.</h4>
              <h3> ○ 9/9/2020 Update</h3>
              <h4> Security update.</h4>
              <h3> ○ 9/6/2020 Update</h3>
              <h4> Bug fixed.</h4>
              <h3> ○ 9/3/2020 Update</h3>
              <h4> Now you can use vote and community functions!</h4>
              <h3> ○ 9/1/2020 Update</h3>
              <h4> Initial upload on Google Play Store.</h4>
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
                  target='_blank'>
                  here.
                </a>
              </h3>
              <h3>
                Although we use{' '}
                <a href='https://en.wikipedia.org/wiki/MD5' target='_top'>
                  MD5
                </a>{' '}
                encryption while communicate with the server, please do not use
                your common password. For your security, we highly recommend you
                to use a different password for comment section.
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
                      lis@avonoldfarms.com
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.gg/vdpQ2ar'>Team Avo Support Server (Discord)</a>
                  </li>
                </ul>
              </h3>
            </div>
            <h5>Last update at 9/14/2020</h5>
            <h5>Application Version: v1.0.5</h5>
          </div>
        </div>
      </>
    )
  }
}

export default Info
