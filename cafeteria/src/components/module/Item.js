import React from 'react'

class Item extends React.Component {
  render() {
    const data = this.props.data
    var items = []
    for (var i = 0; i < data.length; i++) {
      if (data[i].food != null) {
        items.push(
          <div key={i} className='item'>
            <img src={data[i].food.image_url} className='img' />
            <p className='name'>{data[i].food.name}</p>
            <p className='description'>{data[i].food.description}</p>
          </div>
        )
      }
    }
    return <>{items}</>
  }
}

export default Item
