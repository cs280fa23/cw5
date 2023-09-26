function getJhed(student, callback) {
  console.log(`Start reading ${student} info`);
  // read form database
  let jhed
  setTimeout(() => {
     jhed = "jdoe23";
    console.log(`Finished reading ${student} info`);
    callback(jhed);
  }, 5000);
}

function getCourses(jhed, callback) {
  console.log(`Start reading ${jhed} courses`);
  // read form database
  let courses;
  setTimeout(() => {
    courses = ["Data Structures", "Full-Stack JavaScript"];
    console.log(`Finished reading ${jhed} info`);
    callback(courses);
  }, 5000);
}

function getGrades(jhed, courses, callback) {
  console.log(`Start reading ${jhed} grades`);
  // read form database
  let grades;
  setTimeout(() => {
    grades = ["A-", "A"];
    console.log(`Finished reading ${jhed} grades`);
    callback(grades);
  }, 5000);
}



console.log("Listening to events!");
getJhed("John Doe", (jhed) => {
  getCourses(jhed, (courses) => {
    getGrades(jhed, courses, (grades) => {
      console.log(grades);
    })
  });
});

// const courses = getCourses(jhed);
// const grades = getGrades(jhed, courses);
// console.log(grades);
console.log("Still listening to events!");