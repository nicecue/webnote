import * as React from 'react';
import * as moment from 'moment';

import { MemoModel } from 'Models';
import { MemoPreview } from 'Components';
import { MemoStore } from 'Stores';

interface MemoListProps {
    memos: Array<MemoModel>;
    deleteMemo: (idx: number) => void;
};

interface MemoListState {

};

export class MemoList extends React.Component<MemoListProps, MemoListState>{
    constructor(props: MemoListProps) {
        super(props);
    }

    getMemoList = () => {
        const { memos, deleteMemo } = this.props;
        if (!memos.length) {
            return null;
        }
        const memoList = [];
        let writtenDate = '';
        for (let i=0; i<memos.length; i++) {
            const memo = memos[i];
            const date = moment(memo.date).format('YYYY-MM-DD');
            if (date !== writtenDate) {
                memoList.push(
                    <li className="time-label">
                        <span className="bg-red">
                            {date}
                        </span>
                    </li>
                );
                writtenDate = date;
            }
            memoList.push(
                <MemoPreview memo={memo} deleteMemo={deleteMemo} key={`memo_${memo.id}`} />
            );
        }
        memoList.push(
            <li>
                <i className="fa fa-clock-o bg-graw"></i>
            </li>
        )
        return memoList;
    }

    render() {
        const { memos, deleteMemo } = this.props;
        const containerStyle = {
            height: 'calc(100% - 120px)',
            overflowY: 'auto' as any,
            paddingTop: '10px',
        }
        const memoList = this.getMemoList();

        return (
            <div className="col-md-12" style={{paddingTop: '10px', height: '100%'}}>
                <div className="info-box">
                    <span className="info-box-icon bg-yellow">
                        <i className="fa fa-files-o"></i>
                    </span>
                    <div className="info-box-content">
                            <span className="info-box-text" style={{color:'#333', fontSize: '18px', margin: '12px 10px 4px 10px'}}>저장된 메모</span>
                            <span className="info-box-number" style={{color:'#333', fontSize: '20px', fontWeight: 'bold', marginLeft: '10px'}}>100</span>
                        </div>
                </div>
                <div className="memos-container" style={containerStyle}>
                    <ul className="timeline">
                        {memoList}
                    </ul>
                </div>
            </div>
        )
    }
}