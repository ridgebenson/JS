const availabeFoods = [
    {
        id: "qwe234dfh", 
        name: "Burger", 
        image:"🍔🍔", 
        price: 234
    },
    {
        id: "qwe2356dxh", 
        name: "pizza", 
        image:"🍕🍕", 
        price: 400
    },
    {
        id: "qwe2456yh", 
        name: "meat", 
        image:"🍖🍖", 
        price: 500
    },
    {
        id: "qwe2785yh", 
        name: "chicken", 
        image:"🍗🍗", 
        price: 1200
    }
]

const expensiveItems = availabeFoods.filter(food => food.price > 450);

const totalExpensiveItems = expensiveItems.reduce((acc, food) => acc + food.price, 0);

console.log(`Total bill for items over 450: ${totalExpensiveItems}`);