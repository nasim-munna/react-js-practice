import React, { Component } from 'react'

export default class EVENT_HANDLER extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue:''
      }
    }
    handleOnChange=(e)=>{
        this.setState({
            changeValue :  e.target.value
        })
        
    }
  render() {
    
    return (
      <div>
        <input type="text" onChange={this.handleOnChange}></input>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
