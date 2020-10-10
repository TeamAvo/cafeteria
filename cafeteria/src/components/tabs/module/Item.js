import React from 'react'

import GoogleImage from './GoogleImage'
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
            //imgURL = GoogleImage.searchImage(data[i].food.name)
            console.log(imgURL)
            imgURL = Logo
          } else {
            imgURL = data[i].food.image_url
          }
          items.push(
            <div key={i} className='item'>
              {<img src={imgURL} alt={data[i].food.name} className='img' />}
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
