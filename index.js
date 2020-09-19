/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;

votingAge = 23;

console.log("Is voting age greater than 18? " + (votingAge > 18));

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let tempVar = 0;
let newTempVar = 10;

if (tempVar < 1) {
  tempVar = newTempVar;
}

console.log(tempVar);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999";

let number = parseInt(year);

console.log(number);

//Task d: Write a function to multiply a*b

function multNumbs(a, b) {
  return a * b;
}

console.log(multNumbs(4, 5)); // returns 20

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYearConvert(yourAge) {
  return yourAge * 7;
}

console.log(dogYearConvert(23));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogAge(years, months) {
  return years + months / 12;
}

function dogFeeder(dogYears, dogWeight) {
  if (dogYears > 0 && dogYears < 1) {
    if (dogYears > 0.16666 && dogYears <= 0.333333) {
      return dogWeight * 0.1;
    } else if (dogYears > 0.333333 && dogYears <= 0.583333) {
      return dogWeight * 0.05;
    } else if (dogYears > 0.583333 && dogYears <= 12) {
      return dogWeight * 0.04;
    }
  } else {
    if (dogWeight <= 5) {
      return dogWeight * 0.05;
    } else if (dogWeight > 5 && dogWeight <= 10) {
      return dogWeight * 0.04;
    } else if (dogWeight > 10 && dogWeight <= 15) {
      return dogWeight * 0.03;
    } else {
      return dogWeight * 0.02;
    }
  }
}

console.log(dogFeeder(dogAge(1, 0), 15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function convertToString(choice) {
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playerChoice(choice) {
  choice = choice.charAt(0);
  switch (choice) {
    case "r":
      return 1;
    case "p":
      return 2;
    case "s":
      return 3;
    case "c":
      let x = Math.ceil(Math.random() * 3);

      return x;
  }
}

function outcome(one, two) {
  if (one == two) {
    return "We have a Tie.\n";
  } else {
    switch (one) {
      case 1:
        if (two == 2) {
          return "Player Two Wins!\n";
        } else {
          return "Player One Wins!\n";
        }
      case 2:
        if (two == 3) {
          return "Player Two Wins!\n";
        } else {
          return "Player One Wins!\n";
        }
      case 3:
        if (two == 1) {
          return "Player Two Wins!\n";
        } else {
          return "Player One Wins!\n";
        }
    }
  }
}

function playGameConsole(playerOne, playerTwo) {
  let playerOneChoice = playerChoice(playerOne.toLowerCase());
  let playerTwoChoice = playerChoice(playerTwo.toLowerCase());

  console.log(
    outcome(playerOneChoice, playerTwoChoice) +
      `Player One chose ${convertToString(
        playerOneChoice
      )} and Player Two chose ${convertToString(playerTwoChoice)}`
  );
}

playGameConsole("rock", "rock");
playGameConsole("rock", "computer");

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
  return km / 1.609;
}

console.log(kmToMiles(1));
console.log(kmToMiles(2));
console.log(kmToMiles(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function ftToCm(ft) {
  return ft * 30.48;
}

console.log(ftToCm(1));
console.log(ftToCm(2));
console.log(ftToCm(5));
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(numb) {
  for (i = numb; i > 0; i--) {
    console.log(
      `${numb} bottles of soda on the wall, ${numb} bottles of soda, take one down pass it around ${
        numb - 1
      } bottles of soda on the wall.`
    );
    numb--;
  }
}

console.log(annoyingSong(3));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalc(score) {
  if (score < 60) {
    return "F";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(gradeCalc(100));
console.log(gradeCalc(85));
console.log(gradeCalc(75));
console.log(gradeCalc(65));
console.log(gradeCalc(49));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

function countVowelsOnly(string) {
  let stringArray = string.toLowerCase().split("");
  let vowelCount = 0;
  stringArray.forEach((element) => {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    if (vowels.includes(element)) {
      vowelCount++;
    }
  });
  return vowelCount;
}

console.log(countVowelsOnly("Hello!"));
console.log(countVowelsOnly("sUpercAlifrAgilisticExpialidocious"));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function playGamePrompt(playerOne, playerTwo) {
  let playerOneChoice = playerChoice(playerOne.toLowerCase());
  let playerTwoChoice = playerChoice(playerTwo.toLowerCase());

  window.alert(
    outcome(playerOneChoice, playerTwoChoice) +
      `Player one chose ${convertToString(
        playerOneChoice
      )} and player two chose ${convertToString(playerTwoChoice)}.`
  );
}

function initGame() {
  let playerTwo = window.prompt(
    "Do you want to play against another player locally? (y/n)\n(choosing 'n' will play the computer)"
  );
  let gameScript = "(R)ock, (P)aper or (S)cissors?";
  switch (playerTwo.toLowerCase()) {
    case "n":
      let userChoice = window.prompt(gameScript);
      playGamePrompt(userChoice.toLowerCase(), "computer");
      break;
    case "y":
      let userChoiceOne = window.prompt("Player 1: " + gameScript);
      let userChoiceTwo = window.prompt("Player 2: " + gameScript);
      playGamePrompt(userChoiceOne.toLowerCase(), userChoiceTwo.toLowerCase());
      break;
  }
}
