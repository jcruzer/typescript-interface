interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;   // 이런식으로 [index: 타입] 하면 속성(property)이름을 어떤걸로도 나중에 지정 가능
  // indexable property
}

function hello3(person: Person3): void {
  console.log(`안녕 ${person.name}.`);
}

const p31: Person3 = {
  name: "mark",
  age: 30,
};

const p32: Person3 = {
  name: "aaa",
  systers: ["bbb", "ccc"],
};

const p33: Person3 = {
  name: "asdasasd",
  father: p31,
  mother: p32,
};