import React, { Component } from 'react'

export class newsitem extends Component {
  render() {
     const {title,description,imgurl,newsurl,publishedAt}=this.props;
    return (
      <div>
        <div className="card" style={{width:'18rem'}}>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.split(' ').slice(0, 10)}</h5>
    <p className="card-text">{description.split(' ').slice(0, 15)}</p>
    <div className=' my-2'>
  <p>Published At {publishedAt.substring(0,10)}</p>
  
  </div>
    <a href={newsurl} target='_blank' className="btn btn-primary">Readmore...</a>
  </div>
  
  </div>
    </div>
    )
  }
}

export default newsitem
