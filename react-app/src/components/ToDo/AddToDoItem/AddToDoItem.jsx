import "./styles.css";

export const AddToItem = (props) => {
  return (
    <div className="to-do__add-item">
      <input
        className="to-do__add-item__field"
        value={props.value}
        onChange={props.onChange}
      />
      <button className="to-do__add-item__add-btn" onClick={props.onClick}>
        +
      </button>
    </div>
  );
};
