import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { Header, MemoEdit } from 'Components';
import { MemoStore, RouterStore } from 'Stores';

interface Props {
    router: RouterStore;
    memoStore: MemoStore;
};

interface State {

};

@inject('memoStore', 'router')
@observer
export class Edit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { router, memoStore } = this.props;
        return (
            <div className="wrapper">
                <Header />
                <MemoEdit router={router} memoStore={memoStore}/>
            </div>
        )
    }
};

