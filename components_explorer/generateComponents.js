const fs = require('fs')
const path = require('path')

let data = fs.readFileSync(__dirname + '/row.txt').toString()
let lines = data.split('\n')
lines = lines.map((line) => {
    return line.replace('\r', '')
})

let components = []

let odd = false
let compo = {}
lines.forEach(line => {

    if (!odd) {
        compo.name = line
    } else {
        compo.quantity = parseInt(line)
        compo.label = ""
        components.push(compo)
        compo = {}
    }

    odd = !odd
})

let json = JSON.stringify(components, null, 2) // generate a pretty json file

let jsonPath = path.resolve(__dirname + "/../components.json")
fs.writeFile(jsonPath, json, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!", jsonPath);
});