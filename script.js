console.log("Hello World!");

let main = document.querySelector("#main");
let crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", (dets)=>{
  // console.log(dets)
  crsr.style.left = dets.clientX + "px";
  crsr.style.top = dets.clientY + "px";
})
