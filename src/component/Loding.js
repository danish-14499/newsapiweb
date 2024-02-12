import React, { Component } from 'react'
import lodingspinner from './lodingspinner.gif'


export class Loding extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={lodingspinner}  alt="lodingspinner" />
      </div>
    )
  }
}

export default Loding
