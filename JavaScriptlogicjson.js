const fs = require ("fs")

let obj = {
  h : [],
  d : []
}

const data = JSON.parse(fs.readFileSync("./json-encoded.json", "utf-8"))
let temp = []
let objtemp = {}
data.forEach(element => {
  for (let key in element){
    temp.push(element[key])
    if (!objtemp[key]) {
      objtemp[key] = "a"
      obj.h.push(key)
    }
  }
});

obj.d.push(temp)

fs.writeFileSync("./json-encoded-write.json", JSON.stringify(obj, null, 2), "utf-8")