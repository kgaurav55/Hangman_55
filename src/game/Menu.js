import React from 'react';
export default  function Menu({Cricket,Movies,Dark,Countries})
{
      const containerStyle = {
      border: '2px solid #333',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0',
    //  display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center',     // Vertically center the content
      height: '200px',          // Set the height as needed
      width: '50%',             // Set the width as needed
      margin: '0 auto',         // Horizontally center the container
    };
    const marg = {
      margin: '10px',
      fontSize: '24px', // Increase font size as needed
      color: 'black', // Add a margin to create a gap
    };
    const screenStyle = {
      backgroundColor: 'lightblue', // Set your desired background color
      height: '100vh',              // Set the height to 100% of the viewport height
    };
  return (
    <div style={screenStyle}>
     <div style= {containerStyle}>
     <h1> Pick a Theme </h1>
       <button style={marg} onClick={()=>Cricket()}> Cricketers</button>
       <button style={marg} onClick={()=>Movies()}> Movies </button>
       <button style={marg} onClick={()=>Countries()}> Countries</button>
       <button style={marg} onClick={()=>Dark()}>Dark Web Series Characters</button>    
     </div>
     </div>

  ) 
}