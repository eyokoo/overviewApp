// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);

    //state initialization
    //where we define our own properties
    this.state = {
      isClicked: false,
      inputValue: "",
      listOfToDo: []
    }
    //binding 
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onClickHandler() {
    this.state.isClicked ?
      this.setState({ isClicked: false }) :
      this.setState({ isClicked: true })
  }
  onChangeHandler(event) {
    this.setState({ inputValue: event.target.value }) //store this input value into the state
  }

  onSubmitHandler(event) {
    event.preventDefault()
    this.setState({ listOfToDo: [...this.state.listOfToDo, this.state.inputValue] })
    this.setState({ inputValue: "" })
  }

  render() {

    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" value={this.state.inputValue} onChange={this.onChangeHandler} />
          <button type="submit"> Submit </button>
        </form>
        <button onClick={this.onClickHandler}> Add To-Do </button>
        {/* Display your todos found in your array */}
      </>
    );
  }
}
