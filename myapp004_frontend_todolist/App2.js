// 상태전달 : Context API + useContext()
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './components/todo2';
import Input from './components/input2';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';
import { baseUrl } from './apiurl';
import axios from 'axios';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  let boardList = [];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + '/todo/', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      });
  };

  //인자값을 받아야 할때는 호출하는 곳에서 함수명만 등록하는 것이아니라 콜백함수로 등록해야 함
  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = async (id) => {
    console.log('id:' + id);
    console.log(todos.filter((todo) => todo.id === id));

    let completed = todos.filter((todo) => todo.id == id)[0].completed;
    console.log('datcompleted : ' + completed);

    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`) // .get(baseUrl + '/todo/all')
      .then((Response) => {
        console.log(Response);
        setTodos(Response.data); //데이터 집어넣기
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log('useEffect');
  }, [input]);

  useEffect(() => {
    getTodos();
  }, []);

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
