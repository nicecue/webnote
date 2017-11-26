import * as React from 'react';
import * as moment from 'moment';

import { MemoModel } from 'Models';
import { MemoPreview } from 'Components';
import { MemoStore, RouterStore } from 'Stores';

interface MemoListProps {
  memos: MemoModel[];
  deleteMemo: (idx: number) => void;
  router: RouterStore;
}

interface MemoListState {

}

export class MemoList extends React.Component<MemoListProps, MemoListState>{
  constructor(props: MemoListProps) {
    super(props);
  }

  getMemoList = () => {
    const { memos, deleteMemo, router } = this.props;
    console.log('list.router:', router);
    if (memos.length === 0) {
      return null;
    }
    const memoList = [];
    let writtenDate = '';
    for (let i = 0; i < memos.length; i += 1) {
      const memo = memos[i];
      const date = moment(memo.date).format('YYYY-MM-DD');
      if (date !== writtenDate) {
        memoList.push(
          <li className="time-label" key={`time_${i}`}>
            <span className="bg-red">
              {date}
            </span>
          </li>,
        );
        writtenDate = date;
      }
      memoList.push(
        <MemoPreview memo={memo} deleteMemo={deleteMemo} key={`memo_${memo.id}`} router={router} />,
      );
    }
    memoList.push(
      <li key={'last'}>
        <i className="fa fa-clock-o bg-graw"></i>
      </li>,
    );
    return memoList;
  }

  render() {
    const { memos, deleteMemo } = this.props;
    const containerStyle = {
      height: 'calc(100% - 120px)',
      overflowY: 'auto' as any,
      paddingTop: '10px',
    };
    const memoList = this.getMemoList();
    const textStyle = {
      color: '#333', 
      fontSize: '18px', 
      margin: '12px 10px 4px 10px',
    };
    const numberStyle = {
      color: '#333',
      fontSize: '20px',
      fontWeight: 'bold' as any,
      marginLeft: '10px',
    };

    return (
      <div className="col-md-12" style={{ paddingTop: '10px', height: '100%' }}>
        <div className="info-box">
          <span className="info-box-icon bg-yellow">
            <i className="fa fa-files-o"></i>
          </span>
          <div className="info-box-content">
            <span className="info-box-text" style={textStyle}>저장된 메모</span>
            <span className="info-box-number" style={numberStyle}>{memos.length}</span>
          </div>
        </div>
        <div className="memos-container" style={containerStyle}>
          <ul className="timeline">
            {memoList}
          </ul>
        </div>
      </div>
    );
  }
}
