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
  Toggle = "Show/Hide completed",
  Quit = "Quit"
}
function promptUser(): void {
  console.clear();
  displayToDoList();
  inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Choose message',
    choices: Object.values(Commands)
  }).then(answers => {
    switch (answers["command"]) {
      case Commands.Toggle:
        showCompleted = !showCompleted;
        promptUser();
        break;
    }
  })
}
promptUser();