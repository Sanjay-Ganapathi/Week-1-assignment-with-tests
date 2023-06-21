const fs = require("fs");

data = "";
fs.writeFile(
  "4-write-to-file.md",
  "\n Writing from node fs",
  { flag: "a", encoding: "utf-8" },
  (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("Done writing");
  }
);
