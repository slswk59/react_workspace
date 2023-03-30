// if문이나 for문을 사용할 수 없어서 조건 연산자를 써야함
const MyJsx004 = () => {
  const name = 'react';
  return (
    <div>
      {name === 'react' ? <h1>리엑트입니다.</h1> : <h1>리엑트가 아닙니다.</h1>}
    </div>
  );
};

export default MyJsx004;
