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
        const { memoStore, router } = this.props;
        const newMemo = new MemoModel(this.titleInput.value, this.contentsInput.value, new Date());
        memoStore.addMemo(newMemo);
        router.history.goBack();
    }

    onBtnCancel = (event: React.SyntheticEvent<any>) => {
        const { router } = this.props;
        router.history.goBack();
    }

    render() {
        const { title, contents } = this.state;
        return (
            <div>
                <input type="text" value={title} ref={r=>this.titleInput=r} onChange={this.onChangeTitle}/>
                <textarea value={contents} ref={r=>this.contentsInput=r} onChange={this.onChangeContents}/>
                <div onClick={this.onBtnSave}>저장</div>
                <div onClick={this.onBtnCancel}>취소</div>
            </div>
        )
    }
}
export default MemoEdit;