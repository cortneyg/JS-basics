// Lexical Scope (static scope)
// Global Scope - defined outside of all code blocks
// Local scope - defined inside a code block (if)

// In a scope you can acess variables defined in that scope, or in any parent/ancestor scope.

// Global Scope (varOne)
    // Local scope (varTwo)
        // Local scope (varFour)
    // Local scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}


