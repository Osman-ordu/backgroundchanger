const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = 
["#033d45","#4287f5","#4287f5",
"#9c7895","#9c7895","#9c7895",
"#110b17","#110b17","#b6ff8f",
"#f9ff8f","#f9ff8f","#f9ff8f",
"#f9ff8f","#f9ff8f","#f9ff8f"];

button.addEventListener("click",change_BGround);

function change_BGround()
{ 
    const randomNum_ = Math.floor( Math.random() * colors.length + 1);
    const selectColor_ = colors[randomNum_];
    body.style.backgroundColor = selectColor_;
    console.log(randomNum_,selectColor_);
}