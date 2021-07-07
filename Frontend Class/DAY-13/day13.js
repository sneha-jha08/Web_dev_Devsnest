// //this is used for asynchronous methods 

// var promise = new Promise((resolve, reject) => {
//     let a = 1 + 1;

//     if (a === 3) { resolve({ "success": true }) } else { reject({ "failed": false }) } // here we'll have an error as we arent returning any value
// });
// // console.log(promise);

// //promise works like real life promises
// //it has 3 stages::fulfilled,rejected,pending
// //if the condition for the promise is true then it'll log out fulfilled
// //if the condition for the promise is false then it'll log out rejected
// //if the condition for the promise is not mentioned then it'll log out pending let a = 1 + 1;



// promise
//     .then(() => { console.log("Promise was resolved"); })
//     .catch(() => { console.log("Promise was rejected"); }) //prints this line


// promise
//     .then((data) => { console.log(data); })
//     .catch((error) => { console.log(error); })

//fetch api
// console.log();
// fetch('https://api.github.com/users/sneha-jha08')
//     .then(res => (res.json())
//         .then(data => {
//                 console.log("User Login: " + data.login);
//                 console.log("User URL: " + data.html_url);
//                 console.log("UserName: " + data.name)
// }))

//data.login
//data.html_url
//data.name
// .catch(error => console.log(error))
// .then(res => console.log(res.ok))
// .then(data => (console.log(data.json())))

// async function hello() {
//     // console.log('hello world');
//     // return "Hello"
//     const res = await fetch('https://api.github.com/users/sneha-jha08');
//     console.log(res);
// }
// var a = hello();
// console.log(a);
// a.then(data => console.log(data))

// var User_Login = data.login;
// var User_URL = data.html_url;
// var UserName = data.name;
// div.innerHTML = "Username: " + UserName + "< br >" + "User Login ID: " + User_Login + "< br >" + "User HTML URL " + User_URL;
// console.log("User Login: " + data.login);
// console.log("User URL: " + data.html_url);
// console.log("UserName: " + data.name)