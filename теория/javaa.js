let userName = {
    name : 'ican',
    age : 15,

};

Object.assign(userName, { higthd: 170});
delete userName.name;
console.log(userName);