document.getElementById("todoBtn").addEventListener("click", function () {
  const inputValdata = document.getElementById("todoListInp").value;
  if (!inputValdata == "") {
    localStorageFun(inputValdata);
  } else {
    alert("please enter your task");
  }

  document.getElementById("todoListInp").value = "";
});

function localStorageFun(inputVal) {
  let existing = localStorage.getItem("task");
  if (existing) {
    addTableRow(inputVal);
    let dataArray = existing.split(",");
    dataArray.push(inputVal);
    localStorage.setItem("task", dataArray.join(","));
  } else {
    addTableRow(inputVal);
    localStorage.setItem("task", inputVal);
  }
}

// this function show all the list
// function showList() {
//   let task = localStorage.getItem("task");
//   if (task) {
//     let data = task.split(",");
//     let table = document.getElementById("listItemBox").querySelector("tbody");
//     data.forEach((item, index) => {
//       let row = document.createElement("tr");
//       let snCell = document.createElement("td");
//       let nameCell = document.createElement("td");
//       let actionCell = document.createElement("td");
//       snCell.textContent = index + 1;
//       nameCell.textContent = item;
//       actionCell.innerHTML = `<a href="#" onclick="complete(this)">Complete</a>| <a href="">Edit</a> | <a href="">Delete</a>`;
//       row.appendChild(snCell);
//       row.appendChild(nameCell);
//       row.appendChild(actionCell);
//       table.appendChild(row);
//     });
//   }
// }
// showList();
let snCount = 1;
function addTableRow(value) {
  //   const data = localStorage.getItem("task");
  //   if (data) {
  let table = document.getElementById("listItemBox").querySelector("tbody");
  let row = document.createElement("tr");
  let SnCell = document.createElement("td");
  let nameCell = document.createElement("td");
  let actionCell = document.createElement("td");
  SnCell.textContent = snCount++;
  nameCell.textContent = value;
  actionCell.innerHTML = `<a href="#" onclick="complete(this)">Complete</a>| <a href="">Edit</a> | <a href="">Delete</a>`;
  row.appendChild(SnCell);
  row.appendChild(nameCell);
  row.appendChild(actionCell);
  table.appendChild(row);
  //}
}
// addTableRow("test");
window.onload = function () {
  const data = localStorage.getItem("task");
  if (data) {
    data.split(",").forEach(addTableRow);
  }
};
function complete(clickact) {
  let row = clickact.closest("tr");
  let cell = row.getElementsByTagName("td");
  let name = cell[1].textContent;
  actionPerform(name);
}

function actionPerform(fetchData) {
  let storedData = localStorage.getItem("task");
  if (!storedData) return;

  let data = storedData.split(",");
  console.log(data);
  if (data.includes(fetchData)) {
    let upData = data.filter((item) => item !== fetchData);

    localStorage.setItem("task", d);
    console.log("remove successfully");
  } else {
    console.log("something went wrong");
  }
}
