const array1 = [{"abc":1,"cd":2},{"abc":4,"cd":5}]
let abc = JSON.stringify(array1)
let cd = JSON.parse(abc)
console.log(cd[0].abc);