import React, { Component } from "react";
import { Link } from "react-router-dom";
import Todo from "./todo";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = () => {
    if (
      this.state.email === "suni@gmail.com" &&
      this.state.password === "suni"
    ) {
      return <Todo></Todo>;
    } else {
      alert("Not a valid username and password");
    }
  };

  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />

        <button type="button" onClick={this.onSubmit}>
          submit
        </button>
        <Link to="/todo">tod li</Link>
      </div>
    );
  }
}
