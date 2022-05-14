import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrease =()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrease =()=>{
        this.setState({
            count: this.state.count - 1
        })
    }
  render() {
      const {count}= this.state
      const {handleDecrease,handleIncrease}= this
    return (
        <div>
            <button onClick={handleIncrease} disabled={count===5 ? true: false}>+</button>
            <h2>{count}</h2> 
            <button onClick={handleDecrease} disabled={count===0 ? true: false}>- </button>
        </div>
    )
  }
}
