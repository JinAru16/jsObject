class User {
    constructor(email, birthdate) {
        this.email = email;
        this.birthdate = birthdate;
    }
    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }
}

const item = {
    name: 'iPad',
    price: '$1000',
};


const user1 = new User('123@google.com', '1992-02-12');
const user2 = new User('1234@gmail.com', '1995-03-21');
const user3 = new User('321@gmail.com', '1992-12-03');

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);


console.log(user1.birthdate);
user1.buy(item);
console.log(user1);