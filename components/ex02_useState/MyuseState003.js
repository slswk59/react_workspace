import { useState } from 'react';

const MyuserState003 = () => {
  //const [상태(태그도 가능), 상태변경함수] = userState(초기값)
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');

  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  //useState의 구조가 배열이면 배열의 상태를 유지해줘야 함
  const handleClick = () => {
    // console.log(document.getElementById('fname').value);
    // 최신 입력값을 뒤에 놓고 싶을때
    // setNames([...names, document.getElementById('fname').value]);
    // 최신 입력값을 앞에 놓고 싶을 때, key 설정으로 인해 index 값이 변경됨
    //setNames([document.getElementById('fname').value, ...names]);
    //document.getElementById('fname').value = '';
    setNames([input, ...names]);
    setInput('');
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* 화살표함수에서 줄이 1개이면 중괄호와 return, 세미콜론이 생략 가능하나 vsc에서 소괄호로 생성해줌*/}
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
      {/*화살표함수에서 줄이 1개일때 */}
      {/*} {names.map((value, index) => (
        <p key={index}>{value}</p>
     ))} */}
    </div>
  );
};

export default MyuserState003;
