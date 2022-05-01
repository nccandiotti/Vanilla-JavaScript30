// ## Array Cardio Day 2
let date = new Date()
let currentYear = date.getFullYear()

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
]

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
]

// Some and Every Checks

const isAdult = people.some((person) => currentYear - person.year >= 19)

const alsoIsAdult = people.some((person) =>
  currentYear - person.year >= 19 ? "adult" : "not adult"
)

console.log({ isAdult })
console.log(alsoIsAdult)
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => currentYear - person.year >= 19)
console.log({ allAdults })
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((comment) => comment.id === 823423)
console.log(findComment)
// Array.prototype.findIndex()
function findIndexOfCommentById(id) {
  const indexOf = comments.findIndex((comment) => comment.id === id)
  console.log(indexOf)
}
findIndexOfCommentById(823423)
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteCommentFromArray = comments.filter(
  (comment) => comment.id !== findComment.id
)
console.log(deleteCommentFromArray)
