import "./styles.css";

export const NavButton = (props) => {
  return (
    <button
      className={`nav-button${props.active ? " nav-button--active" : ""}`}
      onClick={() => {
        if (props.path) {
          window.location = props.path;
        }
      }}
    >
      {props.label}
    </button>
  );
};

// -- falsy (means if statement will interpret as false)
// empty string -> ""
// zero number -> 0
// undefined
// null
// NaN

// truthy
// every thing else like
// "abc"
// " "
// 1
// 1234346542
// {} empty object
// {a: '1} object with keys and values
// [] empty array
// [1] array with values
// () => {} a function is a truthy value

// if (() => {}) {
// }
// -- is like --
// if(true) {
// }
