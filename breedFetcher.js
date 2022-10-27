const request = require("request");

const userArg = process.argv[2];
// console.log(userArg);

request(`https://api.thecatapi.com/v1/breeds/search?q=${userArg}`, (error, response, body) => {
  // mentor advised can also use ?q= for search "query"
  console.log(error);
  if (error) {
    throw new Error("There was an error:", error.description);
  }
  const data = JSON.parse(body);
  // console.log(data);
  if (!data[0]) {
    return console.log("breed not found");
  } else if (data) {
    const searchCheck = userArg.toLowerCase();
    const nameCheck = data[0]["name"].toLowerCase();
    if (nameCheck !== searchCheck) {
      return console.log("Request failed");
    }
  }

  console.log(data[0]["description"]); //accessing the object

});