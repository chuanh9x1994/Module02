import React, { Component } from 'react'
import Cc from './Cc'

export default class Bb extends Component {
  render() {
    let veB = this.props;
    console.log("bbbb: ",veB);
    return (
        <>
            <div>Bb</div>
            <Cc veC={veB}></Cc>
        </>
    )
  }
}
