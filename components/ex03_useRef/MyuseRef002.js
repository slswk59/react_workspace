import { useEffect } from 'react';
import { useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    //console.log(nameRef.current);
    //console.log(nameRef.current.value);
    //document.querySelector('#ndata').value = '';
    nameRef.current.value = '';
  };

  /*useEffect() 함수는 React component가 렌더링 될 때마다 
  특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 Hook입니다. */
  useEffect(() => {
    //let ndata = document.querySelector('#ndata');
    //ndata.focus();
    nameRef.current.focus();
  });

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} id='ndata' />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
