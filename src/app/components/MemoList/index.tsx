import * as React from 'react';

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

    render() {
        const { memos, deleteMemo } = this.props;
        return (
            <div className="memos-container">
                {memos.map(memo => <MemoPreview memo={memo} deleteMemo={deleteMemo} key={`memo_${memo.id}`}/>)}
            </div>
        )
    }
}