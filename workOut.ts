console.log("we are ready .....!");
setInterval(() => {
  console.log("Skip this AD in 5secs");
  setTimeout(() => {
    console.log("Press this button to skip");
  }, 10000);
}, 1000);

import { execFileSync } from "child_process";
import os from "os";
console.log("This is: ", os.version());
console.log("this is: ", os.networkInterfaces());
console.log("this is: ", os.userInfo());

//getting your local address
let file = os.networkInterfaces();

let x: any[] = [];

for (let i in file) {
  x.push(file[i]);
}
console.log("This is my local Addrees: ", x[1][1].address);

//core
let start = os.cpus();

let check = start[1].model.split(" ")[2].split("-")[0].split("")[1];

if (check >= "6") {
  console.log("You can install this program");
} else {
  console.log("Go get a new laptop");
}
console.log(start[1].model.split(" ")[2].split("-")[0].split("")[1]);

// //G Ram
let store = os.totalmem() / 1000000000;

let result = Math.floor(store);
if (check >= "5") {
  if (result >= 8) {
    console.log("You can install this program");
  } else {
    console.log("Your RAM cannot install this program");
  }
} else {
  console.log("Go get a new lapop.....!");
}

// console.log(result);

//which window
console.log(os.type());
console.log(os.userInfo());
console.log(os.release());

import prompt from "prompt-sync";

const pt = prompt();

while (true) {
  let numb: number = Math.floor(Math.random() * 10);
  for (let i = 0; i <= 3; i++) {
    console.log("");
    let guessNumb: number = parseInt(pt("Guess what's on my Mind 📢: "));

    if (numb === guessNumb) {
      console.log("you read my mind RIGHT: ");
      break;
    } else {
      if (numb < guessNumb) {
        console.log("");
        console.log("you are wrong");
        console.log(
          `Your number:${guessNumb} is greater than the right number`
        );
        continue;
      } else if (numb > guessNumb) {
        console.log("");
        console.log("you are wrong");
        console.log(
          `Your number:${guessNumb} is greater than the right number`
        );
      }
    }
  }

  console.log("");

  let entry = pt("press Y to continue or N to quit").toUpperCase();

  if (entry === "Y") {
    console.log("");
    console.log("lets do this....");
  } else if (entry === "N") {
    console.log("");
    console.log("It Hurts to see you go...!");
    break;
  }
}
console.log("End of Game!");

while (true) {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  break;
}

console.log("End Now!");
