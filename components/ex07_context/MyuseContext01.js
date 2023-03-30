import { useState } from 'react';
import Left1 from './Left1';
import Right1 from './Right1';

import './MyuseContext01.css';
import { UserContext } from './contexts/UserContext';
import { ThemeContext } from './contexts/ThemeContext';

const MyuseContext01 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('현수막');

  const onHandleIncrease = () => {
    setNumber(number + 1);
  };

  const onHandleName = () => {
    setName(name === '현수막' ? '여진구' : '현수막');
  };

  return (
    <div id='page'>
      <h1>page</h1>
      <div className='grid'>
        <UserContext.Provider value={{ name, setName, onHandleName }}>
          <ThemeContext.Provider
            value={{ number, setNumber, onHandleIncrease }}
          >
            <Left1 />
            <Right1 />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MyuseContext01;
