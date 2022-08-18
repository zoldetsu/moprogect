const person = new Object({
    name:'maxim',
    age: 25,
    greet: function(){
        console.log('greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('hello');
}

Object.prototype.say = function(){
    console.log(`${greet} ,${lena.name}`);
}

const lena = Object.create(person)
lena.name = 'elena'


const str = new String('i am string')
 