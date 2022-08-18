console.log('reques data');

// setTimeout(() =>{
//     console.log('preparing data');

    // const setff = {
    //     server: 'aws',
    //     port: 2000,
    //     status: 'active',
    // }

//     setTimeout(() => {
//         setff.modified = true
//         console.log('data resived',setff);
//     },2000)
// },2000)


const Wibe = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('preparing data');
        const setff = {
            server: 'aws',
            port: 2000,
            status: 'active',
        }
        resolve(setff)
    },2000)
})

// Wibe.then(data => {
//     // console.log('promised resolved',data);
//     const Wibe2 = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         },2000)
//     })
//     Wibe2.then(client => {
//         console.log('data received',client);
//     })
// })

// Wibe.then(data => {
//     // console.log('promised resolved',data);
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         },2000)
//     })
//     // Wibe2.then(client => {
//     //     console.log('data received',client);
//     // })
// }).then(client => {
//     console.log('data received',client);
// })

Wibe.then(data => {
    // console.log('promised resolved',data);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        },2000)
    })
    // Wibe2.then(client => {
    //     console.log('data received',client);
    // })
  
}).then(client => {
    console.log('data received',client);
    client.fromPromise = true
    return client
}).then(dada =>{
    console.log('data modified',dada);
})
.catch(err => console.error(' Error',err))  
.finally(() => console.log('finnaly'))



const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),ms)
    })
}

sleep(2000).then(()=> console.log('after 2 sec'))