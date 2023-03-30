import Label from './label3';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const todos = useSelector((todos) => todos);

  const dispatch = useDispatch();

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
