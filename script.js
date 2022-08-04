let arr = []

for(let i = 0; i < 3; i++) {
    let num = +prompt('Введите число:')
    arr.push(num)
}
console.log(arr.reverse());