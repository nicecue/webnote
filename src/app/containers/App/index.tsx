import * as React from 'react';

export class App extends React.Component<any, any> {

  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DEVTOOLS = require('mobx-react-devtools').default;
      return (<DEVTOOLS />);
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}
