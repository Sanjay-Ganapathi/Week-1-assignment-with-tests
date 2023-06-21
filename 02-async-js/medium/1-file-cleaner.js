fs = require("fs");
fs.readFile("sample.txt", function (err, data) {
  if (err) return console.error(err);
  str = data.toString();
  str = str.replace(/\s+/g, " ");

  fs.writeFile("sample.txt", str, function (err) {
    if (err) return console.error(err);
    console.log("File written!");
  });
});
