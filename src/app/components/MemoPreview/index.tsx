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
        const replaced = contents.split('\n').map((item, key) => {
            return <span key={key}>{item}<br /></span>
        });
        return (
            <li>
                <div className="timeline-item">
                    <div className="box box-success box-solid" onClick={this.onClickMemo}>
                        <div className="box-header with-border">
                            <h3 className="box-title">{title}</h3>
                            <div className="box-tools pull-right">
                                <button type="button" className="btn btn-box-tool" data-widget="modify" title="수정" onClick={this.onBtnModify}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button type="button" className="btn btn-box-tool" data-widget="remove" title="삭제" onClick={this.onBtnDelete}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="box-body" style={{height:'40px', overflowY: 'hidden', margin: '10px 10px 10px 10px', padding: '0'}}>
                            {replaced}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
