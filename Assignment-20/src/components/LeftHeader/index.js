import "./index.css";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React, { Component } from "react";

export default class LeftHeader extends Component {
  render() {
    const userList = this.props.userList; //here
    return (
      <>
        <section className="left-header">
          <h1>Users</h1>

          <ul>
            {/* see solution01 screenshot */}
            {userList.map((user, index) => {
              return (
                <li
                  key={user.name}
                  onClick={() => {
                    this.props.handleChange(user.value, user.name);
                  }}
                >
                  <IconContext.Provider
                    value={{
                      style: {
                        color: "var(--grey-3)",
                      },
                    }}
                  >
                    <FaUserCircle size="2rem" />
                  </IconContext.Provider>
                  <span>{user.name}</span>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
  }
}
