export default function DeleteAllTodos({ dispatch }) {
  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL_TODOS" });
  };
  return <button onClick={handleDeleteAll}>Delete All</button>;
}
