import React from 'react';
const ALL_ALPHABETS=[..."abcdefghijklmnopqrstuvwxyz"];
export default function Letters({playedLetters,onSelect})
{
   const buttonSize = '40px'; // Adjust button size as needed
   const buttonColor = '#3498db'; // Adjust button color as needed
   const buttonStyle = {
     width: buttonSize,
     height: buttonSize,
     backgroundColor: buttonColor,
     color: 'white',
     border: '1px solid #ccc',
     borderRadius: '50%',
     margin: '5px',
     display: 'inline-flex',
     justifyContent: 'center',
     alignItems: 'center',
     cursor: 'pointer',
   };
   const textStyle = {
      fontSize: '24px', // Increase font size as needed
      color: 'black',    // Change text color to black
    };
   console.log("i'm rendring letters");
    return (
    <div>
       {ALL_ALPHABETS.map((alphabet)=>( 
        <button   style={{
         ...buttonStyle,
         backgroundColor: playedLetters.has(alphabet) ? 'gray' : buttonStyle.backgroundColor,
       }}
           onClick={()=>onSelect(alphabet)}
            disabled={playedLetters.has(alphabet)}
          >
            <span style={textStyle}>{alphabet}</span>
                    
          </button>
       ))}
    </div>
    )
}