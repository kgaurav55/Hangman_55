import React from 'react';
export default function word({actualWord,playedLetters,fun})
{
  //console.log(actualWord);
  //const x=1;
  //const y=[]=actualWord;
  //console.log("show y")
  //console.log(y);
    const underscoreStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    };
    const textStyle = {
      fontSize: '24px', // Increase font size as needed
      color: 'black',    // Change text color to red
    };
  // here actualword is coming as a string so we are destructring it as a array of characters 
  //and amapping it that's it 
  //console.log("played letters are");
  //console.log(playedLetters);
  //const hi= "hello";
 return   (
   <div style={underscoreStyle}>
       <>
          {
              [...actualWord].map((letter)=>{
                console.log("from map");   
                return( 
                   playedLetters.has(letter)  ?
                    <>
                   <span style={textStyle}>{letter}</span>
                     {letter===' ' ? <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h>:<></> }
                    </>
                   :
                   <span  style={{
                    color: '#3498db',
                    fontSize: '24px', // Adjust the font size as needed
                    margin: '0 5px' }} 
                    >  _  </span>
                    
                )
             })                
           }    
            </>    
   </div>
  )


}