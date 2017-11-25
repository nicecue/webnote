import { observable } from 'mobx';

export class MemoModel {

    readonly id: number;
    @observable public title: string; // 제목
    @observable public contents: string; // 내용
    @observable public date: Date; // 작성일
    @observable public modifiedDate?: Date; // 수정일

    constructor(title:string, contents: string, date: Date, modifiedDate?: Date) {
        this.id = MemoModel.generateId();
        this.title = title;
        this.contents = contents;
        this.date = date;
        this.modifiedDate = date;
    }

    static nextId = 1;
    static generateId() {
        return this.nextId++;
    }
}

export default MemoModel;