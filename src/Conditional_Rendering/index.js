import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

export default class CONDITIONAL_RENDARING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         IsLogedIn : true
      }
    }
  render() {
      const {IsLogedIn}=this.state
    return (
        <div>
      { IsLogedIn ? <HomePage /> : <LogInPage /> }
        </div>
    )
  }
}
