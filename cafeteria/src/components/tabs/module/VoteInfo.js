import React from 'react'

class VoteInfo extends React.Component {
  render() {
    var time = this.props.data.time
    var date = `${time.year}/${time.month}/${time.day}`
    return (
      <>
        <div className='voteinfo color5'>
          <h3>
            Date: {date}
            <br />
            Meal: {time.meal}
            <br />
            Vote: {this.props.data.vote}
          </h3>
        </div>
      </>
    )
  }
}

export default VoteInfo
