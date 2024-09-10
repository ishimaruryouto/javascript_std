// console.log(document.title);
// document.title="ECC";



// console.log(document.body);

const txt=document.getElementById("txt");
console.log(txt);
console.dir(txt);

// txt.innerHTML+="<strong>goodbye</strong>";
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("click");
    txt.innerHTML="goodbye";
    document.body.style.backgroundColor="black";
})