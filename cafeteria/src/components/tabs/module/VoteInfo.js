import React from 'react'
import ReactStars from 'react-rating-stars-component'
import * as func from '../../Functions.js'

class VoteInfo extends React.Component {
  render() {
    const data = this.props.data

    var mealType = func.getMealName(data.meal)

    return (
      <>
        <div className='voteinfo color5'>
          <h3>
            {new Date(data.date).toDateString()}, {mealType}
            <ReactStars
              value={data.rate / data.total}
              count={5}
              size={50}
              isHalf={true}
              emptyIcon={<i className='far fa-star color1'></i>}
              halfIcon={<i className='fa fa-star-half-alt color1'></i>}
              fullIcon={<i className='fa fa-star color1'></i>}
              activeColor='#fff'
              color='#303030'
              classNames='no-click'
            />
            <h4>
              Rate: {(data.rate / data.total).toFixed(2)} (Total: {data.total})
            </h4>
          </h3>
        </div>
      </>
    )
  }
}

export default VoteInfo
