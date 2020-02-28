console.log("Abstraction and Rendering slides javascript");


// Tic Tac Toe

var board = [["O", "", "0"],
["O", "X", "X"],
["X", "X", "0"],
];

console.log("");
console.log("");
console.log("Tic Tac Toe Board:")
console.log(board);

// Pokemon

var pokemon = [
  {
    name: "Bulbasuar",
    type: "Grass",
    level: 9,
    hp: 30
  },
  {
    name: "Charmander",
    type: "Fire",
    level: 10,
    hp: 40
  },
  {
    name: "Squirtle",
    type: "Water",
    level: 11,
    hp: 50
  }
];

console.log("");
console.log("");
console.log('The Pokemon are...');
console.log(pokemon);


// Basketball Game

var basketBallGame = [
  {
    teamName: "The Space Dragons",
    teamFouls: 0,
    playersPlaying: 0,
    players: [{
      playerName: "",
      jerseyNumber: 10,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 11,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 15,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 12,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 42,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 88,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 9,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 2001,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },

    ]
  },
  {
    teamName: "The Spirit Animals",
    teamFouls: 0,
    playersPlaying: 0,
    players: [{
      playerName: "",
      jerseyNumber: 10,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 11,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 15,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 12,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 42,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 88,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 9,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },
    {
      playerName: "",
      jerseyNumber: 2001,
      pointsScored: 0,
      foulsAgainst: 0,
      foulsCommited: 0,
      isPlaying: false,
    },

    ]
  }



];

console.log("");
console.log("");
console.log("Basketball Game:")
console.log(basketBallGame)

// Band on Spotify

var band = [{
  bandName: "The Smith Street Band",
  biography: "We're from Australia mate and we rock!"
},
[{
  albumName: "All of them",
  releaseDate: "01/02/2020",
  tracks: [{
    trackNumber: "1",
    trackTitle: "Forrest",
    isTop5: true
  }, {
    trackNumber: "2",
    trackTitle: "All Bangers",
    isTop5: true
  }, {
    trackNumber: "3",
    trackTitle: "Oi oi oi!",
    isTop5: true
  }]
}]
];

console.log("");
console.log("");
console.log("Spotify Band:");
console.log(band);


// Mint Budget

var user = {
  accounts: [{
    accountName: "groceries",
    transactions: [{
      transactionType: "Publix",
      amount: 9.54,
    },
    {
      transactionType: "Farmers Market",
      amount: 22.43
    }]
  },
  {
    accountName: "shopping",
    transactions: [{
      transactionType: "Amazon",
      amount: 19.54,
    },
    {
      transactionType: "Wish",
      amount: 55.42
    }]
  }],

}
console.log("");
console.log("");
console.log("Mint Accounts and Budgets:");
console.log(user);;


// Each budget item will have a relationship with an transaction. Also the way these relationships work will be used with databases soon.
