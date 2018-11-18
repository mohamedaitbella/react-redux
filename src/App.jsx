import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  // state= {
  //   age:21
  // }
  // onAgeUp = () =>{
  //   const stat =this.state;
  //   this.setState(
  //     {
  //       age:++stat.age
  //     }
  //   )
  // }

  // onAgeDown = () =>{
  //   const stat =this.state;
  //   this.setState(
  //     {
  //       age:--stat.age
  //     }
  //   )
  // }
  render() {
    return (
      <div className="App">
        <span>age : {this.props.age}</span>
        <button onClick={this.props.onAgeUp}>up</button>
        <button onClick={this.props.onAgeDown}>Down</button>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return {
    age:state.age 
  }
}

const mapDispachToProps = (dispach)=>{
  return{
    onAgeUp:()=>dispach({type:'AGE_UP'}),
    onAgeDown:()=>dispach({type:'AGE_Down'}),
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
