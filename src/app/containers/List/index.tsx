import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { Header, MemoList } from 'Components';
import { MemoStore } from 'Stores';

interface ListProps {
    memoStore: MemoStore;
};

interface ListState {

};

@inject('memoStore', 'router')
@observer
export class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
    }

    render() {
        const { memos, deleteMemo, modifyMemo } = this.props.memoStore;
        return (
            <div className="wrapper">
                <Header />
                <MemoList memos={memos} deleteMemo={deleteMemo} />
                <span className="bg-green">2017.10.10</span>
                <div><Link to="/new">메모작성</Link></div>
            </div>
        )
    }

}