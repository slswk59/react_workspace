const MyBasic001 = () => {
  let cnt = 0;
  //let color = 'black';

  const handleClick = () => {
    cnt = cnt + 1;
    console.log(`cnt: ${cnt}`);
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

export default MyBasic001;
