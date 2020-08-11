var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

let totalJediScore = 0;
for (let index = 0; index < personnel.length; index++) {
  if(personnel[index].isForceUser == true){
    totalJediScore += personnel[index].pilotingScore + personnel[index].shootingScore;
  }
}
console.log(totalJediScore);

totalJediScore = personnel
  .filter(function(person){
    return person.isForceUser == true;
  })
  //横にサマリー
  .map(function(jedi){
    return jedi.pilotingScore + jedi.shootingScore;
  })
  //全行を縦にサマリー
  .reduce(function(acc, score){
    return acc + score;
  }, 0);
console.log(totalJediScore);

totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
console.log(totalJediScore);


