// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
]

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function filterInventors(arr) {
  console.log(arr.filter((i) => i.year >= 1500 && i.year <= 1600))
}

filterInventors(inventors)
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
function firstAndLastNames(arr) {
  console.log(arr.map((i) => `${i.first} ${i.last}`))
}
firstAndLastNames(inventors)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function sortByBirthdate() {
  console.log(inventors.sort((a, b) => a.year - b.year))
}
sortByBirthdate()
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function reduceYears() {
  //   mapYears = inventors.map((i) => i.passed - i.year)
  //   console.log(mapYears)
  console.log(
    inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year)
    }, 0)
  )
}
reduceYears()
// 5. Sort the inventors by years lived
function sortByYearsLived() {
  console.table(
    inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year))
  )
}
sortByYearsLived()

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category")
// const links = Array.from(category.querySelectorAll("a"))
// const blvdnamesArray = links.map((link) => link.textContent)
// const deNames = blvdnamesArray.filter((name) => name.includes("de"))
// console.log(deNames)
// 7. sort Exercise
// Sort the people alphabetically by last name
function sortAlphabetically() {
  console.log(people.sort((a, b) => a.localeCompare(b)))
}
sortAlphabetically()
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
]
function transportationFn() {
  console.log(
    data.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0
      }
      obj[item]++
      return obj
    }, {})
  )
}
transportationFn()
