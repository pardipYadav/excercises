// let age = prompt("Enter your age: ");
// age = parseInt(age);
// if (age > 18) console.log("you are eligible to drive the car ");
// else if (age !== 18) {
//   console.log("you not eligible to drive the car ");
// }

// let age = prompt("enter your age");
// age = parseInt(age);
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// if (canDrive(age)) {
//   alert("Yes, you can drive");
// } else {
//   alert("No, you cannot drive");
// }

// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// while (runAgain) {
//   let age = prompt("enter your age");
//   age = parseInt(age);
//   if (age < 0) {
//     console.error("please enter a valid age");
//     break;
//   }
//   if (canDrive(age)) {
//     alert("yes, you can drive");
//   } else {
//     alert("No, you cannot drive");
//   }
//   runAgain = confirm("Do you want to play again");
// }

// let num = prompt("please enter a number");
// num = parseInt(num);
// if (num > 4) {
//   location.href = "https://google.com";
// }

let bgc = prompt("please enter your backgroung color");
document.body.style.background = bgc;
