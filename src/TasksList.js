export default function TasksList({ tasks, dispatch }) {
  const handleSave = (task, text) => {
    dispatch({
      type: "SAVE_TODO",
      task: { ...task, text },
    });
  };

  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            onChange={() =>
              dispatch({
                type: "UPDATE_TODO",
                task: { ...task, done: !task.done },
              })
            }
            type="checkbox"
            checked={task.done}
          />
          {task.isEditing ? (
            <input
              defaultValue={task.text}
              onBlur={(e) => handleSave(task, e.target.value)}
            />
          ) : (
            task.text
          )}
          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TODO",
                taskId: task.id,
              })
            }
          >
            Delete
          </button>
          <button
            onClick={() =>
              task.isEditing
                ? handleSave(task, task.text)
                : dispatch({
                    type: "EDIT_TODO",
                    taskId: task.id,
                  })
            }
          >
            {task.isEditing ? "Save" : "Edit"}
          </button>
        </li>
      ))}
    </>
  );
}
