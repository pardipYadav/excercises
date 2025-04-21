let userInputVa = prompt("please enter which want to compare with system");
let generatedName = ["snake", "gun", "water"];
// let c = cmpGnratVar.sort();
generatedName.sort(() => Math.random() - 0.5);
let getComparData = generatedName[0];
let runAgain = true;
if (getComparData === "snake" && userInputVa === "water") {
  alert(
    " " +
      getComparData +
      " vs. " +
      userInputVa +
      ": Snake drinks the water, so the snake wins."
  );
} else if (getComparData === "water" && userInputVa === "gun") {
  alert(
    " " +
      getComparData +
      " vs. " +
      userInputVa +
      ": The gun drowns in the water, so water wins."
  );
} else if (getComparData === "gun" && userInputVa === "snake") {
  alert(
    " " +
      getComparData +
      " vs. " +
      userInputVa +
      ": The gun shoots the snake, so the gun wins."
  );
} else {
  console.log(getComparData);
}

// cmpGnratVar.sort(() => {
//   Math.random() - 0.5;
// });

// let randomValue = cmpGnratVar;
// console.log(randomValue);
// let randomValue = Math.floor(Math.random() * cmpGnratVar.length);
// console.log(randomValue);
