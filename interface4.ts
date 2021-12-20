interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "mark",
  age: 20,
  hello: function (): void {
    console.log(`안녕 ${this.name}.`);
  }
};

const p42: Person4 = {
  name: "mark",
  age: 20,
  hello(): void {
    console.log(`안녕 ${this.name}.`);
  }
};

// const p43: Person4 = {
//   name: "mark",
//   age: 20,
//   hello: (): void => {
//     console.log(`안녕 ${this.name}.`);   // 화살표함수에서 this는 함수 내의 this를 가르키지만 이 함수내에 this가 없어서 전역this를 가르킴, 이것도 오류라서 안됨
//   }
// };

p41.hello();
p42.hello();