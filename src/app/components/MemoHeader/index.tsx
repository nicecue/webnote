import * as React from 'react';
import { HEADER } from 'Components';

interface MemoHeaderProps {

}

interface MemoHeaderState {

}

export class MemoHeader extends React.Component<MemoHeaderProps, MemoHeaderState> {
  constructor(props: MemoHeaderProps) {
    super(props);
  }

  render() {
    return (
      <HEADER>
        WEB <span style={{ color: '#FFF' }}><b>NOTE</b></span>
      </HEADER>
    );
  }
}
