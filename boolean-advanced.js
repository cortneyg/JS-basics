let isAccountLocked = false
let userRole = 'user'


if (isAccountLocked) {
    console.log('It is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome!')
}

// Challenge area

let temp = 100

// It is freezing outside
// It is hot outside
// Go for it. It is pretty nice. 

if (temp <= 50) {
    console.log('It is cold outside')
} else if (temp >= 100 ) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is pretty nice')
}