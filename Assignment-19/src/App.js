import React, { Component } from "react";
import Header from "./Header";
import userList from "./userList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: userList,
      searchKeyword: null,
      isSorted: false,
    };
  }

  render() {
    // eslint-disable-next-line array-callback-return
    var details = this.state.users.filter((person) => {
      if (!this.state.searchKeyword) {
        return person;
      } else if (
        person.name
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase()) ||
        person.location
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase())
      ) {
        return person;
      }
    });
    let handleChange = (e) => {
      this.setState({ searchKeyword: e.target.value });
    };
    return (
      <>
        <Header />
        <section className="section-2">
          <div className="container user-list">
            <input
              placeholder="Search Your Resturants..."
              type="text"
              value={this.state.value}
              onChange={handleChange}
            />

            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      Name&nbsp;
                      <FontAwesomeIcon
                        icon="sort"
                        size="1x"
                        onClick={(e) => {
                          // if false sort in ascending order
                          if (!this.state.isSorted) {
                            details.sort((a, b) => {
                              var aName = a.name;
                              var bName = b.name;

                              if (aName < bName) {
                                return -1;
                              } else if (aName > bName) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          } else {
                            // if true sort in descending order
                            details.sort((a, b) => {
                              var aName = a.name;
                              var bName = b.name;
                              if (aName > bName) {
                                return -1;
                              } else if (aName < bName) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          }
                          // change state of user details array and invert isSorted
                          this.setState({
                            users: details,
                            isSorted: !this.state.isSorted,
                          });
                        }}
                      />
                      {/* <i className="fas fa-sort"></i> */}
                    </th>
                    <th>
                      Location&nbsp;
                      <FontAwesomeIcon
                        icon="sort"
                        size="1x"
                        onClick={(e) => {
                          // if false sort in ascending order
                          if (!this.state.isSorted) {
                            details.sort((a, b) => {
                              var aLocation = a.location;
                              var bLocation = b.location;

                              if (aLocation < bLocation) {
                                return -1;
                              } else if (aLocation > bLocation) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          } else {
                            // if true sort in descending order
                            details.sort((a, b) => {
                              var aLocation = a.location;
                              var bLocation = b.location;
                              if (aLocation > bLocation) {
                                return -1;
                              } else if (aLocation < bLocation) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          }
                          // change state of user details array and invert isSorted
                          this.setState({
                            users: details,
                            isSorted: !this.state.isSorted,
                          });
                        }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {details.length > 0 ? (
                    details.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.name}</td>
                          <td>{data.location}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <label>No records found...</label>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    );
  }
}
