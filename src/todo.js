import React from "react";
import "./style.scss";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newitem: "",
      list: [],
      isEditing: false
    };
  }

  onChange = event => {
    event.preventDefault();
    this.setState({ newitem: event.target.value });
  };
  additem() {
    const newitem = {
      id: 1 + Math.random(),
      value: this.state.newitem.slice()
    };
    const list = [...this.state.list];
    list.push(newitem);
    console.log(list);
    this.setState({
      list,
      newitem: "",
      isEditing: false
    });
  }
  delete(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({
      list: updatedlist
    });
    console.log(updatedlist);
  }

  edit(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    const selecteditem = list.find(item => item.id === id);
    console.log(selecteditem);
    this.setState({
      list: updatedlist,
      newitem: selecteditem.value,
      isEditing: true
    });
  }
  componentWillMount() {
    // load items array from localStorage, set in state
    let itemsList = localStorage.getItem("list");
    if (itemsList) {
      this.setState({
        list: JSON.parse(localStorage.getItem("list"))
      });
    }
  }
  componentDidUpdate() {
    // on each update, sync our state with localStorage
    localStorage.setItem("list", JSON.stringify(this.state.list));
  }
  render() {
    return (
      <div className="list" data-testid="add1">
        <table align="center">
          <tr>
            <th>
              <input
                id="a3"
                type="text"
                value={this.state.newitem}
                onChange={this.onChange}
              ></input>
              &nbsp;
            </th>
            <th>
              <button
                id="a2"
                type="button"
                className="btn btn-success"
                disabled={!this.state.newitem}
                onClick={() => {
                  this.additem();
                }}
              >
                {this.state.isEditing ? "save" : "add"}{" "}
              </button>{" "}
            </th>
          </tr>
          <br />
          <tr>
            {this.state.list.map(item => {
              return (
                <ul type="none" key={item.id}>
                  {item.value}
                  &nbsp;
                  <button
                    id="a5"
                    className="btn btn-danger"
                    onClick={() => {
                      this.delete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  &nbsp; &nbsp;
                  <button
                    id="a4"
                    className="btn btn-success"
                    onClick={() => {
                      this.edit(item.id);
                    }}
                  >
                    edit
                  </button>
                </ul>
              );
            })}
          </tr>
        </table>
      </div>
    );
  }
}
// comment

export default Todo;
