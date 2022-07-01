const { readFile, writeFile } = require("fs");
console.log("Start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Here is the result ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("Done with this task");
            }
          }
        );
      }
    });
  }
});
console.log("Starting next task")