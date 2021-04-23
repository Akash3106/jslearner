const uid = "abcd123"

var fullName = "Akash Deep Sharma";
var email = "akash.sharma3106@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = true;
var aa;

// console.log(uid)    
// console.log(fullName)
// console.log(email)


// fullname = prompt("Enter your Name ")
if(isLoggedInFromGoogle == false) {
    aa = "NO";
}else {
    aa = "Yes";
}
console.log(`                             
With Unique ID: ${uid}
User is: ${fullName}
and his email is: ${email}
and uses the password: ${password}
courseCount is: ${courseCount}
is he Logged in from Google: ${aa}
`

);