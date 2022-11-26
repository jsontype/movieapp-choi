import styles from "./style.module.scss";
import React, { useState, useEffect, useRef } from "react";

const USER_ID = 1;

export default function todoapp() {
  // JS
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([]);

  let key = useRef(21);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const result = json.filter((item: { userId: number }) => {
          return item.userId === USER_ID;
        });
        setTodos(result);
      });
  }, []);

  console.log(todos);

  const onCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newTodos = {
      id: key.current,
      title: input,
      completed: false,
      userID: USER_ID,
    };
    setTodos([...todos, newTodos]);
    key.current++;
  };

  const onCompleted = (id: any) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  };

  const onChange = (e: {
    preventDefault: () => void;
    target: { value: any };
  }) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);
  };

  const onSubmit = (e: { preventDefault: any }) => {
    e.preventDefault();
    onCreate(e);
    setInput("");
  };

  const onDelete = (id: any) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const render = todos.map((item) => {
    const isCompleted = item.completed && "done";

    return (
      <div key={item.id}>
        <span>#{item.id}/</span>
        <span
          className={styles.idCompleted}
          onClick={() => onCompleted(item.id)}
        >
          {item.title}
        </span>
        <span>{item.completed && "✅"}</span>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    );
  });

  return (
    <div className={styles.todoapp}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할일을 입력하세요"
          name="todo"
          type="text"
          value={input}
          onChange={onChange}
        ></input>
        <button type="submit">전송</button>
      </form>
      {render}
    </div>
  );
}
