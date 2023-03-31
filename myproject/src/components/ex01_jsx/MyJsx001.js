//버전이 낮은 경우에는 import를 해줘야 함
import react from 'react';

/*
  리엑트 17이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'react'문을 사용해야 한다.
  그러나 17이후 버전부터는 import React from 'react' 생략 가능하다.
*/

// function MyJsx002(){

// }

const MyJsx001 = () => {
  return (
    <div>
      <div>Hello</div>
      <div>React</div>
    </div>
  );
};

export default MyJsx001;
