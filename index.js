// Froyo Survey
// First we want to create a customer object that contains multiple key and value pairs
const customer = {
firstName:  "jake",
lastName: "smith",
email: "jaekSmih!aol.com",
phone:	undefined,
zipCode: "631",
favoriteFlavors: 32,
cupSize: "medium",
favoriteStore: "Target",
firstVisit:	false,
}
// Once created we will use bracket notation to fix certain pairs
    // customer[""];
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee", "strawberry", "matcha";
// We then will use delete object to remove a few properties
delete customer["zipCode"];
delete customer["favoriteStore"];
// will add objects using dot notation
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
// display the keys of the survey by using Object.key("");
console.log(Object.keys(customer));