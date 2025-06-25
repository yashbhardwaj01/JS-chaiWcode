class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);

    }
// static avoids the access 

    static createId(){
        return `123`
    }
}

const yash = new User("bhardwaj")

// console.log(yash.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
