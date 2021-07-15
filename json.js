const json = require("fs");
const { stringify } = require("querystring");
const value = {
    id: 1,
    name: "Prabhat",
    age: 19,
    college: "IIIT"
}
console.log(value);
const jsonvalue = JSON.stringify(value);
console.log(jsonvalue);
json.writeFile("readme.json", jsonvalue, (err) => {
    console.log("Data has written in the file successfully.")
    console.log("Error : " + err);

});