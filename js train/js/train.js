const view =document.getElementById("view1");
console.log(view);

//div
const divs = view.querySelectorAll("div")
console.log(view);

const evenDivs = view.querySelectorAll("div:nth-of-type(even)")
console.log(evenDivs);

//ensure there are enough elements before accessing

evenDivs[4].style.backgroundcolor="red"



for (let i = 0; i < evenDivs.length; i++)
     {
    evenDivs[i].style.backgroundColor = "Green";
    evenDivs[i].style.width = "150px";
   
     }