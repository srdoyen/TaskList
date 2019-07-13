// const delItem = document.querySelector(".delete-item");

// // form.addEventListener("submit", runEvent);
// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
