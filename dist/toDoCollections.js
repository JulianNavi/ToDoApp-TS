"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
class ToDoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    addToDo(task) {
        while (this.getToDoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new toDoItem_1.ToDoItem(this.nextId, task));
        return this.nextId;
    }
    getToDoById(id) {
        return this.todoItems.find(item => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getToDoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.ToDoCollection = ToDoCollection;
