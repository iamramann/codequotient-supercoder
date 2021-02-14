import React, { Component } from "react";
import "./App.css";
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

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  search = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.location.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <tr>
          <td>{data.name}</td>
          <td>{data.location}</td>
        </tr>
      );
    });

    return (
      <div class="container">
        <input
          type="text"
          placeholder="Search Your Restaurant"
          onChange={(e) => this.search(e)}
        />
        <div class="container">
          <table class="table center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
