"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
const toDoCollections_1 = require("./toDoCollections");
let todos = [
    new toDoItem_1.ToDoItem(1, 'Go for run'),
    new toDoItem_1.ToDoItem(2, 'Finish ToDo app', true),
    new toDoItem_1.ToDoItem(3, 'Learn Typescript'),
    new toDoItem_1.ToDoItem(4, 'Lets start coding'),
    new toDoItem_1.ToDoItem(5, 'Finish homework', true)
];
let collection = new toDoCollections_1.ToDoCollection('Julius', todos);
console.clear();
console.log(`${collection.userName}'s ToDo list`);
let newId = collection.addToDo('Skip changelog');
let todoItem = collection.getToDoById(newId);
todoItem.printDetails();
// collection.addToDo(todoItem);
