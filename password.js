// Create a new file called password.js.
// Create a variable called password and set it’s value to a string of your choice.
var password = `thisisasecureone 2@@34234`
var checkPassword = true

//Write a conditional statement that checks if the password meets the following constraints: 10 characters long, contains at least one letter and one number. If password meets constraint console log a success message or a fail message

// these are regexes I found on google
var numbersAlphabet = /^(?=.*[a-zA-Z])(?=.*[0-9])/; 
let hasWhiteSpace = /\s/.test(password) 
let specialCharCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
    if (password.match(numbersAlphabet) && password.length >= 10 && password.length > 20 && !hasWhiteSpace && specialCharCheck){
        checkPassword = true
    } else{
        checkPassword = false }

//the two additional checks I did were finding the maximum length, seeing if there was white space, and checking for a special character


if (checkPassword){
    console.log(`
        _______           _______  _______  _______  _______  _______ 
       (  ____ \|\     /|(  ____ \(  ____ \(  ____ \(  ____ \(  ____ \
       | (    \/| )   ( || (    \/| (    \/| (    \/| (    \/| (    \/
       | (_____ | |   | || |      | |      | (__    | (_____ | (_____ 
       (_____  )| |   | || |      | |      |  __)   (_____  )(_____  )
             ) || |   | || |      | |      | (            ) |      ) |
       /\____) || (___) || (____/\| (____/\| (____/\/\____) |/\____) |
       \_______)(_______)(_______/(_______/(_______/\_______)\_______)
      `)                                                
       }
else {
    console.log(`
    ______   ______     __     __         __  __     ______     ______    
   /\  ___\ /\  __ \   /\ \   /\ \       /\ \/\ \   /\  == \   /\  ___\   
   \ \  __\ \ \  __ \  \ \ \  \ \ \____  \ \ \_\ \  \ \  __<   \ \  __\   
    \ \_\    \ \_\ \_\  \ \_\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_____\ 
     \/_/     \/_/\/_/   \/_/   \/_____/   \/_____/   \/_/ /_/   \/_____/ 
                                                                          
   `)
}