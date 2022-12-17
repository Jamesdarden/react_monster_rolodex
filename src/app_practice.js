
import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";

class App extends Component {
  // react updates dom based if said object is different in memory
  // set state creates a new object in memory
  //local state
  constructor() {
    super();

    this.state = {
      name: { firstName: "james", lastName: "Darden" },
      company: "PC Matic",
    };
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
</p>
{/* <button onClick={() => {this.setState({name:{firstName:'john',lastName:"hosan"}})}}>Change Name</button> */}
<button
  onClick={() => {
    this.setState(
      ()=> { 
       return{ name: { firstName: "john", lastName: "hosan" }, 
      }; 
    },
      ()=>{
        console.log(this.state)
      }
      );
  }}
>
  Change Name
</button>
</header>