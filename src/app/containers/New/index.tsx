import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { MemoHeader, MemoEdit, Contents } from 'Components';
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
            <div className="wrapper">
                <MemoHeader />
                <Contents>
                    <MemoEdit router={router} memoStore={memoStore}/>
                </Contents>
            </div>
        )
    }
};

