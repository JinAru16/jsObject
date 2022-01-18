function createUser(email, birthdate) {
    let _email = email;
  
    const user = {
      birthdate,
  
      get email() {
        return _email;
      },
  
      set email(address) {
        if (address.includes('@')) {
          _email = address;
        } else {
          throw new Error('invalid email address');
        }
      },
    };
  
    return user;
  }
  
  const user1 = createUser('chris123@google.com', '19920321');
  console.log(user1.email);