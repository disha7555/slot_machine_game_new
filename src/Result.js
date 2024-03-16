import React from 'react'

function Result(props) {
  //const {updatePlay}=props;
    const [result, setResult] = React.useState();
    //const[emoji1,emoji2,emoji3]=props;
   const R=()=>{
   
//const handleButtonClick=()=>{
    
        // let result;
        if((props.emoji1===props.emoji2) && (props.emoji2===props.emoji3)){
          setResult('It is a match,You won');
          
            // result=document.getElementById("result");
            // result.innerHTML="it's a match";
        }
        else{
          setResult('It is not a match,try again');
         
          // result=document.getElementById("result");
          // result.innerHTML="it's not a match";
        }
          //}
        }
  return (
    <div style={{alignItems:'center',textAlign:'center'}}>
      {/* <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick()}>See result</button> */}
       <R/>        
      {result}
    </div>
  )
}

export default Result;
