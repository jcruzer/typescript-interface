"use strict";
function hello3(person) {
    console.log(`안녕 ${person.name}.`);
}
const p31 = {
    name: "mark",
    age: 30,
};
const p32 = {
    name: "aaa",
    systers: ["bbb", "ccc"],
};
const p33 = {
    name: "asdasasd",
    father: p31,
    mother: p32,
};
