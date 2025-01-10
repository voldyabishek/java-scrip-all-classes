 //Rock,paper,seciour

let confir=confirm("you want this game") 

if(confir){  
   
   let computer1=Math.floor(Math.random()*3)+1;
   
   let computer= computer1===1?"rock":
                 computer1===2?"paper":
                 "scissors";
   console.log("COMPUTER : "+computer)

   let player=prompt("rock paper or scissors");
   if(player)
   console.log("Player : "+player??"you didn't enter")
   else
   console.log("you didn't enter name")


   let result=computer===player?"Tie !":
              computer==="rock"&& player==="scissors"?"computer Wins":
              computer==="paper"&&player==="rock"?"computer Wins":
              computer==="scissors"&&player==="paper"?"Computer Wins":
              "Player Wins"
   console.log(result)
  }   


/*  
let confir=confirm("shall we play rock paper scissors")

if(confir)
{  
  let playerone=prompt("rock paper or scissors");
  if(playerone){
     let player=playerone.trim().toLowerCase();
     if(player==="rock"||player==="paper"||player==="scissors")
     {
        let computer1=Math.floor(Math.random()*3)+1;
        let computer= computer1===1?"rock":computer1===2?"paper":"scissors";
        console.log("COMPUTER : "+computer)

        let result=
        computer===player?"Tie !":
        computer==="rock"&& player==="scissors"?`Player : ${player}\n computer : ${computer}\n computer Wins`:
        computer==="paper"&&player==="rock"?`Player : ${player}\n computer : ${computer}\n computer Wins`:
        computer==="scissors"&&player==="paper"?`Player : ${player}\n computer : ${computer}\n computer Wins`:
        `Player : ${player}\n computer : ${computer}\n Player Wins`;

        alert(result)
        let playagain=confirm("Play Again");
        playagain?location.reload():alert("ok , thank you")
     }
     else
     alert("you didn't enter rock paper scissors")
  }
  else
  alert("sorry you enter cancel")
} 
else
alert("ok, may be next time*")    */