import Link from "next/link";
import React from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos: Todo[] = await todosData.json();

  return todos;
};

export async function TodoList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.slice(0, 6).map((todo) => {
        return (
          <div key={todo.id}>
            <Link href={`todos/${todo.id}`}>{todo.title}</Link>
          </div>
        );
      })}
    </>
  );
}
