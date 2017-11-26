import * as React from 'react';
import { Link } from 'react-router-dom';

import { MemoModel } from 'Models';
import { RouterStore, MemoStore } from 'Stores';

export interface MemoViewProps {
  memo: MemoModel;
  router: RouterStore;
  memoStore: MemoStore;
}

export interface MemoViewState {

}

export class MemoView extends React.Component<MemoViewProps, MemoViewState> {
  constructor(props?: MemoViewProps) {
    super(props);
  }

  onBtnModify = (event: React.SyntheticEvent<any>) => {
    const { router, memo } = this.props;
    router.history.push(`/edit/${memo.id}`);
  }

  onBtnDelete = (event: React.SyntheticEvent<any>) => {
    const { router, memoStore, memo } = this.props;
    memoStore.deleteMemo(memo.id);
    router.history.push('/list');
  }

  render() {
    const containerStyle = {
      height: 'calc(100% - 120px)',
    };
    const headerStyle = {
      fontSize: '18px',
      padding: '10px 20px',
    };
    const contentsStyle = {
      height: 'calc(100% - 70px)',
      overflowY: 'auto' as any,
      margin: '10px 10px 10px 10px',
      padding: '10px 10px',
      fontSize: '18px',
    };

    const { title, contents, date } = this.props.memo;
    const replaced = contents.split('\n').map((item, key) => {
      return <span key={key}>{item}<br /></span>;
    });
    return (
      <div className="box box-sucess box-solid" style={containerStyle}>
        <div className="box-header with-border" style={headerStyle}>
          <h3 className="box-title">{title}</h3>
          <div className="box-tools pull-right">
            <button 
              type="button" className="btn btn-box-tool" 
              data-widget="modify" title="수정" onClick={this.onBtnModify}
            >
              <i className="fa fa-pencil" style={{ fontSize: '24px' }}></i>
            </button>
            <button 
              type="button" className="btn btn-box-tool" 
              data-widget="remove" title="삭제" onClick={this.onBtnDelete}
            >
              <i className="fa fa-times" style={{ fontSize: '24px' }}></i>
            </button>
          </div>
        </div>
        <div className="box-body" style={contentsStyle}>
          {replaced}
        </div>
      </div>
    );
  }
}
