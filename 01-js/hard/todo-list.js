/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.list = [];
  }
  add(todo) {
    this.list.push(todo);
  }

  remove(index) {
    if (index < 0) throw new Error("Index out of bounds");
    else if (index > this.list.length - 1) return null;
    else this.list.splice(index, 1);
  }
  update(index, updatedTodo) {
    if (index < 0) throw new Error("Index out of bounds");
    else if (index > this.list.length - 1) return null;
    this.list[index] = updatedTodo;
  }
  getAll() {
    return this.list;
  }
  get(index) {
    if (index < 0) throw new Error("Index out of bounds");
    else if (index > this.list.length - 1) return null;
    return this.list[index];
  }
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
