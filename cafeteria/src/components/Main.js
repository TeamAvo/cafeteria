import React from 'react'
import Header from './module/Header.js'
import TopBar from './module/TopBar.js'
import Weekly from './module/Weekly.js'

class Main extends React.Component {
  //https://bashooka.com/inspiration/music-video-player-ui-designs/
  //https://www.npmjs.com/package/react-player

  render() {
    return (
      <>
        <Header />
        <body>
          <TopBar />
          <Weekly />
        </body>
      </>
    )
  }
}

export default Main
