function User(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function (item) {
        console.log(`${this.email} buys ${item.name}`);
    
    };
}

/*
constructor function에서의 this의미 : 새로 생성되는 새로운 객체를 가리킴
객체정의를 위해 만들어진 constructor function의 이름은 대문자로 지정하자
*/


const item = {
    name: '스웨터',
    price: 30000,
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

