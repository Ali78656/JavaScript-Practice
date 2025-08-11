// Loops
 
// let counter=1;
// while(counter <= 10){
//     console.log(counter);
//     counter++;
    
// };


let InputE = document.querySelector(".num");
let btnE = document.querySelector(".btn");
let resultE = document.querySelector("p");

let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;

const game = () => {
  let guess = Number(InputE.value);

  if (isNaN(guess)) 
    {
    resultE.classList.remove("hide");
    resultE.innerText = "Please enter a number";
  } 
  else if (guess < minNum || guess > maxNum)
     {
    resultE.classList.remove("hide");
    resultE.innerText = "Please enter a number in the given range";
  }
   else {
    attempts++;
    if (guess < answer) {
      resultE.classList.remove("hide");
      resultE.innerText = "Your number is too low.";
    } 
    else if (guess > answer) {
      resultE.classList.remove("hide");
      resultE.innerText = "Your number is too high.";
    } 
    else {
      resultE.classList.remove("hide");
      resultE.innerText = "You guessed it in " + attempts + " attempts";
      // Reset the game after a correct guess
      answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      attempts = 0;
    }
  }

  // Clear the input field for the next guess
  InputE.value = "";
};

btnE.addEventListener("click", game);


// Guess Number Game
// let minNum=1;
// let maxNum=100;
// let answer=Math.floor(Math.random()*(maxNum-minNum))+minNum;

// let attemps=0;
// let guess;
// let running=true;

// while(running){
//     guess=Number(prompt("Entre a number b/w 1 and 100"));

//     if(isNaN(guess)){
//         alert("Please entre a number");
//     }
//     else if(guess<minNum || guess>maxNum){
//          alert("Please entre a number in given range")
// }
//     else{
//         attemps++;
//         if(guess < answer){
//             alert("Your number is too low.")
//         }
//         else if(guess > answer){
//             alert("You number is too high")
//     }
//     else{
//         alert("You guessed it in "+attemps+" attemps");
//         running=false;
//     }
// }

// }




