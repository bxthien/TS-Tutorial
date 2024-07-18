import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies:string[];
// let role:[number, string];

// type Person = {
//   name: string;
//   age: number;
// }

// let person: Person = {
//   name: 'Student',
//   age: 12
// };

// let lotsOfPeople: Person[]

// function printName(name: string) {
//   console.log(name);
// }

// printName('Xuan Thien')

// let printName: (name: string) => number

// type X = {
//   a: number;
//   b: string;
// }

// type Y = X & {
//   c: number;
//   d: number;
// }

// let Z: Y = {
//   a: 1,
//   b: "2",
//   c: 3,
//   d: 4
// }

// interface Human {
//   name: string;
//   age: number;
// }

// interface People extends Human {
//   hight: string;
//   weight: number;
// }

// let someOne: People = {
//   age: 1,
//   hight: "2",
//   name: "Xuan Thien",
//   weight: 2
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);

      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
