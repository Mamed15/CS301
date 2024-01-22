const users = [
    {
        id: 1,
        username: 'Yaqut',
        age: 26,
    },
    {
        id: 2,
        username: 'Nezrin',
        age: 20,
    },
    {
        id: 3,
        username: 'Yaqub',
        age: 26,
    },
    {
        id: 4,
        username: 'Murad',
        age: 29,
    },
    {
        id: 5,
        username: 'Tural',
        age: 23,
    },
    {
        id: 6,
        username: 'Murad',
        age: 30,
    },
]

let amount = 1
for(i=0; i<users.length; i++){
    if(users[i].age > 25)
    amount = amount * users[i].age
}
console.log(amount);

let sum = 0
for(i=0; i<users.length; i++){
    if(users[i].username.startsWith('Y') || users[i].username.startsWith('M')){
        sum = sum + i
    }
}

console.log(sum);

