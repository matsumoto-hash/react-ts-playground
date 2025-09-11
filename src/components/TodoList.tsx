import type { Todo } from "../types.d";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

function TodoList({ todos, onToggle, onDelete }: Props) {
    if (todos.length === 0) return <p>Todoがありません</p>

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
               />
            ))}
        </ul>
    );
}

export default TodoList;