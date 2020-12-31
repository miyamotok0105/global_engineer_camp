
let peoples = [
  { id: 1, name: "taro", years: 10},
  { id: 2, name: "hanako", years: 20},
  { id: 3, name: "saitou", years: 30}
]

let p = peoples.filter(function(people){
  return people.years == 30;
});
console.log(p);

p = peoples.filter(people => people.years == 20);
console.log(p);

