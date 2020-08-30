import React from 'react'

class VoteInfo extends React.Component {
  render() {
    const data = this.props.data

    var mealType
    switch (data.time.meal) {
      case 0:
        mealType = 'Breakfast'
        break
      case 1:
        mealType = 'Lunch'
        break
      case 2:
        mealType = 'Dinner'
        break
      default:
        mealType = data.time.meal
    }

    return (
      <>
        <div className='voteinfo color5'>
          <h3>
            Date: {new Date(data.time.date).toDateString()}
            <br />
            Meal: {mealType}
            <br />
            Rate: {Math.round(data.vote / data.total)}
            <br />
            Total Votes: {data.total}
          </h3>
        </div>
      </>
    )
  }
}

export default VoteInfo
