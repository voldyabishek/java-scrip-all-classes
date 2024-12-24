// const view =document.getElementById("view1");
// console.log(view);

// //div
// const divs = view.querySelectorAll("div")
// console.log(view);

// const evenDivs = view.querySelectorAll("div:nth-of-type(even)")
// console.log(evenDivs);

// //ensure there are enough elements before accessing

// evenDivs[4].style.backgroundcolor="red"



// for (let i = 0; i < evenDivs.length; i++)
//      {
//     evenDivs[i].style.backgroundColor = "Green";
//     evenDivs[i].style.width = "150px";
   
//      }


// js train try1
     const box= document.getElementById("boxes1")
     console.log(box)
  //div//
     const divs=box.querySelectorAll("div")
     console.log(box);

     function add(a,b)
       {
        const el=document.createElement("div")
        el.textContent="div "+b
        a.appendChild(el)
       }

       for(let i=5;i<10;i++)
          {
            add(box,i)
          }

          const evendivs=box.querySelectorAll("div:nth-of-type(even)")
          
          console.log(evendivs);

          for(let i=0;i< evendivs.length;i++)
          {
            evendivs[i].computedStyleMap.backgroundcolor="yelllow"
            evendivs[i].style.height = "150px";
          }
