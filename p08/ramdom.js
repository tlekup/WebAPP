
function random() {
  console.log("Wait 2 second ..."); 
  return new Promise((resolve) => {
    setTimeout(() => {
      let randomnumber = Math.floor(Math.random() * 10);
      resolve(randomnumber);
    }, 2000);
  });
}

async function playGame() {
  for (let i = 1; i <= 3; i++) {

    let num = await random(); 
    console.log("Num " + i + " :  " + num); 
    console.log(""); 

    if (num % 2 !== 0) {
      console.log("You lost");
      return; 
    }
  }

  console.log("You win");
}

playGame();
