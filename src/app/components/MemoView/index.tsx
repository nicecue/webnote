import * as React from 'react';
import { Link } from 'react-router-dom';

import { MemoModel } from 'Models';

export interface MemoViewProps {
    memo: MemoModel;
};

export interface MemoViewState {

};

export class MemoView extends React.Component<MemoViewProps, MemoViewState> {
    constructor(props?: MemoViewProps) {
        super(props);
    }

    private onClickMemo = (event: React.SyntheticEvent<any>) => {
        event.preventDefault();
        
    }

    render() {
        const { title, contents, date } = this.props.memo;
        const replaced = contents.split('\n').map((item, key) => {
            return <span key={key}>{item}<br /></span>
        });
        return (
            <div onClick={this.onClickMemo}>
                <div>{title}</div>
                <div>{replaced}</div>
                <div>수정</div>
                <div>삭제</div>
            </div>
        )
    }
}
