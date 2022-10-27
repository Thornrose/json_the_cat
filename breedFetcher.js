const request = require("request");

// console.log(userArg);
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  // was using ?name=, mentor advised can also use ?q= for search "query"

    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length === 0) { // data[0] did work but -
      callback("breed not found", null);
      return;
    }
    // const searchCheck = userArg.toLowerCase(); // edge case - if search string is not exact
    // const nameCheck = data[0]["name"].toLowerCase();
    // if (nameCheck !== searchCheck) {
    //   console.log("Request failed"); // updated would be callback("Request failed", null);
    //   return;
    // }

    callback(null, data[0]["description"]); //accessing the object - will still display if search term is partial

  });
};

module.exports = { fetchBreedDescription };