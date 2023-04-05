import axios from 'axios';
import { baseUrl } from '../../apiurl';
import { boardReducers } from '../reducers/board_reducer';

// backend에 접근 하는 것들 여기서 처리함
function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`) //backend 요청
      .then((response) => response.data); //연결해준 값은 data로 받아옴
    console.log(data);
    dispatch(boardReducers.getBoardList({ data })); // 이름과 값이 같으면 이렇게 넘겨도됨 ({ data }))
  };
}

function getBoardDetail(num) {
  return async (dispatch) => {
    //data 값을 reduce를 이용해서 store에 저장해야함
    const data = await axios
      .get(`${baseUrl}/board/view/${num}`)
      .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

//backend에서 결과값을 받아야하니 변수를 선언해주어야함
function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/contentdownload/${upload}`, {
        responseType: 'blob', // backend에서 stream을 통해서 받도록 "application/octet-stream" 이렇게 해두어서 이렇게 받아줘야함
      })
      .then((response) => response.data); // data에 담아서 넘겨줌
    // data 값을 reduce에 저장시켜줘야함 -> store에 저장하기 위해서
    // dispatch(boardActions.getBoardDownload(data)); // 이렇게 넘겨줘도 가능
    return data; // store에 저장안하고 일회성으로 할 거면 이렇게 하고 board_view.js에서만 사용하게끔 할 수 있음
  };
}

function getBoardDelete(num) {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/board/delete/${num}`)
      .then((response) => response.data);
  };
}

function getBoardWrite(formData, config) {
  return async () => {
    await axios
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => response.data);
  };
}

function getBoardUpdate(formData, config) {
  return async () => {
    await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardDownload,
  getBoardDelete,
  getBoardWrite,
  getBoardUpdate,
}; // 여기에 등록을 해주어야 외부에서 접근할 수 있음
