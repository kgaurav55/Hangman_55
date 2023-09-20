import React from 'react';
export default  function Play ()
{
  const containerStyle = {
    border: '2px solid #333',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
   // display: 'flex',
    justifyContent: 'center', // Horizontally center the content
    alignItems: 'center',     // Vertically center the content
    height: '300px',          // Set the height as needed
    width: '70%',             // Set the width as needed
    margin: '0 auto',         // Horizontally center the container
  };
  const h ={
    alignItems: 'center',
  };
  return (
      <div style={containerStyle}> 
         <h2 style ={h}>Playing Hangman</h2>
         <p> Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words.</p>
          <p>You will be presented with a number of blank spaces representing the missing letters you need to find.</p>
          <p>Use the keyboard to guess a letter (I recommend starting with vowels).</p>
          <p>If your chosen letter exists in the answer, then all places in the answer where that letter appear will be revealed.</p>
          <p>After you've revealed several letters, you may be able to guess what the answer is and fill in the remaining letters.</p>
          <p>Be warned, every time you guess a letter wrong you loose a life and the hangman begins to appear, piece by piece</p>
          <p>Solve the puzzle before the hangman dies.</p>
      </div>   
  )
}