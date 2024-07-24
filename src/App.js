import { useReducer } from "react";
import AddTodo from "./AddTodo";
import DeleteAllTodos from "./DeleteAllTodos";
import TasksList from "./TasksList";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        },
      ];
    case "UPDATE_TODO":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "DELETE_TODO":
      return tasks.filter((t) => t.id !== action.taskId);
    case "DELETE_ALL_TODOS":
      return [];
    case "EDIT_TODO":
      return tasks.map((t) =>
        t.id === action.taskId ? { ...t, isEditing: true } : t
      );
    case "SAVE_TODO":
      return tasks.map((t) =>
        t.id === action.task.id
          ? { ...t, text: action.text, isEditing: false }
          : t
      );
    default:
      return tasks;
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <div>
      <h1>TODO App</h1>
      <AddTodo dispatch={dispatch} />
      <TasksList tasks={tasks} dispatch={dispatch}></TasksList>
      <DeleteAllTodos dispatch={dispatch} />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
