let temp = 55

// Logical And operator - True if both sides are true. false otherwise
// Logical or operator - True if one side is true

if (temp >= 60 && temp <= 90 ) {
    console.log( 'It is pretty nice out.')
} else if (temp <= 0 || temp >= 120 ) {
    console.log('Do not go outside')
} else {
    console.log('do what you want')
}

// Challenge Area
// Are both guest vegan? If so only give vegan dishes. 
// At least one vegan, offer both dishes. 
// else, offer up anything on the menu. 

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan  ) {
    console.log('Only offer vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan  ) {
    console.log('Make sure to offer some vegan dishes')
} else {
    console.log('Offer everything on the menu.')
}