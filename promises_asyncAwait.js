const { readFile, writeFile } = require("fs");
//We can make a fucntion by overselves and then return a promise
//But we have a simpler way to do that

//1st way
const util = require("util");
const readfilePromise = util.promisify(readFile);
const writefilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readfilePromise("./modules/content/first.txt", "utf8");
    const second = await readfilePromise(
      "./modules/content/second.txt",
      "utf8"
    );
    await writefilePromise(
      "./modules/content/madewithPromiseAwait.txt",
      `This is awesome: ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

//2nd way is by doing this at start and we are good to go
//const {readFile, writeFile}=require('fs').promises