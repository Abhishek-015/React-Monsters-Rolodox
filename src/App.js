import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }
   handleChange=(e)=>{
    this.setState({searchFeild:e.target.value})
   }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodox</h1>
        <Search
         placeholder="search Monster"
         handleChange={this.handleChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
