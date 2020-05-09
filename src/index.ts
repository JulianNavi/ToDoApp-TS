import { ToDoItem } from './toDoItem';
import { ToDoCollection } from './toDoCollections';
import * as inquirer from 'inquirer';

let todos: ToDoItem[] = [
  new ToDoItem(1, 'Go for run'),
  new ToDoItem(2, 'Finish ToDo app', true),
  new ToDoItem(3, 'Learn Typescript'),
  new ToDoItem(4, 'Lets start coding'),
  new ToDoItem(5, 'Finish homework', true)
];

let collection: ToDoCollection = new ToDoCollection('Julius', todos);
let showCompleted = true;

function displayToDoList(): void {
  console.log(`${collection.userName}'s ToDo list ` +
    `${collection.getItemCounts().incomplete} items to do`);
  collection.getToDoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
  Add = "Add new task",
  Complete = "Complete task",
  Toggle = "Show/Hide completed",
  Purge = "Remove completed task",
  Quit = "Quit"
}

function promptAdd(): void {
  console.clear();
  inquirer.prompt({
    type: "input",
    name: "add",
    message: "Enter new task:"
  }).then(answers => {
    if (answers["add"] !== "") {
      collection.addToDo(answers["add"])
    }
    promptUser();
  })
}

function promptComplete(): void {
  console.clear();
  inquirer.prompt({
    type: "checkbox",
    name: "complete",
    message: "Mark complete task",
    choices: collection.getToDoItems(showCompleted).map(item => ({
      name: item.task, value: item.id, checked: item.complete
    }))
  }).then(answers => {
    let completedTask = answers["complete"] as number[];
    collection.getToDoItems(true).forEach(item =>
      collection.markComplete(item.id, completedTask.find(id => id === item.id) != undefined))
    promptUser();
  })
}

function promptUser(): void {
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
        } else {
          promptUser();
        }
        break;
      case Commands.Purge:
        collection.removeComplete();
        promptUser();
        break;
    }
  })
}
promptUser();