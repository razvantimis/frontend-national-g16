import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = (props) => {
  return (
    <div className="to-do__list">
      {props.items.map((item, index) => (
        <ToDoItem
          key={index}
          label={item}
          onClick={() => props.onItemClick(index)}
        />
      ))}
    </div>
  );
};
