const fs = require("fs");

fs.readFile("1-counter.md", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

for (let i = 0; i < 10; i++) {
  console.log("Reading from file is not done yet");
}
