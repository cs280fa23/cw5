function getJhed(student) {
  const promise = new Promise((resolve, reject) => {
    let success, jhed;

		console.log(`Start reading ${student} info`);
    setTimeout(() => {
      jhed = "jdoe23";
      success = true;

      if (success) {
        console.log(`Finished reading ${student} info`);
        resolve(jhed);
      } else {
        reject(new Error(`Unable to read ${student} info`));
      }
    }, 5000);
  });

  return promise;
}

function getCourses(jhed, callback) {
  // console.log(`Start reading ${jhed} courses`);
  // // read form database
  // let courses;
  // setTimeout(() => {
  //   courses = ["Data Structures", "Full-Stack JavaScript"];
  //   console.log(`Finished reading ${jhed} info`);
  //   callback(courses);
  // }, 5000);
}

function getGrades(jhed, courses, callback) {
  // console.log(`Start reading ${jhed} grades`);
  // // read form database
  // let grades;
  // setTimeout(() => {
  //   grades = ["A-", "A"];
  //   console.log(`Finished reading ${jhed} grades`);
  //   callback(grades);
  // }, 5000);
}

console.log("Listening to events!");
getJhed("John Doe")
  .then((jhed) => new Promise()) // chain promises
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
console.log("Still listening to events!");