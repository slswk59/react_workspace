import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { boardActions } from '../../reduxs/actions/board_action';
import TableRow from './table_row';
import PageNavigation from './page_nav';

const BoardList = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { currentPage } = useParams();

  //store에 저장되어 있으면 어디서든 불러서 사용할 수 있다.
  const boardList = useSelector((state) => state.board.boardList);
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  ); // 값이 있으면 state.board.pv 이걸로, 없으면 1페이지를 가져 오도록

  //페이지 값을 받아서 currentPage을 요청함
  const getBoardList = (currentPage) => {
    dispatch(boardActions.getBoardList(currentPage));
    navigator(`/board/list/${currentPage}`);
  };

  //위의 내용들이 실행되고 그 뒤 return 안의 내용들이 실행되고 그 후 useEffect가 실행되므로,
  //return 안에서 BoardList.length를 넣으면 항상 0이 나온다.

  useEffect(() => {
    getBoardList(currentPage);
  }, []);

  return (
    <div>
      <Link className='btn btn-danger' to='/board/write'>
        글쓰기
      </Link>
      <h3 className='text-center'>게시판 목록</h3>
      <tabel className='table table-striped' style={{ marginTop: 20 }}>
        <colgroup>
          <col width='8%' />
          <col width='*' />
          <col width='12%' />
          <col width='12%' />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>

        <tbody>
          {boardList &&
            boardList.map((board) => {
              return <TableRow board={board} key={board.num} />;
            })}
        </tbody>
      </tabel>

      {pv ? <PageNavigation getBoardList={getBoardList} /> : ''}
    </div>
  );
};

export default BoardList;
