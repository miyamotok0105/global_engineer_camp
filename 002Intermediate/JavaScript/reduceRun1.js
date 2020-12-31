let peoples = [
  { id: 1, name: "taro", years: 10},
  { id: 2, name: "hanako", years: 20},
  { id: 3, name: "saitou", years: 30}
]

console.log("============");
console.log("集計する");
let totalYears = peoples.reduce(function(total, people){
  return total + people.years
}, 0);
console.log(totalYears);


totalYears = peoples.reduce((total, people) => total + people.years, 0);
console.log(totalYears);

console.log("============");
console.log("古いのを選ぶ");

let mostExpPilot = peoples.reduce(function(oldest, people) {
  // 
  return (oldest.years || 0) > people.years ? oldest : people;
}, {});
console.log(mostExpPilot);

