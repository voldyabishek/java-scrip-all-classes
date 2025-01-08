//event listner

    const view=document.querySelector("#view2")
    const div=view.querySelector("div");
    const h3=div.querySelector("h3");
    console.log(h3)


    //syntax
    //addEventListner(event,function,usecapture)
     const dosomething = ()=>
     {
        alert("dosomething");
     }
    h3.addEventListener("click",dosomething)
    
    h3.removeEventListener("click",dosomething)



    //click rename
        h3.addEventListener("click",(event)=>
        {
            console.log(event.target);
            event.target.textContent="java script"
        });