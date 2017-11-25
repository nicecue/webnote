import { observable, computed, action } from 'mobx';
import { MemoModel } from '../models';

export class MemoStore {
    constructor(initialMemos?: MemoModel[]) {
        if (initialMemos) {
            this.memos = initialMemos;
        } else {
            this.load();
        }
    }

    load = () => {
        let savedMemos = [];
        const jsonMemos = localStorage.getItem('memos');
        if (jsonMemos) {
            savedMemos = JSON.parse(jsonMemos);
        }
        this.memos = savedMemos;
    }

    save = () => {
        const jsonMemos = JSON.stringify(this.memos);
        localStorage.setItem('memos', jsonMemos);
    }

    @observable
    public memos: Array<MemoModel>;

    @action
    search(word: string) {
        return this.memos.filter( memo => {
            return memo.title.indexOf(word) >= 0;
        });
    }

    @action
    addMemo = (memo: MemoModel): void => {
        this.memos.push( new MemoModel(memo.title, memo.contents, memo.date));
        this.save();
    }

    @action
    deleteMemo = (idx: number): void => {
        this.memos = this.memos.filter(memo => memo.id !== idx);
        this.save();
    }

    @action
    modifyMemo = (idx: number, savingMemo: MemoModel): void => {
        this.memos = this.memos.map((memo) => {
            if (idx === memo.id) {
                memo.title = savingMemo.title;
                memo.contents = savingMemo.contents;
            }
            return memo;
        });
        this.save();
    }

}