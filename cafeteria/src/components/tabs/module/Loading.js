import React from 'react'
import ReactLoading from 'react-loading'

class Loading extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className='loading'>
            <ReactLoading type='bars' width='100%' height='auto' />
          </div>
          <h4 className='center'>
            Using Chrome?
            <br />
            YOUR RAM IS MINE!
          </h4>
        </div>
      </>
    )
  }
}
export default Loading
