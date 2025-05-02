const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
const filteredWords = [];

for (let word of words) {
    if (word.length >= 5) {
        filteredWords.push(word);
    }
}

console.log(filteredWords);
