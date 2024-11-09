import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './TodoButton';

const defaultTodos = [
  {text: 'correr' , completed: true},
  {text: 'estudiar' , completed: false},
  {text: 'meditar' , completed: true}
];

function App() {
  return (
    <>

      <TodoCounter completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
      </>
  );
}

export default App;
