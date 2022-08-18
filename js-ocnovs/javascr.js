const people = [
    {comment: 'хорош',year: 2001},
    {comment: 'молодец',year: 2002},
    {comment: 'гуд',year: 1970},
    {comment: 'топ',year: 2003},
];



const onecom = people.find(person => person.year === 2002);
console.log(onecom)


// if (onecom <= 1){
//     console.log('rich');
// }