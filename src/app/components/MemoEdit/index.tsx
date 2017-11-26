import * as React from 'react';
import { MemoModel } from 'Models';
import { RouterStore, MemoStore } from 'Stores';

export interface MemoEditProps {
    memo?: MemoModel;
    router?: RouterStore;
    memoStore?: MemoStore;
};

export interface MemoEditState {
    title: string;
    contents: string;
};

export class MemoEdit extends React.Component<MemoEditProps, MemoEditState> {
    contentsInput: HTMLTextAreaElement;
    titleInput: HTMLInputElement;

    constructor(props?: MemoEditProps) {
        super(props);
        
        this.state = {
            title: '',
            contents: ''
        };
    }

    componentDidMount() {
        const { memo } = this.props;
        if (memo) {
            this.setState({
                title: memo.title,
                contents: memo.contents
            });
        }
    }

    validate = () => {
        return true;
    }

    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    onChangeContents = (event) => {
        this.setState({
            contents: event.target.value
        })
    }

    onBtnSave = (event: React.SyntheticEvent<any>) => {
        if (!this.validate()) {
            return;
        }
        const { memoStore, router, memo } = this.props;
        if (memo) {
            memoStore.modifyMemo( memo.id, this.titleInput.value, this.contentsInput.value, new Date());
        } else {
            memoStore.addMemo(this.titleInput.value, this.contentsInput.value, new Date());
        }
        
        router.history.goBack();
    }

    onBtnCancel = (event: React.SyntheticEvent<any>) => {
        const { router } = this.props;
        router.history.goBack();
    }

    render() {
        const { title, contents } = this.state;

        const inputStyle = {
            fontSize: '18px',
            height: '39px',
        }
        const textareaStyle = {
            marginTop: '8px',
            height: 'calc(100% - 120px)',
            fontSize: '18px',
            padding: '20px 20px'
        }

        const editContainerStyle = {
            marginTop: '10px',
            height: 'calc(100% - 120px)'
        }

        const buttonBoxStyle = {
            marginTop: '20px',
            width: '100%',
            height: '60px',
            padding: '0'
        }

        return (
            <div  style={editContainerStyle}>
                <div className="input-group">
                    <div className="input-group-btn">
                        <span className="btn btn-primary" data-toggle="dropdown" style={{fontSize:'18px'}}>제목</span>
                    </div>
                    <input type="text" className="form-control" value={title} ref={r=>this.titleInput=r} onChange={this.onChangeTitle} style={inputStyle}/>
                </div>
                <textarea className="form-control" value={contents} onChange={this.onChangeContents} style={textareaStyle} ref={r=>this.contentsInput=r}/>
                <div style={buttonBoxStyle} className="col-md-12">
                    <div className="col-xs-6" style={{paddingLeft:'0'}}>
                        <button onClick={this.onBtnSave} className="btn btn-block btn-info btn-lg">저장</button>
                    </div>
                    <div className="col-xs-6" style={{padding:'0'}}>
                        <button onClick={this.onBtnCancel} className="btn btn-block btn-default btn-lg">취소</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MemoEdit;