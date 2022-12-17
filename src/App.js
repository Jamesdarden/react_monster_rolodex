import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { Component } from "react";

class App extends Component {
  // react updates dom based if said object is different in memory
  // set state creates a new object in memory
  //local state
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // life cycle methods  // mounting is when a compontent is  first rendered or placed in the DOM
  // here is where we want to do any API calls to load data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  // determines what the UI will show
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="monsters-title">Monsters roledex</h1>
        <SearchBox
          onChangeHandeler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
