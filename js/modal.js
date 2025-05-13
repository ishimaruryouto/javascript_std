document.querySelector(".button").addEventListener(
    "click",
    (event)=>{
        console.log("みよしん")
        document.querySelector(".modal_bg").style.display="block";
    }
);

document.querySelector(".modal_close").addEventListener(
    "click",
    (event)=>{
        document.querySelector(".modal_bg").style.display="none";
    }
);

addEventListener(
    "click",
    (event)=>{
        if(event.target===document.querySelector(".modal_bg")){
            document.querySelector(".modal_bg").style.display="none";
        };
    }
)
