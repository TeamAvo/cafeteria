import React from 'react'
import Logo from '../../../assets/img/LOGO.png'

class Item extends React.Component {
  render() {
    const data = this.props.data
    var items = []
    if (data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].food != null) {
          var imgURL
          if (data[i].food.image_url == null) {
            imgURL = Logo /*`https://source.unsplash.com/300x300/?${data[i].food.name}`*/
          } else {
            imgURL = data[i].food.image_url
          }
          items.push(
            <div key={i} className='item'>
              {/*<img src={imgURL} alt={data[i].food.name} className='img' />*/}
              {/*<a target='_blank' href={imgURL}></a>*/}
              <p className='name'>{data[i].food.name}</p>
              <p className='description'>{data[i].food.description}</p>
            </div>
          )
        }
      }
    } else {
      items = (
        <div className='item'>
          <h3 className='center'>
            There is currently nothing on the menu today.
          </h3>
        </div>
      )
    }
    return (
      <>
        <div className={`itemcontainer ${this.props.color}`}>
          <div className='title'>{this.props.title}</div>
          <div>{items}</div>
        </div>
      </>
    )
  }
}

export default Item
