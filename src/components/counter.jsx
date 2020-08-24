import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  /*renderTags() {
    if (this.state.tags.length === 0)
      return (
        <p
          style={{
            fontFamily: "GillSans",
            fontSize: "20px",
            lineHeight: "38px",
            width: "170px",
            marginLeft: "65px",
          }}>
          There are no tags!
        </p>
      );
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span
          style={{
            fontFamily: "GillSans",
            fontSize: "20px",
            lineHeight: "40px",
            height: "42px",
            width: "40px",
            padding: "0",
            paddingTop: "10px",
            textAlign: "center",
          }}
          className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          style={{
            fontFamily: "GillSans",
            fontSize: "20px",
            lineHeight: "38px",
            width: "170px",
          }}
          className={"btn btn-secondary btn-sm"}>
          Increment
        </button>
        <button className="btn btn-sm btn-danger m-2">Delete</button>
        {/*this.state.tags.length === 0 && "Please create a new tag!"*/}
        {/*this.renderTags()*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    const jsxexp = <h6>zero</h6>;
    return this.state.value === 0 ? jsxexp : <h6>{value}</h6>;
  }
}

export default Counter;
