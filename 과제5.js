const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    return obj[key] !== undefined ? obj[key] : "키 없음";
}

console.log(getUserData(user, "name"));
console.log(getUserData(user, "email"));
console.log(getUserData(user, "age"));
