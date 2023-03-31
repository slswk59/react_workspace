import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });

  //useState 저장되는것도 비동기식으로 처리가 됨. 즉, event가 다 처리가 되어야 처리가 됨
  //customer.address 콘솔을 먼저 처리되고 setCustomer가 처리가 됨
  //기존에 있는 값은 유지하되 변경할 값만 변경하려면, seCustomer안에 ...customer는 앞에 위치 해야 함
  const handleName = (e) => {
    console.log(e.target.value);
    //setCustomer({ ...customer, name: e.target.value });
    console.log(customer.address);
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAddress = (e) => {
    //setCustomer({ ...customer, address: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handlePhone = (e) => {
    //setCustomer({ ...customer, phone: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };
  return (
    <div>
      <p>
        <span>이름</span>
        {/*on이벤트를 걸던가 아님 readOnly로 설정해야 함*/}
        <input type='text' value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>
      <p>
        <span>전화번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState004;
