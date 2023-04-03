import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef('');
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // let boardList = [
  //   { id: 1, todoname: '운동하기', completed: 0 },
  //   { id: 2, todoname: 'SNS꾸미기', completed: 0 },
  //   { id: 3, todoname: '사진정리하기', completed: 0 },
  // ];

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

  // axios는 비동기 식으로 처리되기 때문에 async를 이용해서 동기화 시켜준다.
  //async function getTodos(){}
  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`) // .get(baseUrl + '/todo/all')
      .then((Response) => {
        console.log(Response);
        console.log('1111111111111');
        setTodos(Response.data); //데이터 집어넣기
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('22222222222222');
  };

  useEffect(() => {
    getTodos();
    inputRef.current.focus();
    console.log('useEffect');
  }, []); //무한반복되기때문에 한번만 실행되게 함.

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
          ref={inputRef}
        />
        <input type='submit' value='Create' />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed === 1 ? 'completed' : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
