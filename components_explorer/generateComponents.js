const fs = require('fs')

let data = fs.readFileSync('row.txt').toString()
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


let json = JSON.stringify(components)

fs.writeFile("output.json", json, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});