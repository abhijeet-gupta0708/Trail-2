let a=5;
let b=6;
let c=a+b;
console.log(c);
let intmode ="light";
let mode = document.querySelector("body");
let curmode=document.querySelector("#currmode");
curmode.addEventListener("click", () =>
{
    console.log("You are trying to change the mode");
    if(intmode==="light")
{
    console.log("MODE IS DARK ");
    intmode ="dark";
    mode.classList.add("dark");
    mode.classList.remove("light");
}
else {
    console.log("Mode is LIGHT");
    intmode ="light";
    mode.classList.add("light");
    mode.classList.remove("dark");
    
}

});
// CROUSAL ADS STARTS 
let index=0;
const slides =document.querySelector(".ads");
const totalslides =document.querySelectorAll(".ads img").length;
document.querySelector("#next").addEventListener("click" ,() =>
{
    index= (index+1)   % totalslides;
    updateadhero();
});
document.querySelector("#prev").addEventListener("click" , () =>
{
    index =(index-1 +totalslides) % totalslides;
    updateadhero();
});
function updateadhero() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}