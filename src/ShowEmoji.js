import React from 'react'
import Result from './Result';
function ShowEmoji(props) {
  function refreshPage() { window. location. reload(false); }
  //const {updatePlay}=props;
    let emojis=[];
    let emojiList;
    emojiList = ['💜','😄','❤️'];
   
    //var display = document.getElementById('emojiDisplay');
    
    function displayEmoji() {
    let emoji;
    var randomEmojiIndex;
    for(let i=0;i<=2;i++){
      randomEmojiIndex = Math.floor(Math.random() * emojiList.length);
       emoji = emojiList[randomEmojiIndex];
      emojis[i]=emoji;
    }}
  return (<>
    <div style={{alignItems:'center',textAlign:'center'}}>
      {displayEmoji()}
            <h2>
                {emojis[0]}
                {emojis[1]}
                {emojis[2]}
            </h2>
      
    </div>
    <Result emoji1={emojis[0]} emoji2={emojis[1]} emoji3={emojis[2]} />
    <br/>
    <button type="button" style={{marginLeft:"730px",backgroundColor:"#111666",color:"white",padding:"10px"}} onClick={refreshPage}>Play Again</button>
    </>
  )
}

export default ShowEmoji;
