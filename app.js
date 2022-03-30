

// let tex = new Number(12000);
// let go = new Boolean (false);
// console.log(typeof go);

// console.log(typeof tex);

// let data = new Date();

// const dayname =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

// console.log(`

// Data      : ${data.getDate()}

// Month     : ${data.getMonth () +1 }

// Day       : ${dayname[ data.getDay()]}

// Year      : ${data.getFullYear()}




// Time     : ${data.getHours() > 12 ? (data.getHours() -12): '0'+ data.getHours()}:${data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes()}:${data.getSeconds() > 9 ? data.getMinutes():'0' + data.getSeconds()} ${data.getHours() > 12 ? 'PM' : 'Am'}


// `);

// const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// console.log( day[data.getDay()]);


// console.log(`
// ${data.getHours() >= 12 ? (data.getHours() -12) : '0' + data.getHours()}:${data.getMinutes()}${data.getHours > 12 ?'PM' : 'Am'}
// `); 

let data = new Date();


console.log(
    `
    ${data.getMonth() + 1}/${data.getDay()- 1}/${data.getFullYear()}

    ${data.getHours()}:${data.getMinutes()} ${data.getHours > 12 ? 'PM' : 'AM'}
    `
);