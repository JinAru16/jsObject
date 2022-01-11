function createUser(email, birthdate) {
    const user = {
        email: email,
        birthdate: birthdate,
        
        /*
        위에처럼 프로퍼티랑 파라미터의 이름이 같을 경우 값을 대입하는 부분 상략 가능
        email,
        birthdate,
        이렇게만 적어도 무방
        */
        
        buy(item) {
            console.log(`${this.email} buys ${item.name}`);
        },

    };
    return user;  
};

const item = {
    name : 'iPad',
    price: '$1000'
}


const user1 = createUser('user1@user.com', '1992-03-02');
const user2 = createUser('user2@user.com', '1995-08-23');

console.log(user1.email);
console.log(user2.email);

user1.buy(item);
user2.buy(item);

console.log(user1)