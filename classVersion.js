var basketBallGame = [{
  team: "Hawk",
  fouls: 0,
  players: [{
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  }
  ],
},
{
  team: "Heat",
  fouls: 0,
  players: [{
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  },
  {
    name: "",
    jerseyNumber: "2",
    scoredPoints: 0
  }
  ],
}
];
var band = {
  name: "Linkedin Park",
  bio: "The best band to ever do it",
  members: [{
    name: "Mike Shinoda",
    instrument: ["keys", "vocals"],
    birthDate: "March 14th, 1982",
    bio: "I love music",
  }],
  albums: [{
    name: "Business Casual",
    albumCover: "yes",
    releaseDate: "August 29th, 1988",
    length: "1",
    copyright: "xyz Company",
    songs: [{
      name: "I love you, You love me",
      trackNumber: 1,
      writers: ["Barney", "and Friends"],
      genre: "Kids song",
      duration: "00:00:47",
      songLink: "https://www.youtube.com/watch?v=RlL5RcJWNPE",
    }],
  }]
};
var firstSong = band.albums[0].songs[0].name
band.members[0].instrument.push("guitar");
console.log(firstSong);
for (i = 0; i < band.albums.length; i++) {
  band.albums[i].copyright = "abc company";
}
console.log(band.albums[0].song);



// Mint Accounts

var user = {
  accounts: [{
    acctName: "savings",
    transactions: [{
      transactionType: "groceries",
      status: "",
      description: "",
      amount: "",
    }]
  }],
  budget: [{
    acctType: "groceries",
    lineItem: "",
    amount: 60
  }]
}
// Each budget item will have a relationship with an transaction. Also the way these relationships work will be used with databases soon.
