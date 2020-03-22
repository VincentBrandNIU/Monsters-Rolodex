import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super(); //calls component method constructor
    this.state = {
      //State of javascript object
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      //Fetch Data
      (
        response //Converting response to Json
      ) => response.json().then(users => this.setState({ monsters: users })) //Fetch all users from API and update our states monster property with new array fo users
    );
  }
  handlechange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
