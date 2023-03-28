/*
   useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
       특정작업(side effect) : Time(setTimeout), Ajax
       useEffect : useEffect는 side effect 라는 뜻이다.

       useEffect 4가지 종류:
       1. useEffect(callback) : 마운트 후, 리렌더링될 때마다
       2. useEffect(callback, []) : 마운트 후
       3. useEffect(callback, [state]) : 마운트 후, state
       4. useEffect(callback, {return ();}, []) : 마운트 후, 언마운트 전
*/

import { useEffect, useState } from 'react';

const MyuseEffect001 = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // useEffect(() => {
  //   console.log('렌더링이 되었습니다.');
  // }, []); //1번만 수행됨

  // useEffect(() => {
  //   console.log('name 렌더링이 되었습니다.');
  // }, [name]); //name만 변경되었을 때 수행되게 함.
  // useEffect(() => {

  //   console.log('nickName 렌더링이 되었습니다.');
  // }, [nickName]); //nickName만 변경되었을 때 수행되게 함.
  // //여러개도 가능 [], []연결 하면됨.

  // useEffect(() => {
  //   console.log('렌더링 return :' + name);
  //   console.log('렌더링 return :' + nickName);
  // }, [name, nickName]); //리렌더링이 될때마다 이름이든, 닉네임이든 상관없이 수행함

  useEffect(() => {
    console.log('렌더링 return :__1' + name);
    return () => {
      console.log('__2');
      console.log('clean up');
    };
  }, [name]);
  // name이라는 값이 변경되었을때 수행하라는 의미이다.
  // 렌더링이 발생될수 있는 것만 넣어줄수있다.
  // DOM과 백엔드에 접근할 때 사용함(useEffect)
  // DB에서 가져온 값을 어디에 출력할것인지 먼저 잡아놓고 DB접속을 한다.

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={onChangeName}
      />
      <input
        type='text'
        placeholder='nickName'
        value={nickName}
        onChange={onChangeNickName}
      />
      <br />
      <span>이름 :</span>
      <br />
      <span>닉네임 :</span>
    </div>
  );
};

export default MyuseEffect001;
