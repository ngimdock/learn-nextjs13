import { TodoList } from "./todoList";

export default function Todo() {
  return (
    <div>
      <h2 className="p-4 text-center text-white bg-primary">
        Ici la page des todos.
      </h2>

      {/*@ts-ignore*/}
      <TodoList />
    </div>
  );
}
