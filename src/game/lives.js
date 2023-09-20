// lives cmponenet only 
// responsibility to show lives
 import React from 'react';
  export default function lives( {x} )
  { console.log("I'm from lives");

  const textStyle = {
    fontSize: '24px', // Increase font size as needed
    color: 'red',    // Change text color to red
  };
      return(
   <div>
        <span style={textStyle}>Lives Left:</span> <span style={textStyle}>{x}</span>
    </div>

      )   
  
  }