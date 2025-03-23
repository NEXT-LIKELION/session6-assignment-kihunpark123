const person = {
    name: "David",
    city: "London",
    age: 30,
};

for (let key in person) {
    if (typeof person[key] === "string") {
        person[key] += "(확인됨)";
    }
}

console.log(person);
