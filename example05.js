function getJhed(student) {
  let jhed
  console.log(`Start reading ${student} info`);
  // read form database
  jhed = "jdoe23";
  console.log(`Finished reading ${student} info`);
  return jhed;
}

function getCourses(jhed) {
  let courses;
  console.log(`Start reading ${jhed} courses`);
  // read form database
  courses = ["Data Structures", "Full-Stack JavaScript"];
  console.log(`Finished reading ${jhed} info`);
  return courses;
}

function getGrades(jhed, courses) {
  let grades;
  console.log(`Start reading ${jhed} grades`);
  // read form database
  grades = ["A-", "A"];
  console.log(`Finished reading ${jhed} grades`);
  return grades;
}

console.log("Listening to events!");
const jhed = getJhed("John Doe");
const courses = getCourses(jhed);
const grades = getGrades(jhed, courses);
console.log(grades);
console.log("Still listening to events!");