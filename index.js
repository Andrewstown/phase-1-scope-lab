var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = "non bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob"
}