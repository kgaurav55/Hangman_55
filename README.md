## Hangman Game
![Screenshot (8)](https://github.com/kgaurav55/Hangman_55/assets/132058010/6b66576d-a75f-4ae2-84e8-217611eea7b7)
![Screenshot (9)](https://github.com/kgaurav55/Hangman_55/assets/132058010/ca9cfbbe-6eb0-4078-8674-f9d61fffdc02)
![Screenshot (10)](https://github.com/kgaurav55/Hangman_55/assets/132058010/074ee0e2-a0de-40f6-9981-136e0117c390)
![Screenshot (13)](https://github.com/kgaurav55/Hangman_55/assets/132058010/b96c5e63-b29a-4b9b-ab7e-218ec7f6b4b1)
![Screenshot (11)](https://github.com/kgaurav55/Hangman_55/assets/132058010/e5e8bd04-c7eb-4cc0-810d-5ef29318db1f)


## About the project
The Hangman Game project is a fun and interactive web-based game developed using React.js and JavaScript. This project showcases the implementation of a classic word-guessing game where players try to guess a hidden word one letter at a time. With an intuitive user interface and engaging gameplay.

Technologies Used:
React.js: A popular JavaScript library for building user interfaces.
JavaScript: The core programming language used to implement the game's logic and functionality.
HTML/CSS: Standard web technologies for structuring the game's layout and styling.

## Project File Description 
## public/ 
This directory contains public assets that are accessible directly from the browser. It typically includes your index.html file, which is the entry point for your React application.


## .src/
This is the main source code directory for your React application.
  ## .game/
     This directory contain the game-related components and logic for Hangman game. Inside, it has several JavaScript files that are components or modules used 
     in the game.
     
 ## Menu.js:
   This component serves as the main menu of your Hangman game.
   It presents various themes or categories to the user, allowing them to choose a theme for the game.
  Once a theme is selected, it likely navigates the user to the Play.js component to start playing the game with the chosen theme.
  
## Play.js:
  This component is responsible for initiating gameplay.
  It appears to be a starting point where users can click to begin the game.
  After clicking, it redirects the user to the Menu.js component to select a theme before actual gameplay starts.
  
## letters.js:
 This component seems to handle the display of letters that can be guessed by the player.
 It presents all 26 characters (A-Z), with letters played (guessed) shown in gray color.
 Unplayed letters are displayed in blue color.
 It likely handles the logic for selecting and guessing letters, updating the display accordingly.
 
## lives.js:
  This component calculates and displays the remaining lives or guesses the player has.
  It calculates lives left based on the actual word to be guessed and the wrong letters played.
  This component may also provide visual feedback to the player about their remaining lives.
  
## word.js:
This component is responsible for displaying the word that the player is trying to guess.
It shows the word with placeholders for unguessed letters, updating them as the player makes correct guesses.
It provides a visual representation of the player's progress in guessing the word.

## index.js:
As the entry point of the game, this component manages the overall game state.
It likely maintains state variables such as the played letters, the actual word to be guessed, and the theme.
It orchestrates the flow of data between different components, passing relevant information and handling user interactions.


In the project directory, you can run 
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Demo
Here is a live working demo: https://hangman55.netlify.app












