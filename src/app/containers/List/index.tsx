import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { MemoHeader, MemoList, Page, Contents, Footer } from 'Components';
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
        const addButtonStyle = {
            right: 30,
            // top: 25,
            bottom: 40,
            position: 'absolute' as any,
            borderRadius: '50%',
            fontSize: '28px'
        }
        return (
            <Page>
                <MemoHeader />
                <Contents>
                    <MemoList memos={memos} deleteMemo={deleteMemo} />
                    <Link to="/new" title="메모작성">
                        <button type="button" className="btn btn-info btn-circle btn-lg" style={addButtonStyle} >
                            <i className="glyphicon glyphicon-plus"></i>
                        </button>
                    </Link>
                </Contents>
            </Page>
        )
    }

}