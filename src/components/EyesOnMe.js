// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
  
    handleonFocus=()=>{
      console.log("Good!")
    }
    handleonBlur=()=>{
      console.log("Hey! Eyes on me!")
    }
    render(){
    return(
      <div>
      <button onFocus={this.handleonFocus} onBlur={this.handleonBlur}></button>
      </div>
      )
  }
}