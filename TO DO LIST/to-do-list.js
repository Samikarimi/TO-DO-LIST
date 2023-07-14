const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
 const btn=document.getElementById("btn"); 

btn.addEventListener("click", function(e){
    e.preventDefault();

    if(inputbox.value ===""){
        alert("please type a task");
    }
    else{
        let li=document.createElement("li");
        li.textContent=inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.textContent="x"
        li.appendChild(span)

    }
    inputbox.value="";
})
 
listcontainer.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    if(!e.target.className){
   e.target.className="checked"
    }else{
      e.target.className=""
    }
    
   }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
  }
})