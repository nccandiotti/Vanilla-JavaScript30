// form element
const addItems = document.querySelector(".add-items")
const itemsList = document.querySelector(".plates")

const items = JSON.parse(localStorage.getItem("items")) || []

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
        <input type="checkbox" data-index=${i} id="items${i}" ${
        plate.done ? "checked" : ""
      }>
          <label for ">${plate.text}</label>
        </li>
        `
    })
    .join("")
  // .join at end turns array that the map made into one big string for the innerHTML
}

// on submit
addItems.addEventListener("submit", handleSubmit)
function handleSubmit(e) {
  e.preventDefault()
  const text = this.querySelector("[name=item]").value
  const item = {
    text,
    done: false,
  }
  //   add item objects to items array
  items.push(item)
  populateList(items, itemsList)
  //   LOCAL STORAGE API
  localStorage.setItem("items", JSON.stringify(items))

  //   this refers to the form element that we are resetting
  this.reset()
}
