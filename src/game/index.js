import React,{useState} from 'react';
import Lives from './lives';
import Word from './word';
import Letters from './letters';
import Menu from './Menu';
import Play from './Play';
const M=6; 
export default function Game()
{ 
  //css  part
      
   const textStyle = {
       fontSize: '24px', // Increase font size as needed
       color: 'black',  // Change text color to red
       display: 'flex',
       justifyContent: 'center',
       };
   const containerStyle = {
      border: '2px solid #333',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0',
     // display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center',     // Vertically center the content
      height: '270px',          // Set the height as needed
      width: '48%',             // Set the width as needed
      margin: '0 auto',          // Horizontally center the container
     };
    const containerStyle1 = {
      border: '2px solid #333',
      padding: '1px',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0',
     // display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center',     // Vertically center the content
      height: '120px',          // Set the height as needed
      width: '20%',             // Set the width as needed
     // margin : screenLeft,         // Horizontally center the container
    };
    const marg = {
          margin: '20px 0', // Add a margin to create a gap
        };
    const containerStyle3= {
          border: '2px solid #333',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#f0f0f0',
    
          display: 'flex',
          justifyContent: 'center', // Horizontally center the content
          alignItems: 'center',
          flexDirection: 'column',     // Vertically center the content
          height: '150px',          // Set the height as needed
          width: '25%',             // Set the width as needed
          margin: '0 auto ',      
          marginTop: '100px',    // Horizontally center the container
      };   
   const messageStyle = {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      };
   const screenStyle = {
        backgroundColor: 'lightblue', // Set your desired background color
        height: '100vh',              // Set the height to 100% of the viewport height
      };
      const headerStyle = {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      position: 'relative', // Added position relative
    };
    const lineStyle = {
        width: '100%',
        height: '2px',
        backgroundColor: 'red', // Background color for the line
        position: 'absolute',
        bottom: '0', // Positioned at the bottom
        left: '0',
      };
    const topMessageStyle = {
        position: 'absolute',
        top: '35px', // Adjust the top position as needed
        left: '30%',
        transform: 'translateX(-50%)',
        backgroundColor: 'red', // Background color for the top message
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
      };  
   //business Logic   
  const[actualWord,setActualWord]=useState("");
  const [theme,settheme]=useState("empty");
  const[cnt ,setcnt]=useState(1);
  const[playedLetters,setPlayedletters]=useState([" "]);
  const word_set=new Set([... actualWord]);
  const played_set = new Set([...playedLetters]);
  const wrongLetters=playedLetters.filter((letter)=>
  { return !word_set.has(letter);});
  const lives= M-wrongLetters.length; 
  const isRunning=lives&&actualWord;
  // convert a string into the set in the ja
  const isWon=  isRunning && [...word_set].reduce((acc, curr) => {
      if (!played_set.has(curr)) return false;
      return acc;
  },true)
  console.log("ives"+lives);
  console.log("IS RUNNING"+isRunning); console.log("IS WON "+isWon);

  //this function is uesd when user types the the letter 
  const guess= function (letter)
     {
          // setPlayedletters((prev)=>[...prev,letter]);
         //if(letter==' ')
           // return; 
           console.log("entered in guess function");
            setPlayedletters( function(prev)
                     {
                        return [...prev,letter]  // this will update the state 
                     })
           return "hello";
    }
    // From here on various themes logic 
   const Cricket=()=>{
      // all these states changes are done at once simultenously 
      // then rerendring of the componenets starts actually 
      const data =["rohit sharma", "shubman gill", "virat kohli", "kl rahul", "ishan kishan","hardik pandya", "ravindra jadeja", "washington sundar", "jasprit bumrah", "kuldeep yadav", "mohammed siraj"];
      console.log("cricket");
      settheme("cricket");
      console.log("theme:"+theme);
      console.log("cric2");
      const word = data[Math.floor(Math.random() * data.length)];
      setActualWord(word);
      setPlayedletters([" "]);
      setcnt(1);
   }
   const Movies=()=>{
      // all these states changes are done at once simultenously 
      // then rerendring of the componenets starts actually 
      const data =["veer zaara","dhoom","gold","bhag milkha bhag","brothers","kgf","pushpa","inception"];
      console.log("cricket");
      settheme("Movies");
      console.log("theme:"+theme);
      console.log("cric2");
      const word = data[Math.floor(Math.random() * data.length)];
      setActualWord(word);
      setPlayedletters([" "]);
      setcnt(1);
   }
   const Countries=()=>{
      // all these states changes are done at once simultenously 
      // then rerendring of the componenets starts actually 
      const data =["bharat","china","us","nepal","bhutan","iraq","usa","england","jamaica"]
      settheme("countries");
      console.log("theme:"+theme);
      console.log("cric2");
      const word = data[Math.floor(Math.random() * data.length)];
      setActualWord(word);
      setPlayedletters([" "]);
      setcnt(1);
   }
   const Dark=()=>{
      // all these states changes are done at once simultenously 
      // then rerendring of the componenets starts actually 
      const data =["jonas","martha","ulrich nielson","tronte nielson","bartosz","noaha","helge doppler"];
      console.log("cricket");
      settheme("Dark Web Series Characters");
      console.log("theme:"+theme);
      console.log("cric2");
      const word = data[Math.floor(Math.random() * data.length)];
      setActualWord(word);
      setPlayedletters([" "]);
      setcnt(1);
   }
return (
   <>
       {!lives ? <>
            <div style={messageStyle}>
            <div style={topMessageStyle}>LOST! Correct Answer</div>
            <h1>{actualWord}</h1>
            </div> 
            <Menu Cricket={Cricket} Dark={Dark} Countries={Countries} Movies={Movies}/>
            <Play/>
          </>:<></>}

       {isRunning&& !isWon ?
            <div style={screenStyle}>
            <div style={containerStyle}>
            <span style={textStyle}>({theme})</span>
            <Lives x={lives}/>
            <div style={marg}>
            <Word actualWord={actualWord} playedLetters={played_set} guess={guess} />
            </div>
            <Letters playedLetters={played_set} onSelect={guess}/>
             <Play/>
            </div>
            </div>
             : <></>} 
        {!isRunning && lives ?
            <> 
                {cnt ? 
                    <>  
                        <div style={screenStyle}>
                        <div style={headerStyle}>The Word Search</div>
                        <div style={lineStyle}></div>
                        <div style={containerStyle3}>
                        <h2> WELCOME TO HANGMAN </h2>
                        <button style={textStyle} onClick={()=>{
                                setcnt(0);
                         }}>Play </button>  
              
                        </div>
                        </div>
                     </>
                        :<></>}
                {!cnt ?  
                          <>
                 <Menu Cricket={Cricket} Dark={Dark} Countries={Countries} Movies={Movies}/>
                  <Play/>
                  </>: <></>}
                  </> :<></>}       
    {isWon ? <>
       <div style={messageStyle}>
        <h2>WON!</h2>
          </div>
         <Menu Cricket={Cricket} Dark={Dark} Countries={Countries} Movies={Movies}/>
         <Play/>
         </>:<></>}
       </>
)
}
