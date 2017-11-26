import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { MemoHeader, MemoEdit, Contents, Page } from 'Components';
import { MemoStore, RouterStore } from 'Stores';

interface Props {
    router: RouterStore;
    memoStore: MemoStore;
};

interface State {

};

@inject('memoStore', 'router')
@observer
export class New extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { router, memoStore } = this.props;
        return (
            <Page>
                <MemoHeader />
                <Contents>
                    <div className="col-md-12" style={{paddingTop: '10px', height: '100%'}}>
                        <div className="info-box">
                        <span className="info-box-icon bg-yellow">
                            <i className="fa fa-file-text-o"></i>
                        </span>
                        <div className="info-box-content">
                                <span className="info-box-text" style={{color:'#333', fontSize: '18px', margin: '12px 10px 4px 10px'}}>메모 작성</span>
                            </div>
                        </div>
                        <MemoEdit router={router} memoStore={memoStore}/>
                    </div>
                </Contents>
            </Page>
        )
    }
};

