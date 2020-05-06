import { ToDoItem } from './toDoItem';
import { ToDoCollection } from './toDoCollections';

let todos: ToDoItem[] = [
  new ToDoItem(1, 'Go for run'),
  new ToDoItem(2, 'Finish ToDo app', true),
  new ToDoItem(3, 'Learn Typescript'),
  new ToDoItem(4, 'Lets start coding'),
  new ToDoItem(5, 'Finish homework', true)
];
let collection: ToDoCollection = new ToDoCollection('Julius', todos);

console.clear();
console.log(`${collection.userName}'s ToDo list`);

let newId = collection.addToDo('Skip changelog');
let todoItem = collection.getToDoById(newId);
todoItem.printDetails();
// collection.addToDo(todoItem);

