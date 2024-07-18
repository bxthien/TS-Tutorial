import React, { useEffect, useRef, useState } from 'react';
import {
  MdEditSquare,
  MdDeleteForever,
  MdOutlineFileDownloadDone,
} from 'react-icons/md';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(toto => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, todo: editTodo } : todo)),
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="todos__single" onSubmit={e => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todos__single--text"
          value={editTodo}
          onChange={e => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo__single--text">{todo.todo}</s>
      ) : (
        <span className="todo__single--text">{todo.todo}</span>
      )}

      <div className="icon__style">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEditSquare />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDeleteForever />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineFileDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
