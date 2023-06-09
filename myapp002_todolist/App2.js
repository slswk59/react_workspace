// 상태전달 : Context API + useContext()
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './components/todo2';
import Input from './components/input2';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  let boardList = [
    { id: 1, todoname: '운동하기', completed: 0 },
    { id: 2, todoname: 'SNS꾸미기', completed: 0 },
    { id: 3, todoname: '사진정리하기', completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: 0 },
    ]);

    setInput('');
  };

  //인자값을 받아야 할때는 호출하는 곳에서 함수명만 등록하는 것이아니라 콜백함수로 등록해야 함
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      )
    );
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log('useEffect');
  });

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provider
        value={{ insertTodo, input, handleChangeText, inputRef }}
      >
        <Input />
      </InputContext.Provider>
      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
