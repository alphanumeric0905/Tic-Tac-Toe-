let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg-container");
let btn=document.querySelector(".reset");
let newBtn=document.querySelector(".new");
let turnX=true;
let count=0;


let arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
  box.onclick=()=>{
    
    count++;
    if(turnX===true){
      box.innerText="X";
      turnX=false;

    }else{
      box.innerText="O";
      turnX=true;


    }
    box.disabled=true;
    
    checkWinner();
  };
});

const resetGame=()=>{
  
 
  turnX=true;
  enableBoxes();
  msg.classList.add("hide");
}

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }

  

};

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }

  
  

};


const checkWinner=()=>{
  for(let pat of arr){
    let pos1=boxes[pat[0]].innerText;
    let pos2=boxes[pat[1]].innerText;
    let pos3=boxes[pat[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
        displayWinner(pos1)
      }
    }
  }
}

displayWinner=(pos1)=>{
  msg.innerText=`Congrtulations! the winner is ${pos1}`;
  msg.classList.remove("hide");
  disableBoxes();
}
btn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);

if(count===9 && pos1!=pos2 || pos){
  msg.innerText="DRAW";
  msg.classList.remove("hide");
  disableBoxes();
}
