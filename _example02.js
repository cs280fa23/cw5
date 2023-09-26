function task1(callback) {
  setTimeout(() => {
    console.log("Task 1!");
    callback();
  }, Math.random() * 1000);
}

function task2() {
  setTimeout(() => {
    console.log("Task 2!");
  }, Math.random() * 1000);
}

inOrder(task1, task2); // it should print

// Task 1!
// Task 2!

// TODO Write a function called `inOrder` that accepts two callbacks and 
// invokes them in order. You may update `task1` and `task2,` but they must 
// remain asynchronous with a random timeout. 
// In your implementation, use the callback pattern.

function inOrder(fn1, fn2) {
  fn1(fn2);
}