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

function inOrder(fn1, fn2) {
  fn1(fn2);
}

inOrder(task1, task2); 

// TODO Update `task1` and `task2` to return a Promise.
// Update `inOrder` to be an async function and use await keyword to call the 
// tasks in order