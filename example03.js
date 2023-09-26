function getJhed(student, callback) {
  console.log(`Start reading ${student} info`);
  // read form database
  let jhed;
  setTimeout(() => {
    jhed = "jdoe23";
    console.log(`Finished reading ${student} info`);
    callback(jhed);
  }, 5000);
}

console.log("Listening to events!");
getJhed("John Doe", (jhed) => {
  console.log(jhed);
});
console.log("Still listening to events!");