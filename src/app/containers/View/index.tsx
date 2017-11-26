import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { MemoHeader, MemoView, Contents } from 'Components';
import { MemoStore, RouterStore } from 'Stores';
import { MemoModel } from 'Models';

interface Props {
    router: RouterStore;
    memoStore: MemoStore;
    memoId: number;
    match: any;
};

interface State {

};

@inject('memoStore', 'router')
@observer
export class View extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { router, memoStore, match } = this.props;
        const memoId = parseInt(match.params.memoId);
        const memo = memoStore.getMemo(memoId);

        const backButtonStyle = {
            right: 30,
            // top: 25,
            bottom: 40,
            position: 'absolute' as any,
            borderRadius: '50%',
            fontSize: '28px'
        }

        return (
            <div className="wrapper">
                <MemoHeader />
                <Contents>
                    <div className="col-md-12" style={{paddingTop: '10px', height: '100%'}}>
                        <div className="info-box">
                            <span className="info-box-icon bg-yellow">
                                <i className="fa fa-file-text-o"></i>
                            </span>
                            <div className="info-box-content">
                                    <span className="info-box-text" style={{color:'#333', fontSize: '18px', margin: '12px 10px 4px 10px'}}>메모 보기</span>
                            </div>
                        </div>
                        <MemoView router={router} memoStore={memoStore} memo={memo}/>
                    </div>
                    <Link to="/list" title="메모 목록">
                        <button type="button" className="btn btn-info btn-circle btn-lg" style={backButtonStyle} >
                            <i className="fa fa-arrow-left"></i>
                        </button>
                    </Link>
                </Contents>
            </div>
        )
    }
};

