import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-0000-0000',
  });

  {
    /*비동기화식으로 처리되기 때문에 console.log가 먼저 처리되고,
  setCustomer({ name: e.target.value });가 처리된다.*/
  }
  const handleName = (e) => {
    console.log(e.target.value);
    {
      /*...customer는 앞으로 와야한다.*/
    }
    console.log(customer.address);
    console.log(customer.phone);

    //setCustomer({ ...customer, name: e.target.value });
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
        <span>이름</span> {/*state와 value를 연결해놓으면 이벤트 변경이 안됨*/}
        <input type='text' value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화번호</span>
        {/*onChange 이벤트를 걸던지, readOnly읽기 전용으로 하라*/}
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState004;
