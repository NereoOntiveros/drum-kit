var drumButtonList = document.querySelectorAll(".drum");

drumButtonList.forEach(item=>{
  item.addEventListener("click",event=>{
    alert("I got clicked!!");
  })
})
