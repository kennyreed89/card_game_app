const Suits = ["H", "S", "D", "C"];
const value = [
  "14",
  "13",
  "12",
  "11",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

//this will create a card
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

//this will create 4 suits of cards 2 - 14
class Deck {
  constructor() {
    this.deck = [];
    this.suits = ["H", "S", "D", "C"];
    this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  }

  createDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < value.length; x++) {
        this.deck.push(new Card(suits[i], value[x]));
      }
    }
  }

  //this will shuffle deck
  freshDeck() {
    const freshDeck = [];
    for (let i = 0; i < 52; i++) {
      let randomPosition = (this.deck.length - 1) * Math.random();
      let randomItem = this.deck.splice(randomPosition, 1);
      freshDeck.push(randomItem);

      return freshDeck;
    }
  }

  //this will split deck in half and give each player 26 cards
  dealCards(freshDeck) {
    let dealtCards = freshDeck.splice(0, 26);
    this.players[0].push(dealtCards);
    let dealtRestCards = freshDeck.splice(0, 26);
    this.players[1].push(dealtRestCards);

    console.log("Cards Dealt");
  }
}

class Players {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.held = [];
  }
}

class Game {
  constructor() {
    this.players = [];
  }
}

function start() {}
function playGame() {}

//starting game and create players
start();
{
  this.players.push(new Players("Player1"));
  this.players.push(new Players("Player2"));
  {
  }
  console.log("Ready,Set, War!");

  //shuffle
  let playerDeck = new Deck();
  playerDeck.createDeck();
  var freshDeck = playerDeck.freshDeck();

  playerDeck.dealDeck(this.players, freshDeck);

  this.playGame();
  this.endGame();
}

playGame();
{
  let player1 = this.players["Player 1"];
  let player2 = this.players["Player2"];
  let roundWon = " ";

  while (player1.held.length !== 0 && player2.held.length !== 0) {
    let player1Card = player1.held.pop();
    let player2Card = player2.held.pop();
    if (player1Card.value > player2Card.value) {
      roundWon = player1;
      player1.score += 1;
    } else if (player2Card.value > player1Card.value) {
      roundWon = player2;
      player2.score += 1;
    }
  }
}

endGame();
{
  let winnerTotal = 0;
  let player1 = this.players[0];
  let player2 = this.players[1];

  //winner is decided here
  if (player1.score > player2.score) {
    winnerTotal = player1.score;
    console.log("Finished" + player1.name + player1.score + "wins!");
  } else if (player1.score < player2.score) winnerTotal = player2.score;
  console.log("Finished" + player2.name + player2.score + "wins!");
}
let game = new Game();
game.start();
