import { Component } from "react";
import { AddToItem } from "./AddToDoItem/AddToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import "./styles.css";

export class ToDo extends Component {
  state = {
    items: [],
    inputValue: "",
  };

  onInputChange = (event) => {
    console.log(event);
    this.setState({
      inputValue: event.target.value,
    });
  };

  onAddToItem = () => {
    this.setState({
      items: [this.state.inputValue, ...this.state.items],
      inputValue: "",
    });
  };

  onRemoveItem = (itemIndex) => {
    this.setState({
      items: this.state.items.filter((_, index) => index !== itemIndex),
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="to-do">
        <h3 className="to-do__title">REACT TO DO</h3>
        <ToDoList items={this.state.items} onItemClick={this.onRemoveItem} />
        <AddToItem
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onClick={this.onAddToItem}
        />
      </div>
    );
  }
}
