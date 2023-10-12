'use strict';

///////////////////////////////////////
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

//////////////////////////////////////
// 1. Create one player array for each team (variables 'players1' and 'players2')

let players1 = game.players[0];
let players2 = game.players[1];
console.log(players1, players2);

/////////////////////////////////////
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// let gkTeam1 = players1.shift();
// let gkTeam2 = players2.shift();

// let gkTeam1 = [players1[0]];
// let gkTeam2 = [players2[0]];

let [gkTeam1, ...fieldPlayers1] = players1;
let [gkTeam2, ...fieldPlayers2] = players2;

console.log(
  `The goalkeeper for ${game.team1} is ${gkTeam1}, with the following players on the pitch: ${fieldPlayers1}`
);
console.log(
  `The goalkeeper for ${game.team2} is ${gkTeam2}, with the following players on the pitch: ${fieldPlayers2}`
);

//////////////////////////////////
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

let allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

///////////////////////////////////
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

let players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

////////////////////////////////////////
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

let team1 = [game.odds.team1];
let draw = [game.odds.x];
let team2 = [game.odds.team2];
console.log(team1, draw, team2);

///////////////////////////////////////
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

let printGoals = () => {};
printGoals('hi');
console.log();

/////////////////////////////////////
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

let currentOdds = [team1, draw, team2];
currentOdds.sort();
let projectedWinner = currentOdds.shift();
// let highLowOdds = currentOdds.toReversed();
// console.log(highLowOdds);
// let projectedWinner = highLowOdds.shift();
console.log(projectedWinner);

/////////////////////////////////////
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

///////////////////////////////////////////

/////////////// handrail ///////////////
// const testArr = [1, 2, 3, 4, 5, 6, 7];

// const [a, b, c, d, ...e] = testArr;
// console.log(a, b, c, d, e);
