import React from 'react'

//import ReactDOM from "react-dom/client";

function SlotM() {
  let emojis=[];
  let emojiList;
  const [result, setResult] = React.useState();
  emojiList = ['💜','😄','❤️'];
 
  //var display = document.getElementById('emojiDisplay');
  
  // function displayEmoji() {
  let emoji;
  var randomEmojiIndex;
  for(let i=0;i<=2;i++){
    randomEmojiIndex = Math.floor(Math.random() * emojiList.length);
     emoji = emojiList[randomEmojiIndex];
    emojis[i]=emoji;
  }

  const handleButtonClick=()=>{
    
// let result;
if((emojis[0]===emojis[1]) && (emojis[1]===emojis[2])){
  setResult('it is a match');
    // result=document.getElementById("result");
    // result.innerHTML="it's a match";
}
else{
  setResult('it is not a match');
  // result=document.getElementById("result");
  // result.innerHTML="it's not a match";
}
  }
  
  //display.innerHTML = 
  return (
    <>     
     <div style={{alignItems:'center',textAlign:'center'}}>
            <h2>
                {emojis[0]}
                {emojis[1]}
                {emojis[2]}
            </h2>
            <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick()}>See result</button>
            <div id="result1">{result}</div>
     </div>
    </>
//}
//displayEmoji();
);
}

export default SlotM;
