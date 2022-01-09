import { ToDo } from "../ToDo/ToDo";
import { ToDoHook } from "../ToDoHook/ToDoHook";

export const ToDoPage = () => {
  return (
    <div className="page todo-page">
      <h1>To Do Component</h1>
      <ToDo />
      <ToDoHook />
    </div>
  );
};
