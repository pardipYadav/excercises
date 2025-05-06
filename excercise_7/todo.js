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
  actionCell.innerHTML = `<a href="#" onclick="complete(this)">Complete</a>| <a href="#" onclick="editTask(this)">Edit</a> | <a href="#" onclick="deleteTask(this)">Delete</a>`;
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
function complete(currentVal) {
  actionPerform(currentVal, "complete");
}
function editTask(currentVal) {
  actionPerform(currentVal, "edit");
}
function deleteTask(currentVal) {
  actionPerform(currentVal, "delete");
}
function actionPerform(val, action) {
  if (action === "complete") {
    let row = val.closest("tr");
    let cell = row.getElementsByTagName("td");
    let targetCell = cell[1];
    let originalText = targetCell.textContent;
    targetCell.innerHTML = `<span style="text-decoration:line-through">${originalText}</span>`;
  } else if (action === "edit") {
    let row = val.closest("tr");
    let cell = row.getElementsByTagName("td");
    let name = cell[1].textContent;
    let editpromptBox = prompt("Please edit your task", `${name}`);
    let tasklocalstg = localStorage.getItem("task");
    let valueOf = tasklocalstg.split(",");
    // let found = valueOf.find((item) => {
    //   console.log(item);
    //   item !== editpromptBox;
    // });
    let found = valueOf.indexOf(name);
    if (found === -1) {
      alert("the previous value is not match in existing localstorage data");
      return;
    }
    valueOf[found] = editpromptBox;
    localStorage.setItem("task", valueOf.join(","));

    // addTableRow(editpromptBox);
  } else if (action === "delete") {
    let row = val.closest("tr");
    let cell = row.getElementsByTagName("td");
    let name = cell[1].textContent;
    let getData = localStorage.getItem("task");
    let data = getData.split(",");
    // let compare = data.filter((item) => {
    //   item !== name;
    // });
    // console.log(data);
    let compareData = data.indexOf(name);
    if (compareData === -1) {
      alert("Value not found.");
      return;
    }
    let values = data.splice(compareData, 1);
    console.log(values);
    localStorage.setItem("task", values.join(","));
    console.log("Updated localStorage:", values.join(","));
  }
}

// function actionPerform(fetchData, actionName) {
//   if (actionName === "complete") {
//     let storedData = localStorage.getItem("task");
//     if (!storedData) return;
//     let data = storedData.split(",");
//     if (data.includes(fetchData)) {
//       const table = document.querySelector("table");
//       const cell = table.querySelectorAll("td");
//       const targetCellIndex = 2;
//       const targetCell = cell[targetCellIndex];
//       const originalText = targetCell.textContent;
//       targetCell.innerHTML = `<span style="text-decoration:line-through">${originalText}</span>`;
//       //   console.log(originalText);

//       //   let upData = data.filter((item) => item !== fetchData);

//       //   localStorage.setItem("task", upData);
//       //   console.log("remove successfully");
//     } else {
//       console.log("something went wrong");
//     }
//   }
// }
