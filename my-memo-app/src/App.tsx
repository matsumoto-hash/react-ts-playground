import type { Memo } from './types/memo.ts';
import './App.css'
import React, { useState } from "react";

function App() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // メモ追加
  const addMemo = () => {
    if (!title && !content) return;
    const newMemo: Memo = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };
    setMemos([...memos, newMemo]);
    setTitle("");
    setContent("");
  }

  //　メモ削除
  const deleteMemo = (id: number) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>メモアプリ</h1>
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        style={{ display: "block", marginBottom: "5px" }}
       />
       <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="内容"
        style={{ display: "block", marginBottom: "5px", width: "300px", height: "80px" }}
      />
      <button onClick={addMemo}>追加</button>

      <ul>
        {memos.map((memo) => (
          <li key={memo.id} style={{ margin: "10px 0", border: "1px solid #ccc", padding: "5px" }}>
            <div><strong>{memo.title}</strong></div>
            <div style={{ fontSize: "0.8em", color: "gray" }}>
              {new Date(memo.createdAt).toLocaleString()}
            </div>
            <button onClick={() => deleteMemo(memo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default App;
