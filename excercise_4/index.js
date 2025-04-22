const jokeArr = [
  "What did one snowman say to the other snowman? It smells like carrots over here!",
  "Why did Beethoven get rid of his chickens? All they ever said was, “Bach, Bach, Bach!”",
  "What did 20 do when it was hungry? Twenty-eight.",
  "Why is grass so dangerous? Because it's full of blades!",
  "Why are mountains so funny? They’re hill areas.",
  "Why wasn’t the cactus invited to hang out with the mushrooms? He wasn’t a fungi",
  "Why shouldn’t you fundraise for marathons? They just take the money and run.",
];
let genJokes = jokeArr.sort(() => Math.random() - 0.5);
console.log(genJokes[0]);
document.getElementById("jokes").innerHTML = genJokes[0];
