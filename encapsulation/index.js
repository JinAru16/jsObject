class User {
    constructor(email, birthdate) {
        this.email = email;
        this.birthdate = birthdate;
    }
    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }

    get email() {// 프로퍼티의 값을 읽는 용도로 사용됨. ()안에 파라미터를 써 줄 필요가 없음.
        return this._email; // 이렇게 작성하면 _email을 사용할 필요가 없고 email로 작성가능
    }


    set email(address) {// 그냥 email은 set 메소드의 이름일 뿐. 진짜 이메일 주소는 _email에 할당되는것. 보통 '_'를 붙이면 숨기고 싶은 프로퍼티의 이름을 나타내는 것임.
        if (address.includes('@')) {
            this._email = address;
        } else {
            throw new Error('invalid email address');
        }
    }
}

const item = {
    name: 'iPad',
    price: '$1000',
};


const user1 = new User('123@google.com', '1992-02-12');
user1.email = 'notError@gmail.com'
console.log(user1._email)
console.log(user1.email)


