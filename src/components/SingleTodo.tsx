import React from 'react';
import { MdEditSquare, MdDeleteForever, MdOutlineFileDownloadDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <form className='todos__single'>
      <span className="todo__single--text">
        {todo. todo}
      </span>
      <div>
        <span className="icon"><MdEditSquare /></span>
        <span className="icon"><MdDeleteForever /></span>
        <span className="icon"><MdOutlineFileDownloadDone /></span>
      </div>
    </form>
  )
}

export default SingleTodo
