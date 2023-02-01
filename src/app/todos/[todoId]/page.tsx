import { Todo } from "../todoList";

type PageProps = {
  params: {
    todoId: number;
  };
};

async function fetchTodo(todoId: number): Promise<Todo> {
  const resTodo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );

  const todo = await resTodo.json();

  return todo;
}

export default async function TodoPage({ params }: PageProps) {
  const todo = await fetchTodo(params.todoId);

  return (
    <section className="flex flex-col space-y-5">
      <div className="p-10 bg-gray-200 rounded text-primary">
        <span className="block text-lg underline font-Inter">Todo id</span>
        <p className="text-custom-indigo">{todo.id}</p>
      </div>

      <div className="p-10 bg-gray-200 rounded text-primary">
        <span className="block text-lg underline font-Inter">Todo title</span>
        <p className="text-custom-indigo">{todo.title}</p>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const todosData = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos: Todo[] = await todosData.json();

  const trimmedTodos = todos.slice(0, 5);

  console.log({ trimmedTodos });

  return trimmedTodos.map((todo) => ({
    params: {
      todoId: todo.id.toString() + "",
    },
  }));
}
