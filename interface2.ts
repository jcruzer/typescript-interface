interface Person2 {
  name: string;
  age?: number;   // 타입 : 앞에 ?를 달아주면 있을수도 있고 없을 수도 있고
}

function hello2(person: Person2): void {
  console.log(`안녕 ${person.name}.`)
}

hello2({ name: "makr", age: 20 });
hello2({ name: "aaa" });