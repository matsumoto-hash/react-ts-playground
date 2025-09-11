import React, { useState } from "react";
import type { Todo, Priority } from "../types.d";

interface Props {
    onAdd: (todo: Todo) => void;
}

function TodoForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState<Priority>("midium");
    const [deadline, setDeadline] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
            priority,
            deadline: deadline ? new Date(deadline) : undefined,
        };

        onAdd(newTodo);
        setTitle("");
        setPriority("midium");
        setDeadline("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input
                type="text"
                value={title}
                placeholder="Todoを入力"
                onChange={(e) => setTitle(e.target.value)}
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
            >
                <option value="low">低</option>
                <option value="midium">中</option>
                <option value="high">高</option>
            </select>
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button type="submit">追加</button>
        </form>
    );
}

export default TodoForm;