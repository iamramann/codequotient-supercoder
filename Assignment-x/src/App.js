import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todoList: [],
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onBtnClick = (e) => {
    if (this.state.value) {
      this.setState({
        value: "",
        todoList: [...this.state.todoList, this.state.value],
      });
    } else {
      alert("Please enter a value");
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="container section-2">
          <InputBox
            value={this.state.value}
            placeholder="Add a task to the list..."
            handleChange={this.handleChange}
          />
          <Button text="Enter task" onBtnClick={this.onBtnClick} />
          <ul className="list-section">
            {this.state.todoList.length > 0 ? (
              this.state.todoList.map((task, index, array) => {
                console.log(array.length);
                return (
                  <li
                    key={index}
                    // onClick={(event) => {
                    //   event.target.remove();
                    // }}
                  >
                    {task}
                  </li>
                );
              })
            ) : (
              <label style={{ color: "var(--dark-color)" }}>
                Nothing to display...
              </label>
            )}
          </ul>
        </div>
      </>
    );
  }
}
