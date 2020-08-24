import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 1, value: 4 },
      { id: 1, value: 0 },
      { id: 1, value: 0 },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
