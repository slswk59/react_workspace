import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

//변수명
const boardSlice = createSlice({
  //외부에서 사용할 수 있도록 밑에 Export함
  //createSlice를 이용해서 reduce를 설정할 것
  name: 'board',
  initialState, //사용할 reduce 이름/initialState 이렇게 하면 초기값 설정됨

  reducers: {
    getBoardList(state, action) {
      //state에 값을 넣고 이걸 store에 저장시킴
      //위에 initailState 안에 있는 요소들에 값 넣어줌
      //console.log(action);
      state.boardList = action.payload.data.aList; //넘겨준 값을 받아옴
      state.pv = action.payload.data.pv;
    },
    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },

    //하나의 컴포넌트에서만 사용하기 떄문에 이방법 사용할 필요 x
    getBoardDownload(state, action) {
      state.boardFile = action.payload.data;
    },
  },
});

//이걸을 이용해서 함수명 자동완성을 할 수 있다.
export const boardReducers = boardSlice.actions; // boardReducers.getBoardList 이렇게 호출함
export default boardSlice.reducer;
