"use strict";
/*
  Поведенческие паттерны - решают задачу эффективного взаимодействия между компонентами.

  4. State - состояние отдельного элемента, который можно улучшить используя паттерн state
*/
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'Draft Document';
    }
    publish() {
        console.log(`На сайт отправлен текст ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log(`Документ удален`);
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'Publish Document';
    }
    publish() {
        console.log('Нельзя  опубликовать опублекованный документ');
    }
    delete() {
        console.log('Снято с публикации');
        this.item.setState(new DraftDocumentItemState());
    }
}
const item = new DocumentItem();
item.text = 'Мой пост!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
