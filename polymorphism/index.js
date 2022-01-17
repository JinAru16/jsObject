class User {
    constructor(email, birthdate) {
        this.email = email;
        this.birthdate = birthdate;
    }

    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }
}

// 중복되는 내용을 줄이기 위해 상속. extends로 상속함
class PremiumUser extends User {
    constructor(email, birthdate, level) {
        super(email, birthdate)//반드시 super를 호출해서 부모클래스에서 호출하고자 하는 내용을 호출해야 함
        this.level = level;
    }
    streamMusicForFree() {
        console.log(`Free music streaming for ${this.email}`);
    }
    // 부모 클래스에서 쓰는 buy메소드와는 다른  buy내용을 원하면 이렇게 따로 한번 더 써주면 됨.
    buy(item) {
        console.log(`${this.email} buys ${item.name} with a 5% discount`)
    }

}

const item = {
    name : 'iPad',
    price: '$1000'
}


const pUser1 = new PremiumUser('tony@goolge.com', '1992-03-22', 5);
console.log(pUser1.email);
console.log(pUser1.birthdate);
console.log(pUser1.level);
pUser1.streamMusicForFree();
pUser1.buy(item)