import { useRef } from 'react';
import { useState } from 'react';

const MyuseState007 = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');
  const [userList, setUserList] = useState([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const pushNewUser = () => {
    console.log(input);
    // setUserList([...userList, { id: userList.length + 1, name: input }]);
    //setInput('');

    setUserList([
      ...userList,
      { id: userList.length + 1, name: inputRef.current.value },
    ]);
    inputRef.current.value = '';
  };

  return (
    <div>
      {/*useState 이용할때는 value={input}, 호출때는 input.value*/}
      {/*<input
        type='text'
        id='fname'
        value={input}
        onChange={handleChange}
  /> */}
      {/*useRef 이용할때는 ref={inpitRef}, 호출때는 inputRef.current.value*/}
      <input type='text' id='fname' ref={inputRef} />
      <button style={{ backgroundColor: 'green' }} onClick={pushNewUser}>
        등록
      </button>
      {userList.map((element, idx) => {
        return (
          <p key={idx}>
            <span>{element.id}</span>
            <span>{element.name}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MyuseState007;
