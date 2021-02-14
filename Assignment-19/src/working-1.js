import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";

const Information = [
  {
    name: "Sagar",
    location: "kaithal",
  },
  {
    name: "Rahul",
    location: "Chandigarh",
  },
  {
    name: "Rahul KL",
    location: "Banglore",
  },
  {
    name: "Sant",
    location: "Yamuna Nagar",
  },
  {
    name: "Sumit",
    location: "Chandigarh",
  },
  {
    name: "Ritvik",
    location: "kaithal",
  },
  {
    name: "Saleem",
    location: "Yamuna Nagar",
  },
  {
    name: "Shubham",
    location: "Sri Ganganagar",
  },
  {
    name: "Rahul",
    location: "Kanpur",
  },
  {
    name: "Raman",
    location: "Delhi",
  },
  {
    name: "Aashish",
    location: "Rohtak",
  },
  {
    name: "Naina",
    location: "Karnal",
  },
  {
    name: "Azhar",
    location: "Nagaur",
  },
  {
    name: "Sahil",
    location: "Ambala",
  },
  {
    name: "Virat",
    location: "Delhi",
  },
];
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Raman",
          location: "Delhi",
        },
        {
          name: "Aashish",
          location: "Rohtak",
        },
      ],
      searchKeyword: null,
    };
  }

  // state = {
  //   searchKeyword: null,
  // };

  render() {
    let handleChange = (e) => {
      this.setState({ searchKeyword: e.target.value });
    };

    var details = Information.filter((person) => {
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
    }).map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.name}</td>
          <td>{data.location}</td>
        </tr>
      );
    });

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
                      <i
                        className="fas fa-sort"
                        onClick={(e) => {
                          alert("under progress");
                        }}
                      ></i>
                    </th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>{details}</tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    );
  }
}
