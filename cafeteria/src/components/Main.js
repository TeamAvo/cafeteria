import React from 'react'
import CategoryBar from './module/CategoryBar.js'
import Weekly from './module/Weekly.js'

class Main extends React.Component {
  //https://bashooka.com/inspiration/music-video-player-ui-designs/
  //https://www.npmjs.com/package/react-player

  render() {
    return (
      <>
        <header>
          <div className='title'>Avo Food</div>
        </header>
        <body>
          <CategoryBar />
          <Weekly />
        </body>
      </>
    )
  }
}

export default Main
