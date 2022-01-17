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

}

const pUser1 = new PremiumUser('tony@goolge.com', '1992-03-22', 5);
console.log(pUser1.email);
console.log(pUser1.birthdate);
console.log(pUser1.level);
pUser1.streamMusicForFree();