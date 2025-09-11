import type { Todo } from "../types.d";

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    marginRight: 10,
                }}
            >
                {todo.title} (優先度: {todo.priority}
                {todo.deadline ? ` / 締切: ${todo.deadline.toLocaleDateString()}` : ""}
                )
            </span>
            <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
    );
}

export default TodoItem;