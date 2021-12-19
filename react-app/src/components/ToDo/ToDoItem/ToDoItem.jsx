import "./styles.css";

export const ToDoItem = (props) => {
  return (
    <div className="to-do__item">
      <p className="to-do__item__label">{props.label}</p>
      <button className="to-do__item__remove-btn" onClick={props.onClick}>
        -
      </button>
    </div>
  );
};
