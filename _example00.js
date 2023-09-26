function task(id) {
  console.log(`Task ${id}`);
}

function logtask(id) {
  console.log(`Task ${id} started!`);
  global.setTimeout(() => {
    console.log(`Task ${id} finished!`);
  }, 5000);
}

task(1);
logtask(2);
task(3);
task(4);