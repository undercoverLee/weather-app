// ARROW FUNCTION
const hello = (name = "user", surname) => {
    console.log("Hello " + name)
}

// 123345678
const login = (name = "admin", password = "admin") => {

    var emri = document.getElementById('username').value
    var fjalekalimi = document.getElementById('password').value
    var success = document.getElementById('success')

    if (emri == name && fjalekalimi == password) {
        success.innerHTML = "You are in"
    }
    else {
        success.innerHTML = "Incorret password"
    }


}

const chage_password = (password = "admin") => {
    // merrne inputin 
    // merre divin

    // kushtin 
}

hello('Vardona')


const product = {
    name: "Notebook",
    price: 3,
    stock: 200
}

// type: order ose devlivery



const trasation = (type, { name, price, stock } = {}) => {
    console.log("Type: ", type, "Name:", name, "Price:", price, "Stock:", stock)
}

trasation('order', product )
