"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
const toDoCollections_1 = require("./toDoCollections");
const inquirer = require("inquirer");
let todos = [
    new toDoItem_1.ToDoItem(1, 'Go for run'),
    new toDoItem_1.ToDoItem(2, 'Finish ToDo app', true),
    new toDoItem_1.ToDoItem(3, 'Learn Typescript'),
    new toDoItem_1.ToDoItem(4, 'Lets start coding'),
    new toDoItem_1.ToDoItem(5, 'Finish homework', true)
];
let collection = new toDoCollections_1.ToDoCollection('Julius', todos);
function displayToDoList() {
    console.log(`${collection.userName}'s ToDo list ` +
        `${collection.getItemCounts().incomplete} items to do`);
    collection.getToDoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayToDoList();
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose message',
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers['command'] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
