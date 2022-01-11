console.log("hello world")

const user = {
    email : "wjdcksdnr11@naver.com",
    id : "jinaru16",
    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }
}

const item = {
    name:"스웨터",
    price : 30000,
}

console.log(user.email);
console.log(user.id);
user.buy(item);