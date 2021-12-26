import { Component } from "react";
import { AddToItem } from "./AddToDoItem/AddToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import "./styles.css";

export class ToDo extends Component {
  state = {
    items: [],
    inputValue: "",
    loading: true,
  };

  componentDidMount() {
    fetch("https://contact-agenda-rest-api.herokuapp.com/todo")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          items: data,
          loading: false,
        });
      });
  }

  onInputChange = (event) => {
    console.log(event);
    this.setState({
      inputValue: event.target.value,
    });
  };

  onAddToItem = () => {
    this.setState(
      {
        items: [this.state.inputValue, ...this.state.items],
        inputValue: "",
      },
      () => {
        fetch("https://contact-agenda-rest-api.herokuapp.com/todo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.items),
        });
      }
    );
  };

  onRemoveItem = (itemIndex) => {
    this.setState(
      {
        items: this.state.items.filter((_, index) => index !== itemIndex),
      },
      () => {
        fetch("https://contact-agenda-rest-api.herokuapp.com/todo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.items),
        });
      }
    );
  };

  render() {
    console.log(this.state);

    return (
      <div className="to-do">
        <h3 className="to-do__title">REACT TO DO</h3>
        {this.state.loading ? (
          <p>Loading ....</p>
        ) : (
          <ToDoList items={this.state.items} onItemClick={this.onRemoveItem} />
        )}

        <AddToItem
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onClick={this.onAddToItem}
        />
      </div>
    );
  }
}
