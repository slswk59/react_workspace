import { useRef, useEffect } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value); //홍길동

    // document.querySelector('#ndata').value = '';
    nameRef.current.value = ''; //동일 결과값
  };

  useEffect(() => {
    //let ndata = document.querySelector('#ndata');
    //ndata.focus();
    nameRef.current.focus(); //동일 결과값
  });
  // Ref가 없어도 포커스를 사용할수 있지만, DOM에 접근하기 위해서 Ref를 사용하는것이다.

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} id='ndata' />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
