
  //this is my code 

// //    pop up  la (alert la)start pantrathu game ahh

// let playconfirm=confirm("let start")//confirm na pop up msg la ok(or)cancel button automatic ahh konduvaruthu
            

// {
//     let playerone=prompt("one or four or six")//promt na input box la ok button click pannuvaruthu
//     if(playerone){
//         let player=playerone.trim().toLowerCase();
//         if(player==="one"||player==="four"||player==="six")
//         {
//             let computer1=Math.floor(Math.random()*3)+1;//random na 0,1,2,3 random ahh ethachum oru numper ahh select panikum computer
//             let computer=computer1===1?"one":computer1===2?"four":computer1===3?"six":"";
//             console.log("COMPUTER: "+computer)

//             let result=
//             computer===player?"tie !":
//             computer==="six"&&player==="four"?`player:${player}\n computer: ${computer}\n computer wins`://-->(\n) this mean new line nu artham
//             computer==="four"&&player==="one"?`player:${player}\n computer: ${computer}\n computer wins`:
//             computer==="six"&&player==="one"?`player:${player}\n computer:${computer}\n computer wins`:
//             `player:${player}\n computer : ${computer}\n player Wins`;


//             alert(result)
//             let playagain=confirm("play Again");
//             playagain?location.reload():alert("ok,thank you");
//         }

//         else
//         alert("please enter one or four or six");
//     }
//     else
//     alert("sorry you enter cancel")
// }
// else
// alert("Ok,bettter luck next time")

 //error idenntified code by chat

let playconfirm=confirm("let start") //confirm na pop up msg la ok(or)cancel button automatic ahh konduvaruthu
            


{
    let playerone=prompt("one or four or six") //promt na input box la ok button click pannuvaruthu
    if(playerone){
        let player=playerone.trim().toLowerCase();
        if(player==="one"||player==="four"||player==="six")
        {
            let computer1=Math.floor(Math.random()*3)+1; //random na 0,1,2,3 random ahh ethachum oru numper ahh select panikum computer
            let computer=computer1===1?"one":computer1===2?"four":computer1===3?"six":""; // **Error 1**: No need for the empty string fallback ""
            console.log("COMPUTER: "+computer)

            let result=
            computer===player?"tie !"://**Error 2**: `"tie !"` should be `"Tie!"` for correct string capitalization
            computer==="six"&&player==="four"?`player:${player}\n computer: ${computer}\n computer wins`://-->(\n) this mean new line nu artham
            computer==="four"&&player==="one"?`player:${player}\n computer: ${computer}\n computer wins`:
            computer==="six"&&player==="one"?`player:${player}\n computer:${computer}\n computer wins`:
            `player:${player}\n computer : ${computer}\n player Wins`;  // **Error 3**: `player Wins` should be `Player wins` for consistency in capitalization

            alert(result) // **Error 4**: If the flow doesn't reach here, `alert` may not trigger.
            let playagain=confirm("play Again");
            playagain?location.reload():alert("ok,thank you");
        }

        else
        alert("please enter one or four or six"); // **Error 5**: This message should be clearer and capitalized consistently, like "Please enter one, four, or six."
    }
    else
    alert("sorry you enter cancel") // **Error 6**: This message is not capitalized consistently. It should be "Sorry, you clicked Cancel."
}
else
alert("ok,bettter luck next time")  // **Error 7**: The message should be properly capitalized and should read "Okay, better luck next time."



// //chat gpt crcted code


// let playconfirm = confirm("Let’s start?"); // 'confirm' is used to display a popup with OK/Cancel buttons

// if (playconfirm) {
//     let playerone = prompt("one, four, or six"); // 'prompt' is used to take user input

//     if (playerone) {
//         let player = playerone.trim().toLowerCase(); // Corrected 'toLowercase' to 'toLowerCase'

//         if (player === "one" || player === "four" || player === "six") {
//             let computer1 = Math.floor(Math.random() * 3) + 1; // Random number (1, 2, or 3)
//             let computer = computer1 === 1 ? "one" : computer1 === 2 ? "four" : "six";
//             console.log("COMPUTER: " + computer);

//             let result = computer === player ? "Tie!" :
//                          computer === "six" && player === "four" ? `Player: ${player}\nComputer: ${computer}\nComputer wins` :
//                          computer === "four" && player === "one" ? `Player: ${player}\nComputer: ${computer}\nComputer wins` :
//                          computer === "six" && player === "one" ? `Player: ${player}\nComputer: ${computer}\nComputer wins` :
//                          `Player: ${player}\nComputer: ${computer}\nPlayer wins`;

//             alert(result);

//             let playagain = confirm("Play again?"); // Corrected 'comfirm' to 'confirm'
//             playagain ? location.reload() : alert("OK, thank you!");
//         } else {
//             alert("Please enter 'one', 'four', or 'six'");
//         }
//     } else {
//         alert("Sorry, you pressed cancel");
//     }
// } else {
//     alert("OK, better luck next time");
// }
