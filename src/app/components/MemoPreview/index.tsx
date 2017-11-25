import * as React from 'react';
import { Link } from 'react-router-dom';

import { MemoModel } from 'Models';

export interface MemoPreviewProps {
    memo: MemoModel;
    deleteMemo: (idx: number) => void;
};

export interface MemoPreviewState {

};

export class MemoPreview extends React.Component<MemoPreviewProps, MemoPreviewState> {
    constructor(props?: MemoPreviewProps) {
        super(props);
    }

    private onClickMemo = (event: React.SyntheticEvent<any>) => {
        event.preventDefault();
        console.log( this.props.memo );
    }

    private onBtnDelete = (event: React.SyntheticEvent<any>) => {
        const { deleteMemo, memo } = this.props;
        deleteMemo(memo.id);
    }

    private onBtnModify = (event: React.SyntheticEvent<any>) => {

    }

    render() {
        const { title, contents, date } = this.props.memo;
        return (
            <div onClick={this.onClickMemo}>
                <div>{title}</div>
                <div>{contents}</div>
                <div onClick={this.onBtnModify}>수정</div>
                <div onClick={this.onBtnDelete}>삭제</div>

            </div>
        )
    }
}
