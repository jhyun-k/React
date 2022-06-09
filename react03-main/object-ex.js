const obj = {
    name : '사과',
    price : '1500',
    weight : '20g'

}

console.log(obj.name);

const keyValue =  Object.keys(obj)
const valueList = Object.values(obj)
const entries = Object.entries(obj)
console.log(keyValue);
console.log(valueList);
console.log(entries);