"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
const inquirer = require("inquirer");
const jsonToDoCollection_1 = require("./jsonToDoCollection");
let todos = [
    new toDoItem_1.ToDoItem(1, 'Go for run'),
    new toDoItem_1.ToDoItem(2, 'Finish ToDo app', true),
    new toDoItem_1.ToDoItem(3, 'Learn Typescript'),
    new toDoItem_1.ToDoItem(4, 'Lets start coding'),
    new toDoItem_1.ToDoItem(5, 'Finish homework', true)
];
let collection = new jsonToDoCollection_1.jsonToDoCollection('Julius', todos);
let showCompleted = true;
function displayToDoList() {
    console.log(`${collection.userName}'s ToDo list ` +
        `${collection.getItemCounts().incomplete} items to do`);
    collection.getToDoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add new task";
    Commands["Complete"] = "Complete task";
    Commands["Toggle"] = "Show/Hide completed";
    Commands["Purge"] = "Remove completed task";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter new task:"
    }).then(answers => {
        if (answers["add"] !== "") {
            collection.addToDo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark complete task",
        choices: collection.getToDoItems(showCompleted).map(item => ({
            name: item.task, value: item.id, checked: item.complete
        }))
    }).then(answers => {
        let completedTask = answers["complete"];
        collection.getToDoItems(true).forEach(item => collection.markComplete(item.id, completedTask.find(id => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayToDoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose message",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
