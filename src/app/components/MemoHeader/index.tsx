import * as React from 'react';
import { Header } from 'Components';

interface MemoHeaderProps {

};

interface MemoHeaderState {

};

export class MemoHeader extends React.Component<MemoHeaderProps, MemoHeaderState> {
    constructor(props: MemoHeaderProps) {
        super(props);
    }

    render() {
        return (
            <Header>
                WEB <b>NOTE</b>
            </Header>
        );
    }
}