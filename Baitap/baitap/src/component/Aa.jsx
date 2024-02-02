import React, { Component } from 'react'
import Bb from './Bb'

export default class Aa extends Component {
  render() {
    let {veA} = this.props;
    console.log(veA);
    return (
        <>
            <div>Aa</div>
            <Bb veB = {veA}></Bb>
        </>
    )
  }
}
