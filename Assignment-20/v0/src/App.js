import React, { Component } from "react";
import Header from "./components/Header";
import LeftHeader from "./components/LeftHeader";
import RightHeader from "./components/RightHeader";

const myChatList = [
  {
    name: "Shubham MCA",
    msgs: [
      "Hello bhai",
      "han shubham bhai kaisa hai?",
      "bas bdiya bhai",
      "tu bta?",
      "me b bdia bhai",
    ],
    status: "online",
    value: 0,
  },
  {
    name: "Saleem MCA",
    msgs: [
      "are aj class h ki nhi",
      "na bhai aj saturady h ab next monday",
      "okay bro",
      "okay kuch kia ke nhi?",
      "na bhai same as you hhahahaahh!!",
    ],
    status: "online",
    value: 1,
  },
  {
    name: "Harbir MCA",
    msgs: [
      "Hello bhai",
      "han harbir bhai kaisa hai?",
      "bas bdiya bhai",
      "tu bta?",
      "me b bdia bhai",
    ],
    status: "online",
    value: 2,
  },
  {
    name: "Sachin MCA",
    msgs: [
      "Hello bhai",
      "han sachin bhai kaisa hai?",
      "bas bdiya bhai",
      "tu bta?",
      "me b bdia bhai",
    ],
    status: "online",
    value: 3,
  },
];
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: myChatList,
      selectedUser: -1,
      username: "Please Select a chat",
      status: "online",
    };
  }

  //here
  handleChange = (value, name) => {
    this.setState({ selectedUser: value, username: name });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container flex">
          <LeftHeader
            userList={this.state.userList}
            handleChange={this.handleChange}
          />
          <RightHeader
            userList={this.state.userList}
            selectedUser={this.state.selectedUser}
            username={this.state.username}
            status={this.state.status}
          />
        </div>
      </>
    );
  }
}
