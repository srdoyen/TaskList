// const delItem = document.querySelector(".delete-item");

// // form.addEventListener("submit", runEvent);
// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.className === "fa fa-remove") {
    console.log(e.target);
  }
  //console.log(e.target.value);

  //heading.innerText = e.target.value;
  // Get inpupt value
  // console.log(taskInput.value);
  // e.preventDefault();
}
