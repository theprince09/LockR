const fs = require("fs");

const raw = fs.readFileSync("diceware.wordlist.txt", "utf-8");

const words = raw
  .split("\n")
  .map(line => {
    const parts = line.trim().split(/\s+/); // 👈 handles space + tab
    return parts[1];
  })
  .filter(Boolean);

fs.writeFileSync(
  "wordlist-en.json",
  JSON.stringify(words, null, 2)
);

console.log("Wordlist generated:", words.length);
