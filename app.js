//Login page
let userName = "salman"
function login() {
    const user = "salman";
    const pass = "4321"

    let getuser = document.getElementById("username").value;
    let getpass = document.getElementById("password").value;

    if (user == getuser && pass == getpass) {
        alert("Login Sucessfully" +"  "+ Date())
        window.open('main-page.html')
    }
    
    else if(user != getuser && pass == getpass){
        alert("Username Incorrect"+" "+ Date())  
    }
    else if(user == getuser && pass != getpass){
        alert("Password Incorrect"+" "+ Date())  
    }
    else if  (user == null || pass==null){
        alert("Enter the Username and Password to login"+" "+ Date())  
    }
   else{
    alert("Please Enter the Username and Password")
   }

}



let usertag="Salman Paris"

// Main Page

document.getElementById("name-tag").textContent = "Hi," + usertag
let timings = new Date()
let ye = timings.getFullYear()
let mo = timings.getMonth() + 1
let da = timings.getDate()
let hr = timings.getHours()
let mi = timings.getMinutes()
let se = timings.getSeconds()
let maintime = da + "/" + mo + "/" + ye + " " + "[" + hr + ":" + mi + ":" + se + "]";
document.getElementById("time-tag").textContent = maintime;




// Deposit

let amount = "100000"
let deamount;
let wiamount;

function deposit() {
    deamount = parseInt(prompt("Enter The Amount"));
    if (amount += deamount) {
        alert("Amount" + " " + deamount + " " + "Sucessfully Deposited")
    }
    else {
        !deamount
        alert("Enter The Amount To Deposit")

    }
}



// Check Balance

function balance() {
    alert("Main Balance" + amount)
}



// Withdraw

function withdraw() {
    wiamount = parseInt(prompt("Enter The Amount"))
    if (amount -= wiamount) {
        alert("Amount" + " " + wiamount + " " + "Sucessfully Withdrawn")

    }
    else if (!wiamount) {
        alert("Enter the Amount To Withdraw")
    }
    else {
        wiamount > amount
        alert("Insufficient Balance")

    }

}



// Transfer

let tr;
let ac;

function transfer() {
    ac = parseInt(prompt("Enter The AC Number"))
    if (!ac) {
        alert("Please Enter AC Number")
    }
    else {
        tr = parseInt(prompt("Enter The Amount To Transfer"))
        if (!tr) {
            alert("Please Enter The Amount")
        }
        else {
            amount -= tr
            alert("Amount" + " " + tr + " " + "Sucessfully Transfered")
        }
    }
}



//  Change Pin


let password = "4321"
let oldpin;
let newpin;
function changepin() {
    oldpin = parseInt(prompt("Enter a old pin to verify"))
    if (oldpin == password) {
        alert("Verify Completed")
        newpin = parseInt(prompt("Create a new pin"))
        password = newpin
    }
    else {
        alert("Enter a correct old pin to verify")
    }

}

// Exit


function exit() {
    window.close('main-page.html')
}
