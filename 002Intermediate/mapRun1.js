
let peples = [
  { id: 1, name: "taro"},
  { id: 2, name: "hanako"},
  { id: 3, name: "saitou"}
]

// forEachもmapも結果が同じになるように書ける

let peopleIds = [];
peples.forEach(function (people) {
  peopleIds.push(people.id);
})

console.log(peopleIds);

peopleIds = [];
peopleIds = peples.map(function (people) {
  return people.id
});

console.log(peopleIds);

peopleIds = [];
peopleIds = peples.map(people => people.id);
console.log(peopleIds);


