import * as React from 'react';

interface HeaderProps {

};

interface HeaderState {

};

export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1>WEB NOTE</h1>
            </div>
        );
    }
}