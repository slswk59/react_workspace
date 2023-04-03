import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './components/todo1';
import Input from './components/input1';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

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
      <Input
        insertTodo={insertTodo}
        input={input}
        handleChangeText={handleChangeText}
        inputRef={inputRef}
      />
      <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
