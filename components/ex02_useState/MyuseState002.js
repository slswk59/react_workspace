import { useState } from 'react';

const MyuseState0002 = () => {
  //const [상태, 상태변경함수] = userState(초기값)
  //useState는 리엑트라이브러리에서 제공
  const [cnt, setCnt] = useState(0);

  const handleClick = (e) => {
    setCnt(cnt + 1);
    console.log(`cnt: ${cnt + 1}`);
  };

  return (
    <div>
      <p>
        {/* span 안에 {cnt}값이 변경 되지 않아 리렌더링을 해줘야 함 그래서 state를 사용!*/}
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyuseState0002;
