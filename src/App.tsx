import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px"}}>
    <h1>React Todo App</h1>
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="タスクを入力"
      />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map((todos, index) => (
          <li key={index} style={{ textDecoration: todos.completed ? "line-through" : ""}}>
            {todos.text}
            <button onClick={() => toggleComplete(index)}>
              {todos.completed ? "戻す" : "完了"}  
            </button>
            <button onClick={() => deleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
