import { useEffect, useState } from "react";
import { AddToItem } from "../ToDo/AddToDoItem/AddToDoItem";
import { ToDoList } from "../ToDo/ToDoList/ToDoList";

export const ToDoHook = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://contact-agenda-rest-api.herokuapp.com/todo")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setLoading(false);
        setItems(data.list);
      });
  }, []);

  useEffect(() => {
    console.log("items has changed");
  }, [items]);

  useEffect(() => {
    console.log("loading has changed", loading);
  }, [loading]);

  const onInputChange = (event) => {
    console.log(event);
    setInputValue(event.target.value);
  };

  const onAddItem = () => {
    setItems([inputValue, ...items]);
    setInputValue("");
    fetch("https://contact-agenda-rest-api.herokuapp.com/todo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ list: [inputValue, ...items] }),
    });
  };

  const onRemoveItem = (itemIndex) => {
    setItems(items.filter((_, index) => index !== itemIndex));
    fetch("https://contact-agenda-rest-api.herokuapp.com/todo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: items.filter((_, index) => index !== itemIndex),
      }),
    });
  };

  return (
    <div className="to-do">
      <h3 className="to-do__title">REACT TO DO HOOK</h3>
      {loading ? (
        <p>Loading ....</p>
      ) : (
        <ToDoList items={items} onItemClick={onRemoveItem} />
      )}

      <AddToItem
        value={inputValue}
        onChange={onInputChange}
        onClick={onAddItem}
      />
    </div>
  );
};
