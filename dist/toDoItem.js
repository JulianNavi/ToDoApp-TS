"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.ToDoItem = ToDoItem;
