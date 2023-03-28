import { useState } from 'react';

const MyuseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');

  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    // console.log(document.getElementById('fname').value);
    // setNames([document.getElementById('fname').value, ...names]);
    // document.getElementById('fname').value = '';

    setNames([...names, input]); //names와 input의 순서가 바뀔수있다.
    setInput('');
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })} */}

      {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default MyuseState003;
