import React, { Component } from "react";
// var value;
export default class App extends Component {
  state = {
    taskList: [],
    value: "",
  };
  render() {
    return (
      <>
        {/* use state's value field to hold current task */}
        <input
          placeholder="Enter a text"
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />
        {/* button capture input fields and push to taskList array */}
        <button
          onClick={(e) => {
            var taskListArray = this.state.taskList;
            const value = this.state.value;
            taskListArray.push(value);
            this.setState({ value: "" });
          }}
        >
          click
        </button>
        <ol style={{ listStyleType: "number", listStylePosition: "inside" }}>
          {/* map returns an array and react iterate it automatically */}
          {this.state.taskList.map((x, xindex) => {
            return (
              <li
                key={xindex}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  console.log(e.target.value);
                  var taskListArray = this.state.taskList;
                  var index = taskListArray.indexOf(x);
                  taskListArray.splice(index, 1);
                  this.setState({ taskList: taskListArray });
                }}
              >
                {x}
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}
