interface Person1 {
  name: string;
  age: number;
}

// 이런식으로 쓰면 매게변수가 길어지고 보기 힘듬
// 그래서 interface로 타입지정까지 해버려서 사용

function hello1(person: Person1): void {
  // function hello1(person: {name: string, age: number} ): void{
  console.log(`안녕 ${person.name}입니다.`);
}

// 사용자입장에서도 p1에 매개변수로 들어가는애들의 타입들을 지정하기 번거로우니까 interface로 지정된거 쓰기
const p1: Person1 = {
  //const p1: {name: string, age: number} = {
  name: 'Mark',
  age: 20,
};

hello1(p1);