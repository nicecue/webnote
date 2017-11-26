import * as React from 'react';

export const Page = ({ children }) => {
    const style={
        height: '100%',
        width: '100%'
    }
    return (
        <div className="page-wrapper" style={style}>
            {children}
        </div>
    );
}

export const Header = ({ children }) => {
    const style = {
        height: '80px',
        textAlign: 'center',
        lineHeight: '80px',
        fontSize: '30px',
        color: '#CCC'
    };
    return (
        <div className="header-wrapper" style={style}>
            {children}
        </div>
    );
}

export const Contents = ({ children }) => {
    const style = {
        marginLeft: 0,
        minHeight: 'calc(100% - 160px)',
        height: 'calc(100% - 160px)',
        width: '600px',
        margin: '0 auto',
        position: 'relative' as any,
        borderRadius: '5px'
    };
    return (
        <div className="content-wrapper" style={style}>
            {children}
        </div>
    );
}

export const Footer = ({ children }) => {
    const style= {
        height: '80px',
        bottom: '0'
    };
    return (
        <div className="footer-wrapper" style={style}>
            {children}
        </div>
    );
}