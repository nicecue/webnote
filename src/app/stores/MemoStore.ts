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
        if (savedMemos.length) {
            const last = savedMemos[savedMemos.length-1];
            MemoModel.nextId = last.id + 1;
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
    getMemo(memoId: number) {
        for (let i=0; i<this.memos.length; i++ ) {
            const memo = this.memos[i];
            if (memo.id === memoId) {
                return memo;
            }
        }
        return null;
    }

    @action
    addMemo = (title: string, contents: string, date: Date): void => {
        this.memos.push( new MemoModel(title, contents, date));
        this.save();
    }

    @action
    deleteMemo = (idx: number): void => {
        this.memos = this.memos.filter(memo => memo.id !== idx);
        this.save();
    }

    @action
    modifyMemo = (idx: number, title: string, contents: string, modifiedDate: Date): void => {
        this.memos = this.memos.map((memo) => {
            if (idx === memo.id) {
                memo.title = title;
                memo.contents = contents;
                memo.modifiedDate = modifiedDate
            }
            return memo;
        });
        this.save();
    }

}